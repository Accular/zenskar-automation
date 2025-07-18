# Stripe-Zenskar Integration

Real-time customer synchronization between Stripe and Zenskar using webhooks and Node.js.

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
```bash
node server.js
```

### 4. Expose with ngrok
```bash
ngrok http 3000
```

### 5. Configure Stripe Webhook
Set webhook URL to: `https://your-ngrok-url.ngrok-free.app/webhook`

## 🌐 Production Deployment

### Railway (Recommended)
1. Connect GitHub repository to Railway
2. Set environment variables in Railway dashboard
3. Deploy automatically

### Heroku
```bash
heroku create your-app-name
heroku config:set ZENSKAR_API_KEY=your_key
git push heroku main
```

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

## 🚨 Troubleshooting

### Common Issues
1. **401 Unauthorized** - Check Zenskar API key and org ID
2. **400 Bad Request** - Verify field names (`customer_name` not `name`)
3. **Webhook not received** - Check ngrok URL and Stripe webhook configuration

## 📝 License

MIT License 