# Customer Setup Guide: Customer Profile Creation

## Overview
Create customer profiles for three distinct customers (A, B, C) with different billing requirements and pricing structures.

## Customer Profile Requirements

### Customer A
**Profile Details:**
- **Customer Name**: TechCorp Solutions
- **Customer ID**: `customer_a`
- **Email**: billing@techcorp-solutions.com
- **Industry**: Technology Services
- **Billing Cycle**: Monthly
- **Payment Terms**: Net 30

**Services Required:**
- SMS Service
- WhatsApp Messaging
- AI SMS Service

**Pricing Model**: Per-unit pricing

### Customer B
**Profile Details:**
- **Customer Name**: Global Marketing Inc
- **Customer ID**: `customer_b`
- **Email**: accounts@globalmarketing.com
- **Industry**: Marketing & Advertising
- **Billing Cycle**: Monthly
- **Payment Terms**: Net 15

**Services Required:**
- SMS Service
- AI SMS Service (no WhatsApp)

**Pricing Model**: Per-unit with minimum commitment

### Customer C
**Profile Details:**
- **Customer Name**: StartupConnect
- **Customer ID**: `customer_c`
- **Email**: finance@startupconnect.io
- **Industry**: Business Services
- **Billing Cycle**: Monthly
- **Payment Terms**: Net 45

**Services Required:**
- SMS Service
- WhatsApp Messaging (no AI SMS)

**Pricing Model**: Tiered pricing with free allowances

## Customer Creation Steps

### Step 1: Customer A - TechCorp Solutions
1. Navigate to **Customers** section in Zenskar
2. Click **Add Customer**
3. Fill in customer details:
   ```
   Customer Name: TechCorp Solutions
   Customer ID: customer_a
   Email: billing@techcorp-solutions.com
   Phone: +1-555-0101
   Address: 123 Tech Street, San Francisco, CA 94105
   Industry: Technology Services
   Customer Type: Enterprise
   ```
4. Set billing preferences:
   ```
   Billing Cycle: Monthly
   Billing Date: 1st of each month
   Payment Terms: Net 30
   Currency: USD
   Time Zone: America/Los_Angeles
   ```
5. Configure notifications:
   - Invoice notifications: Enabled
   - Payment reminders: Enabled
   - Usage alerts: Enabled (>$1000/month)

### Step 2: Customer B - Global Marketing Inc
1. Navigate to **Customers** section
2. Click **Add Customer**
3. Fill in customer details:
   ```
   Customer Name: Global Marketing Inc
   Customer ID: customer_b
   Email: accounts@globalmarketing.com
   Phone: +1-555-0202
   Address: 456 Marketing Ave, New York, NY 10001
   Industry: Marketing & Advertising
   Customer Type: Enterprise
   ```
4. Set billing preferences:
   ```
   Billing Cycle: Monthly
   Billing Date: 15th of each month
   Payment Terms: Net 15
   Currency: USD
   Time Zone: America/New_York
   ```
5. Configure notifications:
   - Invoice notifications: Enabled
   - Payment reminders: Enabled
   - Minimum commitment alerts: Enabled

### Step 3: Customer C - StartupConnect
1. Navigate to **Customers** section
2. Click **Add Customer**
3. Fill in customer details:
   ```
   Customer Name: StartupConnect
   Customer ID: customer_c
   Email: finance@startupconnect.io
   Phone: +1-555-0303
   Address: 789 Startup Blvd, Austin, TX 73301
   Industry: Business Services
   Customer Type: SMB
   ```
4. Set billing preferences:
   ```
   Billing Cycle: Monthly
   Billing Date: 1st of each month
   Payment Terms: Net 45
   Currency: USD
   Time Zone: America/Chicago
   ```
5. Configure notifications:
   - Invoice notifications: Enabled
   - Payment reminders: Enabled
   - Free tier usage alerts: Enabled

## Customer Metadata Configuration

