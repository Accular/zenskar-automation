# Customer C Contract: StartupConnect

## Contract Overview
Configure complex tiered pricing with free allowances for Customer C, covering SMS and WhatsApp services with sophisticated pricing structures.

## Customer C Pricing Requirements
- **SMS**: $0.01 per SMS delivered (same as Customer A)
- **WhatsApp**:
  - First 100 messages are free
  - $2 if total is < 1000
  - $1 if between 1000–2000
  - $0.5 if > 2000

## Contract Configuration

### Contract Details
- **Customer**: StartupConnect (`customer_c`)
- **Contract ID**: `contract_customer_c_001`
- **Start Date**: 2024-01-01
- **End Date**: 2024-12-31
- **Billing Cycle**: Monthly (1st of each month)
- **Currency**: USD
- **Special Features**: Free tiers, Complex tiered pricing

### Service 1: SMS Service

**Product Configuration:**
- **Product**: SMS Service (`SMS_001`)
- **Pricing Model**: Per-unit pricing (same as Customer A)
- **Billing Metric**: `sms_delivered`

**Pricing Structure:**
```json
{
  "pricing_model": "per_unit",
  "unit_price": 0.01,
  "currency": "USD",
  "billing_unit": "per_sms_delivered",
  "minimum_charge": 0,
  "rounding": "round_to_cent"
}
```

**Zenskar Configuration Steps:**
1. Navigate to **Contracts** → **Create Contract**
2. Select Customer: `customer_c`
3. Add Product: `SMS_001`
4. Set Pricing Model: **Per Unit**
5. Configure pricing:
   - Unit Price: `$0.01`
   - Billing Metric: `sms_delivered`
   - No minimum charges
6. Set effective dates: Jan 1, 2024 - Dec 31, 2024

### Service 2: WhatsApp Messaging (Complex Tiered)

**Product Configuration:**
- **Product**: WhatsApp Messaging Service (`WHATSAPP_001`)
- **Pricing Model**: Complex tiered pricing with free allowance
- **Billing Metric**: `whatsapp_messages_sent`

**Pricing Structure:**
```json
{
  "pricing_model": "complex_tiered",
  "free_allowance": 100,
  "tiers": [
    {
      "tier_name": "Free Tier",
      "from": 0,
      "to": 100,
      "unit_price": 0.00,
      "tier_mode": "free_allowance"
    },
    {
      "tier_name": "Low Usage (101-999)",
      "from": 101,
      "to": 999,
      "unit_price": 2.00,
      "tier_mode": "flat_fee",
      "condition": "total_usage < 1000"
    },
    {
      "tier_name": "Medium Usage (1000-2000)",
      "from": 1000,
      "to": 2000,
      "unit_price": 1.00,
      "tier_mode": "flat_fee",
      "condition": "total_usage >= 1000 AND total_usage <= 2000"
    },
    {
      "tier_name": "High Usage (>2000)",
      "from": 2001,
      "to": null,
      "unit_price": 0.50,
      "tier_mode": "flat_fee",
      "condition": "total_usage > 2000"
    }
  ],
  "currency": "USD",
  "billing_unit": "per_whatsapp_message_sent"
}
```

**Pricing Logic Examples:**
- **50 messages**: Free (within 100 free messages) = $0.00
- **100 messages**: Free (exactly at free limit) = $0.00
- **500 messages**: 400 paid messages × $2.00 = $2.00 (flat fee for <1000 total)
- **1500 messages**: 1400 paid messages × $1.00 = $1.00 (flat fee for 1000-2000 range)
- **2500 messages**: 2400 paid messages × $0.50 = $0.50 (flat fee for >2000 range)

**Alternative Pricing Interpretation:**
If the pricing is per-message after free tier:
```json
{
  "pricing_model": "tiered_with_free_allowance",
  "free_allowance": 100,
  "tiers": [
    {
      "tier_name": "Messages 101-999",
      "from": 101,
      "to": 999,
      "unit_price": 0.002,
      "tier_mode": "per_unit"
    },
    {
      "tier_name": "Messages 1000-2000", 
      "from": 1000,
      "to": 2000,
      "unit_price": 0.001,
      "tier_mode": "per_unit"
    },
    {
      "tier_name": "Messages >2000",
      "from": 2001,
      "to": null,
      "unit_price": 0.0005,
      "tier_mode": "per_unit"
    }
  ]
}
```

**Zenskar Configuration Steps (Flat Fee Model):**
1. Add Product: `WHATSAPP_001` to existing contract
2. Set Pricing Model: **Custom Tiered Pricing**
3. Configure free allowance: `100 messages`
4. Configure tiers:
   - **Free Tier**: 0-100 messages at $0.00
   - **Low Usage**: 101-999 messages → $2.00 flat fee
   - **Medium Usage**: 1000-2000 messages → $1.00 flat fee
   - **High Usage**: >2000 messages → $0.50 flat fee
5. Set billing metric: `whatsapp_messages_sent`

## Pricing Calculation Examples

### Example 1: 50 Messages (Free Tier)
- **Total Messages**: 50
- **Free Allowance**: 100 messages
- **Billable Messages**: 0 (within free tier)
- **Calculation**: Free
- **Total Charge**: $0.00

### Example 2: 150 Messages (Low Usage)
- **Total Messages**: 150
- **Free Allowance**: 100 messages  
- **Billable Messages**: 50
- **Usage Category**: <1000 total messages
- **Calculation**: $2.00 flat fee
- **Total Charge**: $2.00

