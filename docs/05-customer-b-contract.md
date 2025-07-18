# Customer B Contract: Global Marketing Inc

## Contract Overview
Configure per-unit pricing with minimum monthly commitment for Customer B, covering SMS and AI SMS services only.

## Customer B Pricing Requirements
- **SMS**: $0.02 per SMS sent
- **AI SMS**: $2 for first 1000, $1 for next 1000, $0.5 beyond 2000 (same as Customer A)
- **Minimum monthly commitment**: $100, irrespective of usage

## Contract Configuration

### Contract Details
- **Customer**: Global Marketing Inc (`customer_b`)
- **Contract ID**: `contract_customer_b_001`
- **Start Date**: 2024-01-01
- **End Date**: 2024-12-31
- **Billing Cycle**: Monthly (15th of each month)
- **Currency**: USD
- **Minimum Commitment**: $100/month

### Service 1: SMS Service

**Product Configuration:**
- **Product**: SMS Service (`SMS_001`)
- **Pricing Model**: Per-unit pricing
- **Billing Metric**: `sms_delivered`

**Pricing Structure:**
```json
{
  "pricing_model": "per_unit",
  "unit_price": 0.02,
  "currency": "USD",
  "billing_unit": "per_sms_sent",
  "minimum_charge": 0,
  "rounding": "round_to_cent"
}
```

**Key Differences from Customer A:**
- Higher per-unit rate: $0.02 vs $0.01
- Billing trigger: SMS sent vs SMS delivered

**Zenskar Configuration Steps:**
1. Navigate to **Contracts** → **Create Contract**
2. Select Customer: `customer_b`
3. Add Product: `SMS_001`
4. Set Pricing Model: **Per Unit**
5. Configure pricing:
   - Unit Price: `$0.02`
   - Billing Metric: `sms_delivered` (track sent messages)
   - No individual minimum charges
6. Set effective dates: Jan 1, 2024 - Dec 31, 2024

### Service 2: AI SMS Service

**Product Configuration:**
- **Product**: AI SMS Service (`AI_SMS_001`)
- **Pricing Model**: Tiered pricing (identical to Customer A)
- **Billing Metric**: `ai_sms_processed`

**Pricing Structure:**
```json
{
  "pricing_model": "tiered",
  "tiers": [
    {
      "tier_name": "First 1000",
      "from": 0,
      "to": 1000,
      "unit_price": 2.00,
      "tier_mode": "per_unit"
    },
    {
      "tier_name": "Next 1000", 
      "from": 1001,
      "to": 2000,
      "unit_price": 1.00,
      "tier_mode": "per_unit"
    },
    {
      "tier_name": "Beyond 2000",
      "from": 2001,
      "to": null,
      "unit_price": 0.50,
      "tier_mode": "per_unit"
    }
  ],
  "currency": "USD",
  "billing_unit": "per_ai_sms_processed"
}
```

**Zenskar Configuration Steps:**
1. Add Product: `AI_SMS_001` to existing contract
2. Set Pricing Model: **Tiered Pricing**
3. Configure identical tiers as Customer A
4. Set billing metric: `ai_sms_processed`

### Minimum Commitment Configuration

**Commitment Details:**
- **Amount**: $100 per month
- **Type**: Minimum revenue commitment
- **Application**: Contract-level (across all services)
- **Carryover**: No unused commitment carryover
- **Billing**: Charge difference if usage < $100

**Pricing Structure:**
```json
{
  "minimum_commitment": {
    "enabled": true,
    "amount": 100.00,
    "currency": "USD",
    "period": "monthly",
    "commitment_type": "revenue",
    "carryover": false,
    "charge_difference": true
  }
}
```

**Commitment Logic:**
- If monthly usage charges ≥ $100: Bill actual usage
- If monthly usage charges < $100: Bill $100 minimum
- Example: $60 usage → Bill $100 ($40 commitment charge)

**Zenskar Configuration Steps:**
1. In contract settings, enable **Minimum Commitment**
2. Set commitment amount: `$100.00`
3. Set commitment period: `Monthly`
4. Set commitment type: `Revenue-based`
5. Configure billing: Charge difference to reach minimum
6. Disable carryover of unused commitment

## Contract Terms & Conditions

### Billing Terms
- **Billing Frequency**: Monthly
- **Billing Date**: 15th of each month
- **Payment Terms**: Net 15 days
- **Late Fees**: 2% per month on overdue amounts
- **Currency**: USD
- **Minimum Commitment**: $100/month

