# Customer A Contract: TechCorp Solutions

## Contract Overview
Configure multi-service contract with varied pricing models for Customer A using [Zenskar's contract system](https://docs.zenskar.com/docs/create-a-contract-using-the-zenskar-dashboard).

## Customer A Pricing Requirements
- **SMS**: [Per-unit pricing](https://docs.zenskar.com/docs/per-unit-pricing) - $0.01 per SMS delivered
- **WhatsApp**: [Volume pricing](https://docs.zenskar.com/docs/volume-pricing) - $10 per 1000 messages sent
- **AI SMS**: [Tiered pricing](https://docs.zenskar.com/docs/tiered-pricing) - $2 for first 1000, $1 for next 1000, $0.5 beyond 2000

## Zenskar Contract Structure

Following Zenskar's hierarchy: **Contract → Phase → Product → Pricing Model**

### Contract Configuration
- **Customer**: TechCorp Solutions (`customer_a`)
- **Contract Name**: `TechCorp Standard Services Agreement`
- **Contract Type**: Standard
- **Start Date**: 2024-01-01
- **End Date**: 2024-12-31
- **Currency**: USD
- **Status**: Active

### Phase Configuration
- **Phase Name**: `Standard Billing Phase`
- **Phase Type**: Recurring
- **Billing Frequency**: Monthly
- **Billing Day**: 1st of each month
- **Payment Terms**: Net 30 days

## Product and Pricing Configuration

### Product 1: SMS Service

**Product Assignment:**
- **Product**: SMS Service (`SMS_001`)
- **Billable Metric**: `sms_delivered`
- **Pricing Model**: [Per-unit pricing](https://docs.zenskar.com/docs/per-unit-pricing)

**Per-Unit Pricing Configuration:**
- **Unit Price**: $0.01
- **Unit**: per SMS delivered
- **Currency**: USD
- **Minimum Charge**: None
- **Maximum Charge**: None

**Zenskar Configuration Steps:**
1. Navigate to contract for Customer A
2. In the Phase section, click **Add Product**
3. Select Product: `SMS Service (SMS_001)`
4. Choose Pricing Model: **Per Unit Pricing**
5. Configure pricing parameters:
   - **Price per unit**: `$0.01`
   - **Billable metric**: `sms_delivered`
6. Save product configuration

### Product 2: WhatsApp Messaging

**Product Assignment:**
- **Product**: WhatsApp Messaging Service (`WHATSAPP_001`)
- **Billable Metric**: `whatsapp_messages_sent`
- **Pricing Model**: [Volume pricing](https://docs.zenskar.com/docs/volume-pricing)

**Volume Pricing Configuration:**
- **Price per Block**: $10.00
- **Block Size**: 1,000 messages
- **Unit**: per message sent
- **Currency**: USD
- **Calculation Method**: Total usage ÷ block size × block price

**Pricing Logic:**
- Usage aggregated by `whatsapp_messages_sent` metric
- Total monthly messages ÷ 1,000 × $10.00
- Example: 2,500 messages = 2.5 blocks × $10.00 = $25.00

**Zenskar Configuration Steps:**
1. In the same Phase, click **Add Product**
2. Select Product: `WhatsApp Messaging Service (WHATSAPP_001)`
3. Choose Pricing Model: **Volume Pricing**
4. Configure volume pricing parameters:
   - **Price per block**: `$10.00`
   - **Block size**: `1000`
   - **Billable metric**: `whatsapp_messages_sent`
5. Save product configuration

### Product 3: AI SMS Service

**Product Assignment:**
- **Product**: AI SMS Service (`AI_SMS_001`)
- **Billable Metric**: `ai_sms_processed`
- **Pricing Model**: [Tiered pricing](https://docs.zenskar.com/docs/tiered-pricing)

**Tiered Pricing Configuration:**
- **Tier 1**: 0 - 1,000 units at $2.00 per unit
- **Tier 2**: 1,001 - 2,000 units at $1.00 per unit  
- **Tier 3**: 2,001+ units at $0.50 per unit
- **Currency**: USD
- **Tier Mode**: Graduated (each tier applies to its range only)

**Pricing Calculation Examples:**
- **500 AI SMS**: 500 × $2.00 = $1,000.00
- **1,500 AI SMS**: (1,000 × $2.00) + (500 × $1.00) = $2,500.00
- **2,500 AI SMS**: (1,000 × $2.00) + (1,000 × $1.00) + (500 × $0.50) = $3,250.00

**Zenskar Configuration Steps:**
1. In the same Phase, click **Add Product**
2. Select Product: `AI SMS Service (AI_SMS_001)`
3. Choose Pricing Model: **Tiered Pricing**
4. Configure pricing tiers:
   - **Tier 1**: Range 0-1,000, Price $2.00 per unit
   - **Tier 2**: Range 1,001-2,000, Price $1.00 per unit
   - **Tier 3**: Range 2,001+, Price $0.50 per unit
5. Set billable metric: `ai_sms_processed`
6. Select tier mode: **Graduated**
7. Save product configuration

## Contract Terms & Conditions

### Billing Terms
- **Billing Frequency**: Monthly
- **Billing Date**: 1st of each month
- **Payment Terms**: Net 30 days
- **Late Fees**: 1.5% per month on overdue amounts
- **Currency**: USD

### Service Level Agreements
- **SMS Delivery**: 99.5% delivery rate guarantee
- **WhatsApp Uptime**: 99.9% uptime guarantee
- **AI SMS Processing**: <200ms average processing time

### Usage Tracking
- **SMS**: Track delivery confirmations only
- **WhatsApp**: Track all sent messages regardless of delivery
- **AI SMS**: Track completed processing events

## Contract Validation

### Contract Structure Validation
- [ ] Contract created for TechCorp Solutions (customer_a)
- [ ] Phase configured with monthly billing on 1st of month
- [ ] Payment terms set to Net 30 days
- [ ] Contract dates: January 1 - December 31, 2024
- [ ] Currency set to USD for all products

### Product and Pricing Validation
- [ ] **SMS Service**: Per-unit pricing at $0.01 per unit configured
- [ ] **WhatsApp Service**: Volume pricing at $10 per 1,000 messages configured
- [ ] **AI SMS Service**: Three-tier graduated pricing configured correctly
- [ ] All products linked to correct billable metrics
- [ ] Pricing models properly configured within the Phase

### Billable Metrics Integration
- [ ] `sms_delivered` metric linked to SMS Service product
- [ ] `whatsapp_messages_sent` metric linked to WhatsApp Service product
- [ ] `ai_sms_processed` metric linked to AI SMS Service product
- [ ] Usage events will flow to correct pricing calculations

### Contract Features Validation
- [ ] No additional features (discounts, taxes, commitments) applied
- [ ] Standard billing frequency and terms applied
- [ ] Contract ready for usage event processing and invoice generation

## Sample Usage Scenarios

### Scenario 1: Light Usage Month
- **SMS**: 5,000 delivered = 5,000 × $0.01 = $50.00
- **WhatsApp**: 2,000 sent = 2.0 × $10 = $20.00
- **AI SMS**: 800 processed = 800 × $2.00 = $1,600.00
- **Total**: $1,670.00

### Scenario 2: Heavy Usage Month
- **SMS**: 50,000 delivered = 50,000 × $0.01 = $500.00
- **WhatsApp**: 15,000 sent = 15.0 × $10 = $150.00
- **AI SMS**: 3,000 processed = (1,000 × $2.00) + (1,000 × $1.00) + (1,000 × $0.50) = $3,500.00
- **Total**: $4,150.00

## Monthly Monitoring

### Usage Alerts
- Set alerts for unusual usage patterns:
  - SMS usage >20,000/month
  - WhatsApp usage >10,000/month
  - AI SMS usage >2,000/month

### Revenue Tracking
- Expected monthly revenue: $500 - $5,000
- Monitor for billing accuracy
- Track payment collection efficiency

## Contract Amendments

### Pricing Review Schedule
- **Quarterly Review**: Usage pattern analysis
- **Annual Review**: Pricing adjustment consideration
- **Trigger Events**: Major usage changes (>50% increase)

### Modification Process
1. Usage analysis and pricing impact assessment
2. Contract amendment proposal
3. Customer approval
4. Zenskar configuration update
5. Billing system testing

## Next Steps
1. Complete Customer B contract configuration
2. Complete Customer C contract configuration
3. Test contract billing calculations
4. Generate sample invoices

## Zenskar References
- [Contract Creation Guide](https://docs.zenskar.com/docs/create-a-contract-using-the-zenskar-dashboard)
- [Pricing Models Overview](https://docs.zenskar.com/docs/pricing-models)
- [Per-Unit Pricing](https://docs.zenskar.com/docs/per-unit-pricing)
- [Volume Pricing](https://docs.zenskar.com/docs/volume-pricing)
- [Tiered Pricing](https://docs.zenskar.com/docs/tiered-pricing)
- [Usage Events](https://docs.zenskar.com/docs/usage-event)
- [Billable Metrics](https://docs.zenskar.com/docs/billable-metrics) 