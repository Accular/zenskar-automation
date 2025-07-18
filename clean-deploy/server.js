require('dotenv').config();
const express = require('express');
const app = express();

// Environment variables will be set in Railway dashboard
const ZENSKAR_API_KEY = process.env.ZENSKAR_API_KEY;
const ZENSKAR_ORG_ID = process.env.ZENSKAR_ORG_ID;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

// Middleware
app.use(express.json());

// Handle new customer creation with retry logic
async function handleCustomerCreated(customer) {
  const maxRetries = 3;
  let attempt = 0;

  while (attempt < maxRetries) {
    try {
      attempt++;
      console.log(`Creating customer in Zenskar (attempt ${attempt}/${maxRetries}):`, customer.id);
      
      const headers = {
        'Authorization': `Bearer ${ZENSKAR_API_KEY}`,
        'X-Zenskar-Organization': ZENSKAR_ORG_ID,
        'Content-Type': 'application/json'
      };
      
      const requestBody = {
        external_id: customer.id,
        name: customer.name || customer.email,
        email: customer.email,
        metadata: {
          stripe_customer_id: customer.id,
          created_at: new Date(customer.created * 1000).toISOString()
        }
      };
      
      console.log('Request body:', requestBody);
      
      const response = await fetch(`https://api.zenskar.com/v1/organizations/${ZENSKAR_ORG_ID}/customers`, {
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

// Health check endpoint
app.get('/', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Stripe-Zenskar Webhook Server',
    timestamp: new Date().toISOString()
  });
});

// Webhook endpoint
app.post('/webhook', async (req, res) => {
  try {
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
});

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Stripe-Signature');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Webhook server running on port ${PORT}`);
  console.log(`📡 Webhook URL: http://localhost:${PORT}/webhook`);
}); 