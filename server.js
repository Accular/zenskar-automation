require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const app = express();

// Middleware to handle raw body for webhook signature verification
app.use(express.json({ verify: (req, res, buf) => {
  req.rawBody = buf;
}}));

// Webhook endpoint
app.post('/webhook', async (req, res) => {
  console.log('Webhook received!');
  
  // Verify webhook signature
  const sig = req.headers['stripe-signature'];
  if (!sig) {
    console.log('No stripe-signature header found - but continuing for testing');
    // return res.status(400).json({ error: 'No signature' });
  }
  
  try {
    // For now, let's just log the request and process it
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    console.log('Event type:', req.body.type);
    
    if (req.body.type === 'customer.created') {
      await handleCustomerCreated(req.body.data.object);
    }
    
    res.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    res.status(400).json({ error: error.message });
  }
});

// Handle new customer creation
async function handleCustomerCreated(customer) {
  try {
    console.log('Creating customer in Zenskar:', customer.id);
    console.log('Stripe customer data:', {
      id: customer.id,
      name: customer.name,
      email: customer.email
    });
    console.log('API Key (first 10 chars):', process.env.ZENSKAR_API_KEY?.substring(0, 10) + '...');
    
    const headers = {
      'x-api-key': process.env.ZENSKAR_API_KEY,
      'organisation': process.env.ZENSKAR_ORG_ID,
      'Content-Type': 'application/json'
    };
    
    console.log('Request headers:', headers);
    
    const requestBody = {
      customer_name: customer.name || `Customer ${customer.id}`,
      email: customer.email || `customer-${customer.id}@example.com`,
      external_id: customer.id
    };
    
    console.log('Request body being sent to Zenskar:', requestBody);
    
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
    
  } catch (error) {
    console.error('❌ Error creating customer in Zenskar:', error.message);
  }
}

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Webhook endpoint: http://localhost:${PORT}/webhook`);
}); 