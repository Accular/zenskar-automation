# Invoice Generation Guide

## Overview
Generate invoices for all three customers based on their usage data and contract configurations, demonstrating the complete billing cycle from usage to payment.

## Invoice Generation Strategy

### Billing Cycle Configuration
- **Customer A**: Monthly billing on 1st of each month
- **Customer B**: Monthly billing on 15th of each month  
- **Customer C**: Monthly billing on 1st of each month

### Invoice Requirements
- **Minimum 2 invoices per customer** (6 total invoices)
- **Different usage scenarios** to demonstrate pricing models
- **Accurate calculations** for all pricing tiers and commitments
- **Professional formatting** with detailed line items

## Customer A Invoice Generation

### Invoice #1: January 2024 (Baseline Usage)

**Customer**: TechCorp Solutions (`customer_a`)  
**Billing Period**: January 1-31, 2024  
**Invoice Date**: February 1, 2024  
**Due Date**: March 3, 2024 (Net 30)

#### Usage Summary
- **SMS Delivered**: 1,000 messages
- **WhatsApp Messages Sent**: 2,500 messages
- **AI SMS Processed**: 1,000 messages

#### Billing Calculations

**SMS Service**
```
1,000 SMS × $0.01 per SMS = $10.00
```

**WhatsApp Messaging Service**
```
2,500 messages ÷ 1,000 × $10.00 = $25.00
(Volume pricing: $10 per 1,000 messages)
```

**AI SMS Service**
```
Tier 1: 1,000 messages × $2.00 = $2,000.00
(First 1,000 messages at $2.00 each)
```

**Invoice Total**: $2,035.00

#### Zenskar Invoice Configuration
1. Navigate to **Billing** → **Generate Invoice**
2. Select Customer: `customer_a`
3. Select Period: January 2024
4. Review usage aggregation:
   - SMS: 1,000 delivered
   - WhatsApp: 2,500 sent
   - AI SMS: 1,000 processed
5. Verify calculations match pricing rules
6. Generate and review invoice draft
7. Send invoice to customer

### Invoice #2: March 2024 (High Volume Usage)

**Customer**: TechCorp Solutions (`customer_a`)  
**Billing Period**: March 1-31, 2024  
**Invoice Date**: April 1, 2024  
**Due Date**: May 1, 2024 (Net 30)

#### Usage Summary
- **SMS Delivered**: 12,000 messages
- **WhatsApp Messages Sent**: 15,000 messages
- **AI SMS Processed**: 3,500 messages

#### Billing Calculations

**SMS Service**
```
12,000 SMS × $0.01 per SMS = $120.00
```

**WhatsApp Messaging Service**
```
15,000 messages ÷ 1,000 × $10.00 = $150.00
```

**AI SMS Service**
```
Tier 1: 1,000 messages × $2.00 = $2,000.00
Tier 2: 1,000 messages × $1.00 = $1,000.00
Tier 3: 1,500 messages × $0.50 = $750.00
Total AI SMS: $3,750.00
```

**Invoice Total**: $4,020.00

## Customer B Invoice Generation

### Invoice #1: February 2024 (Above Minimum)

**Customer**: Global Marketing Inc (`customer_b`)  
**Billing Period**: February 1-29, 2024  
**Invoice Date**: February 15, 2024  
**Due Date**: March 1, 2024 (Net 15)

#### Usage Summary
- **SMS Sent**: 1,500 messages
- **AI SMS Processed**: 350 messages

#### Billing Calculations

**SMS Service**
```
1,500 SMS × $0.02 per SMS = $30.00
```

**AI SMS Service**
```
Tier 1: 350 messages × $2.00 = $700.00
```

**Subtotal**: $730.00  
**Minimum Commitment**: $100.00  
**Commitment Applied**: $0.00 (usage exceeds minimum)

**Invoice Total**: $730.00

#### Special Notes
- Usage exceeds minimum commitment
- No additional commitment charge required

### Invoice #2: April 2024 (Below Minimum Scenario)

**Customer**: Global Marketing Inc (`customer_b`)  
**Billing Period**: April 1-30, 2024  
**Invoice Date**: April 15, 2024  
**Due Date**: April 30, 2024 (Net 15)