### Minimum Commitment Terms
- **Commitment Period**: Monthly (no annual commitment)
- **Commitment Scope**: All services combined
- **Shortfall Billing**: Automatic charge for difference
- **Overage Credit**: No carryover to next month
- **Pro-ration**: Yes, for partial months

### Service Level Agreements
- **SMS Delivery**: 99.5% delivery rate guarantee
- **AI SMS Processing**: <200ms average processing time
- **Support**: Priority support included

### Usage Tracking
- **SMS**: Track all sent messages (not delivery-dependent)
- **AI SMS**: Track completed processing events

## Contract Validation

### Pricing Validation
- [ ] SMS: $0.02 per sent SMS configured
- [ ] AI SMS: Three-tier pricing structure configured (same as Customer A)
- [ ] Minimum commitment: $100/month configured
- [ ] Currency set to USD for all services
- [ ] Billing trigger for SMS set to "sent" not "delivered"

### Contract Setup Validation
- [ ] Customer B linked to contract
- [ ] Two products added (SMS, AI SMS)
- [ ] WhatsApp service excluded
- [ ] Effective dates set (Jan 1 - Dec 31, 2024)
- [ ] Billing cycle set to monthly (15th)
- [ ] Payment terms configured (Net 15)

### Minimum Commitment Validation
- [ ] Commitment amount set to $100
- [ ] Commitment period set to monthly
- [ ] Shortfall billing enabled
- [ ] No carryover configured
- [ ] Pro-ration enabled for partial months

## Sample Usage Scenarios

### Scenario 1: Below Minimum Commitment
- **SMS**: 3,000 sent = 3,000 × $0.02 = $60.00
- **AI SMS**: 500 processed = 500 × $2.00 = $1,000.00
- **Subtotal**: $1,060.00
- **Minimum Commitment**: $100.00
- **Final Bill**: $1,060.00 (exceeds minimum)

### Scenario 2: Below Minimum Commitment
- **SMS**: 2,000 sent = 2,000 × $0.02 = $40.00
- **AI SMS**: 10 processed = 10 × $2.00 = $20.00
- **Subtotal**: $60.00
- **Minimum Commitment**: $100.00
- **Commitment Charge**: $40.00
- **Final Bill**: $100.00

### Scenario 3: Exactly at Minimum
- **SMS**: 5,000 sent = 5,000 × $0.02 = $100.00
- **AI SMS**: 0 processed = $0.00
- **Subtotal**: $100.00
- **Final Bill**: $100.00 (meets minimum exactly)

### Scenario 4: High Usage Month
- **SMS**: 10,000 sent = 10,000 × $0.02 = $200.00
- **AI SMS**: 1,500 processed = (1,000 × $2.00) + (500 × $1.00) = $2,500.00
- **Subtotal**: $2,700.00
- **Final Bill**: $2,700.00 (exceeds minimum significantly)

## Monthly Monitoring

### Usage Alerts
- Set alerts for commitment tracking:
  - Usage trending below $100/month
  - SMS usage >8,000/month
  - AI SMS usage >1,000/month

### Revenue Tracking
- **Minimum monthly revenue**: $100 (guaranteed)
- **Expected monthly revenue**: $100 - $3,000
- **Monitor**: Commitment utilization rate

### Commitment Analytics
- Track months where commitment applies
- Monitor customer satisfaction with minimum
- Analyze usage patterns for upselling

## Commitment Reporting

### Monthly Reports
- **Usage vs Commitment**: Visual comparison
- **Commitment Utilization**: Percentage of months commitment applies
- **Revenue Impact**: Additional revenue from commitment
- **Customer Health**: Satisfaction with commitment terms

### Quarterly Reviews
- Analyze commitment effectiveness
- Review customer usage trends
- Consider commitment adjustment opportunities

## Contract Amendments

### Pricing Review Schedule
- **Quarterly Review**: Usage and commitment analysis
- **Annual Review**: Commitment amount adjustment
- **Trigger Events**: Consistent overage (3+ months above 150% commitment)

### Commitment Adjustment Process
1. Analyze 6-month usage history
2. Calculate average monthly usage
3. Propose new commitment level
4. Customer negotiation
5. Contract amendment
6. Zenskar configuration update

## Next Steps
1. Complete Customer C contract configuration
2. Test minimum commitment billing logic
3. Set up commitment monitoring alerts
4. Generate sample invoices with commitment scenarios

## Zenskar References
- [Minimum Commitments](https://docs.zenskar.com/docs/minimum-commitments)
- [Contract Management](https://docs.zenskar.com/docs/contracts)
- [Pricing Models](https://docs.zenskar.com/docs/pricing-models) 