### Customer A Metadata
```json
{
  "customer_segment": "enterprise",
  "contract_type": "standard",
  "billing_complexity": "simple",
  "services": ["SMS", "WhatsApp", "AI_SMS"],
  "pricing_model": "per_unit",
  "special_requirements": []
}
```

### Customer B Metadata
```json
{
  "customer_segment": "enterprise",
  "contract_type": "minimum_commitment",
  "billing_complexity": "medium",
  "services": ["SMS", "AI_SMS"],
  "pricing_model": "per_unit_with_minimum",
  "special_requirements": ["monthly_minimum_$100"]
}
```

### Customer C Metadata
```json
{
  "customer_segment": "smb",
  "contract_type": "tiered",
  "billing_complexity": "complex",
  "services": ["SMS", "WhatsApp"],
  "pricing_model": "tiered_with_free_tier",
  "special_requirements": ["free_whatsapp_messages_100"]
}
```

## Payment Method Setup

### Customer A - TechCorp Solutions
- **Payment Method**: ACH/Bank Transfer
- **Backup Method**: Credit Card (**** 1234)
- **Auto-pay**: Enabled

### Customer B - Global Marketing Inc
- **Payment Method**: Credit Card (**** 5678)
- **Backup Method**: ACH/Bank Transfer
- **Auto-pay**: Enabled

### Customer C - StartupConnect
- **Payment Method**: Credit Card (**** 9012)
- **Backup Method**: None
- **Auto-pay**: Disabled (manual payments)

## Customer Communication Preferences

### Notification Settings
| Customer | Invoice | Payment Reminders | Usage Alerts | Marketing |
|----------|---------|-------------------|-------------|-----------|
| Customer A | Email + Portal | Email | Email ($1000+) | Opt-in |
| Customer B | Email + Portal | Email + SMS | Email ($500+) | Opt-out |
| Customer C | Email | Email | Email ($200+) | Opt-in |

## Customer Validation Checklist

### Customer A Checklist
- [ ] Profile created with correct ID: `customer_a`
- [ ] Billing cycle set to monthly (1st of month)
- [ ] Payment terms: Net 30
- [ ] All three services enabled
- [ ] Enterprise customer type assigned
- [ ] Usage alerts configured

### Customer B Checklist
- [ ] Profile created with correct ID: `customer_b`
- [ ] Billing cycle set to monthly (15th of month)
- [ ] Payment terms: Net 15
- [ ] SMS and AI SMS services enabled
- [ ] Minimum commitment flag set
- [ ] Enterprise customer type assigned

### Customer C Checklist
- [ ] Profile created with correct ID: `customer_c`
- [ ] Billing cycle set to monthly (1st of month)
- [ ] Payment terms: Net 45
- [ ] SMS and WhatsApp services enabled
- [ ] SMB customer type assigned
- [ ] Free tier configuration ready

## Customer Hierarchy & Relationships

### Account Structure
```
Smsworld (Provider)
├── Customer A (TechCorp Solutions)
│   ├── SMS Service Contract
│   ├── WhatsApp Service Contract
│   └── AI SMS Service Contract
├── Customer B (Global Marketing Inc)
│   ├── SMS Service Contract
│   └── AI SMS Service Contract
└── Customer C (StartupConnect)
    ├── SMS Service Contract
    └── WhatsApp Service Contract
```

## Integration Points

### CRM Integration
- Customer data sync with Salesforce
- Contact information updates
- Account status changes

### Payment Processing
- Stripe integration for credit cards
- ACH processing setup
- Payment failure handling

### Communication Channels
- Email notifications via SendGrid
- SMS alerts via Twilio
- In-app notifications

## Next Steps
1. Proceed to contract configuration:
   - `04-customer-a-contract.md`
   - `05-customer-b-contract.md`
   - `06-customer-c-contract.md`
2. Configure pricing models for each customer
3. Set up billing schedules

## Zenskar References
- [Customer Management](https://docs.zenskar.com/docs/customers)
- [Billing Cycles](https://docs.zenskar.com/docs/billing-cycles)
- [Payment Methods](https://docs.zenskar.com/docs/payment-methods) 