#### Usage Summary
- **SMS Sent**: 1,800 messages
- **AI SMS Processed**: 60 messages

#### Billing Calculations

**SMS Service**
```
1,800 SMS × $0.02 per SMS = $36.00
```

**AI SMS Service**
```
Tier 1: 60 messages × $2.00 = $120.00
```

**Usage Subtotal**: $156.00  
**Minimum Commitment**: $100.00  
**Commitment Applied**: $0.00 (usage exceeds minimum)

**Invoice Total**: $156.00

#### Alternative Low Usage Example
For demonstration of minimum commitment:
- SMS: 1,000 × $0.02 = $20.00
- AI SMS: 30 × $2.00 = $60.00
- Subtotal: $80.00
- Minimum commitment charge: $20.00
- **Final total**: $100.00

## Customer C Invoice Generation

### Invoice #1: January 2024 (Free Tier Usage)

**Customer**: StartupConnect (`customer_c`)  
**Billing Period**: January 1-31, 2024  
**Invoice Date**: February 1, 2024  
**Due Date**: March 17, 2024 (Net 45)

#### Usage Summary
- **SMS Delivered**: 1,100 messages
- **WhatsApp Messages Sent**: 90 messages

#### Billing Calculations

**SMS Service**
```
1,100 SMS × $0.01 per SMS = $11.00
```

**WhatsApp Messaging Service**
```
Total messages: 90
Free allowance: 100 messages
Billable messages: 0 (within free tier)
Charge: $0.00
```

**Invoice Total**: $11.00

#### Special Notes
- WhatsApp usage within free tier limit
- No WhatsApp charges applied

### Invoice #2: May 2024 (Tier Transition)

**Customer**: StartupConnect (`customer_c`)  
**Billing Period**: May 1-31, 2024  
**Invoice Date**: June 1, 2024  
**Due Date**: July 16, 2024 (Net 45)

#### Usage Summary
- **SMS Delivered**: 7,500 messages
- **WhatsApp Messages Sent**: 1,500 messages

#### Billing Calculations

**SMS Service**
```
7,500 SMS × $0.01 per SMS = $75.00
```

**WhatsApp Messaging Service**
```
Total messages: 1,500
Free allowance: 100 messages
Billable messages: 1,400
Usage category: 1,000-2,000 range
Flat fee: $1.00
```

**Invoice Total**: $76.00

#### Special Notes
- WhatsApp usage in medium tier (1,000-2,000 range)
- Flat fee pricing applied after free allowance

## Invoice Template Structure

### Standard Invoice Components

#### Header Section
```
INVOICE

From: Smsworld
      123 Communication Street
      San Francisco, CA 94105
      
To:   [Customer Name]
      [Customer Address]
      
Invoice #: INV-2024-[Customer]-[Month]-001
Date: [Invoice Date]
Due Date: [Due Date]
```

#### Service Details Section
```
BILLING PERIOD: [Start Date] - [End Date]

SERVICE BREAKDOWN:
├── SMS Service
│   ├── Usage: [Quantity] messages delivered
│   ├── Rate: $[Rate] per message
│   └── Subtotal: $[Amount]
├── WhatsApp Messaging
│   ├── Usage: [Quantity] messages sent
│   ├── Rate: [Rate Structure]
│   └── Subtotal: $[Amount]
└── AI SMS Service
    ├── Usage: [Quantity] messages processed
    ├── Rate: [Tiered Rate Structure]
    └── Subtotal: $[Amount]
```

#### Payment Terms Section
```
PAYMENT TERMS:
- Payment Due: [Due Date]
- Payment Methods: ACH, Credit Card, Wire Transfer
- Late Fees: [Rate]% per month on overdue amounts
- Contact: billing@smsworld.com
```

## Invoice Generation Process

### Automated Billing Steps
1. **Usage Aggregation** (Daily at 02:00 UTC)
   - Collect all usage events for billing period
   - Apply deduplication rules
   - Validate data completeness

2. **Pricing Calculation** (Monthly on billing date)
   - Apply customer-specific pricing rules
   - Calculate tier-based charges
   - Apply minimum commitments
   - Apply free allowances