### Example 3: 800 Messages (Low Usage)
- **Total Messages**: 800
- **Free Allowance**: 100 messages
- **Billable Messages**: 700
- **Usage Category**: <1000 total messages
- **Calculation**: $2.00 flat fee
- **Total Charge**: $2.00

### Example 4: 1,200 Messages (Medium Usage)
- **Total Messages**: 1,200
- **Free Allowance**: 100 messages
- **Billable Messages**: 1,100
- **Usage Category**: 1000-2000 total messages
- **Calculation**: $1.00 flat fee
- **Total Charge**: $1.00

### Example 5: 2,500 Messages (High Usage)
- **Total Messages**: 2,500
- **Free Allowance**: 100 messages
- **Billable Messages**: 2,400
- **Usage Category**: >2000 total messages
- **Calculation**: $0.50 flat fee
- **Total Charge**: $0.50

## Contract Terms & Conditions

### Billing Terms
- **Billing Frequency**: Monthly
- **Billing Date**: 1st of each month
- **Payment Terms**: Net 45 days
- **Late Fees**: 1% per month on overdue amounts
- **Currency**: USD
- **Free Allowances**: 100 WhatsApp messages/month

### Free Tier Terms
- **Free Messages**: 100 WhatsApp messages per month
- **Reset Period**: Monthly (no carryover)
- **Eligibility**: All months during contract term
- **Usage Tracking**: Count all messages, apply free allowance first

### Service Level Agreements
- **SMS Delivery**: 99.5% delivery rate guarantee
- **WhatsApp Uptime**: 99.9% uptime guarantee
- **Support**: Standard support included

### Usage Tracking
- **SMS**: Track delivery confirmations only
- **WhatsApp**: Track all sent messages, apply free allowance monthly

## Contract Validation

### Pricing Validation
- [ ] SMS: $0.01 per delivered SMS configured
- [ ] WhatsApp: Free allowance of 100 messages configured
- [ ] WhatsApp: Flat fee tiers configured correctly
- [ ] WhatsApp: Billing logic matches requirements
- [ ] Currency set to USD for all services

### Contract Setup Validation
- [ ] Customer C linked to contract
- [ ] Two products added (SMS, WhatsApp)
- [ ] AI SMS service excluded
- [ ] Effective dates set (Jan 1 - Dec 31, 2024)
- [ ] Billing cycle set to monthly (1st)
- [ ] Payment terms configured (Net 45)

### Free Tier Validation
- [ ] 100 free WhatsApp messages configured
- [ ] Monthly reset of free allowance
- [ ] No carryover of unused free messages
- [ ] Proper application of free allowance before charging

## Sample Monthly Scenarios

### Scenario 1: Startup Mode (Low Usage)
- **SMS**: 1,000 delivered = 1,000 × $0.01 = $10.00
- **WhatsApp**: 80 sent = Free (within 100 free) = $0.00
- **Total**: $10.00

### Scenario 2: Growing Business
- **SMS**: 5,000 delivered = 5,000 × $0.01 = $50.00
- **WhatsApp**: 600 sent = $2.00 flat fee (<1000 total)
- **Total**: $52.00

### Scenario 3: Established Operations
- **SMS**: 10,000 delivered = 10,000 × $0.01 = $100.00
- **WhatsApp**: 1,500 sent = $1.00 flat fee (1000-2000 range)
- **Total**: $101.00

### Scenario 4: High Volume Month
- **SMS**: 20,000 delivered = 20,000 × $0.01 = $200.00
- **WhatsApp**: 3,000 sent = $0.50 flat fee (>2000 range)
- **Total**: $200.50

## Monthly Monitoring

### Usage Alerts
- Set alerts for tier transitions:
  - WhatsApp usage approaching 100 (free tier limit)
  - WhatsApp usage approaching 1,000 (price tier change)
  - WhatsApp usage approaching 2,000 (price tier change)
  - SMS usage >15,000/month

### Revenue Tracking
- **Expected monthly revenue**: $10 - $250
- **Monitor**: Free tier utilization
- **Track**: Tier transition frequency

### Free Tier Analytics
- **Free Tier Utilization**: Percentage of customers using full 100 free messages
- **Tier Distribution**: Which pricing tiers are most common
- **Growth Tracking**: Customer progression through tiers

## Billing Complexity Management

### Edge Cases
1. **Exactly 100 messages**: All free, $0 charge
2. **Exactly 1,000 messages**: $2.00 flat fee (still <1000 total)
3. **Exactly 2,000 messages**: $1.00 flat fee (at upper bound)
4. **Month with 0 usage**: $0 charge, free allowance resets next month

### Pro-ration Handling
- **Partial Month Start**: Pro-rate free allowance
- **Partial Month End**: No additional pro-ration needed
- **Mid-month Changes**: Apply current month's tier structure

## Customer Success Considerations

### Tier Optimization
- Monitor customer growth patterns
- Suggest service optimization when approaching tier boundaries
- Provide usage forecasting and recommendations

### Cost Predictability
- Help customer understand tier transition points
- Provide monthly usage reports with tier analysis
- Offer guidance on cost-effective usage patterns

## Next Steps
1. Test complex WhatsApp pricing calculations
2. Validate free tier application logic
3. Set up tier transition monitoring
4. Generate sample invoices with various scenarios

## Zenskar References
- [Free Tiers](https://docs.zenskar.com/docs/free-tiers)
- [Complex Pricing Models](https://docs.zenskar.com/docs/complex-pricing)
- [Tiered Pricing](https://docs.zenskar.com/docs/tiered-pricing)
- [Usage Allowances](https://docs.zenskar.com/docs/usage-allowances) 