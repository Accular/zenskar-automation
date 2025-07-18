## 🚀 Features

- **Real-time webhook processing** from Stripe
- **Automatic customer creation** in Zenskar
- **Error handling and logging**
- **Production-ready deployment**

## 📋 Prerequisites

- Node.js 18+
- Stripe account (test mode)
- Zenskar account with API access
- ngrok (for local development)

## 🛠️ Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Environment Variables
Create a `.env` file:
```env
ZENSKAR_API_KEY=your_zenskar_api_key
ZENSKAR_ORG_ID=your_zenskar_org_id
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
```

### 3. Start Server
### 4. Expose with ngrok
### 5. Configure Stripe Webhook


## 🌐 Production Deployment

### Railway (Recommended)

## 📊 API Endpoints

- `POST /webhook` - Stripe webhook endpoint
- `GET /health` - Health check endpoint

## 🔧 Configuration

### Stripe Webhook Events
- `customer.created` - Triggers customer creation in Zenskar

### Zenskar API Fields
- `customer_name` - Customer name (required)
- `email` - Customer email (required)
- `external_id` - Stripe customer ID (optional)

MIT License 