3. **Invoice Generation** (Monthly on billing date)
   - Generate invoice draft
   - Review pricing calculations
   - Apply taxes and fees (if applicable)
   - Finalize invoice

4. **Invoice Delivery** (Same day as generation)
   - Send via email
   - Post to customer portal
   - Update payment system

### Manual Review Points
- **High usage alerts** (>150% of average)
- **Minimum commitment applications**
- **Free tier boundary crossings**
- **New tier transitions**

## Invoice Validation

### Calculation Verification

#### Customer A Verification
- [ ] SMS: Rate × quantity calculation correct
- [ ] WhatsApp: Volume pricing calculation correct
- [ ] AI SMS: Tiered pricing calculation correct
- [ ] Total: Sum of all services correct

#### Customer B Verification  
- [ ] SMS: Higher rate ($0.02) applied correctly
- [ ] AI SMS: Same tiered structure as Customer A
- [ ] Minimum commitment: Logic applied when usage < $100
- [ ] Total: Includes commitment charge when applicable

#### Customer C Verification
- [ ] SMS: Same rate as Customer A ($0.01)
- [ ] WhatsApp: Free allowance applied correctly
- [ ] WhatsApp: Flat fee tiers applied correctly
- [ ] Total: Free tier savings calculated correctly

### Invoice Quality Checks
- [ ] Customer details accurate
- [ ] Billing period correct
- [ ] Usage quantities match aggregated data
- [ ] Pricing rates match contract terms
- [ ] Payment terms reflect customer settings
- [ ] Invoice numbers sequential and unique

## Payment Processing Integration

### Payment Method Configuration
- **Customer A**: ACH primary, Credit Card backup
- **Customer B**: Credit Card primary, ACH backup  
- **Customer C**: Credit Card only

### Payment Collection
1. **Invoice generated** → Payment request sent
2. **Auto-pay enabled** → Automatic charge attempted
3. **Payment failed** → Retry logic and customer notification
4. **Manual payments** → Payment portal link provided

### Dunning Management
- **Day 1**: Friendly payment reminder
- **Day 7**: Second payment reminder with late fee warning
- **Day 15**: Final notice with service suspension warning
- **Day 30**: Account review for collection action

## Analytics & Reporting

### Revenue Analytics
- **Monthly recurring revenue** per customer
- **Average revenue per user** (ARPU)
- **Revenue growth trends**
- **Service profitability analysis**

### Billing Analytics
- **Invoice processing time**
- **Payment collection rates**
- **Days sales outstanding** (DSO)
- **Customer payment behavior**

### Usage Analytics
- **Tier distribution** across customers
- **Free tier utilization** rates
- **Commitment effectiveness** (Customer B)
- **Growth trajectory** per customer

## Implementation Checklist

### Invoice Generation Setup
- [ ] Billing cycles configured for all customers
- [ ] Pricing calculations tested and verified
- [ ] Invoice templates created and tested
- [ ] Email delivery configured
- [ ] Customer portal access verified

### Payment Processing Setup
- [ ] Payment methods configured
- [ ] Auto-pay settings verified
- [ ] Dunning process configured
- [ ] Payment portal functional
- [ ] Backup payment processing tested

### Monitoring & Alerts
- [ ] Invoice generation monitoring
- [ ] Payment collection tracking
- [ ] Failed payment alerts
- [ ] Unusual usage pattern alerts
- [ ] Revenue performance dashboards

## Success Metrics
- **Invoice Accuracy**: 100% calculation accuracy
- **Processing Time**: <2 hours from billing date
- **Collection Rate**: >95% within payment terms
- **Customer Satisfaction**: No billing disputes

## Next Steps
1. Proceed to `09-validation-testing.md`
2. Validate all billing calculations
3. Test complete end-to-end flow
4. Perform quality assurance testing

## Zenskar References
- [Invoice Generation](https://docs.zenskar.com/docs/invoice-generation)
- [Billing Cycles](https://docs.zenskar.com/docs/billing-cycles)
- [Payment Processing](https://docs.zenskar.com/docs/payment-processing)
- [Revenue Analytics](https://docs.zenskar.com/docs/analytics) 