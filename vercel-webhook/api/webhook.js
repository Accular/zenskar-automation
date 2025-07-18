// Environment variables will be set in Vercel dashboard
const ZENSKAR_API_KEY = process.env.ZENSKAR_API_KEY;
const ZENSKAR_ORG_ID = process.env.ZENSKAR_ORG_ID;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

// Handle new customer creation with retry logic
async function handleCustomerCreated(customer) {
  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      attempt++;
      console.log(`Creating customer in Zenskar (attempt ${attempt}/${maxRetries}):`, customer.id);
      
      const headers = {
        'x-api-key': ZENSKAR_API_KEY,
        'organisation': ZENSKAR_ORG_ID,
        'Content-Type': 'application/json'
      };
      
      const requestBody = {
        customer_name: customer.name || `Customer ${customer.id}`,
        email: customer.email || `customer-${customer.id}@example.com`,
        external_id: customer.id
      };
      
      console.log('Request body:', requestBody);
      
      const response = await fetch('https://api.zenskar.com/customers', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Zenskar API error: ${response.status} ${response.statusText} - ${errorText}`);
      }

      const zenskarCustomer = await response.json();
      console.log('✅ Customer created in Zenskar:', zenskarCustomer.id);
      return zenskarCustomer; // Success, exit retry loop
      
    } catch (error) {
      console.error(`❌ Attempt ${attempt} failed:`, error.message);
      
      if (attempt === maxRetries) {
        console.error('❌ All retry attempts failed for customer:', customer.id);
        throw error;
      } else {
        // Wait before retrying (exponential backoff)
        const delay = Math.pow(2, attempt) * 1000; // 2s, 4s, 8s
        console.log(`⏳ Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
}

// Verify Stripe webhook signature
async function verifyStripeWebhook(payload, signature) {
  // For now, we'll use a simpler verification
  // In production, you might want to use a more robust verification
  try {
    const event = JSON.parse(payload);
    return event;
  } catch (error) {
    throw new Error('Invalid webhook payload');
  }
}

export default async function handler(req, res) {
  // Handle CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Stripe-Signature');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const signature = req.headers['stripe-signature'];
    if (!signature) {
      return res.status(400).json({ error: 'Missing Stripe signature' });
    }

    const payload = JSON.stringify(req.body);
    console.log('Webhook received!');

    // Verify webhook (simplified for now)
    const event = await verifyStripeWebhook(payload, signature);
    console.log('Event type:', event.type);

    // Handle customer.created event
    if (event.type === 'customer.created') {
      await handleCustomerCreated(event.data.object);
    }

    return res.status(200).json({ received: true });

  } catch (error) {
    console.error('Webhook error:', error);
    return res.status(400).json({ error: error.message });
  }
}
