# Usage Data Simulation Guide

## Overview
Generate realistic usage data for all three customers across their respective services to test billing calculations and invoice generation.

## Data Generation Strategy

### Simulation Objectives
1. **Test all pricing models** across different usage volumes
2. **Validate edge cases** (free tiers, minimums, tier transitions)
3. **Generate multiple months** of data for trend analysis
4. **Create realistic usage patterns** for each customer segment

### Data Generation Methods
1. **CSV Upload** (Recommended for testing)
2. **API Integration** (For production-like testing)
3. **Manual Dashboard Entry** (For specific scenarios)

## Customer A: TechCorp Solutions - Usage Patterns

### Expected Usage Profile
- **Industry**: Technology Services
- **Scale**: Medium to High volume
- **Pattern**: Steady growth with seasonal spikes

### Monthly Usage Scenarios

#### January 2024 - Baseline Month
```csv
event_id,customer_id,product_code,metric_name,timestamp,quantity,additional_properties
sms_a_jan_001,customer_a,SMS_001,sms_delivered,2024-01-05T09:00:00Z,150,"{""delivery_status"":""delivered""}"
sms_a_jan_002,customer_a,SMS_001,sms_delivered,2024-01-10T14:30:00Z,200,"{""delivery_status"":""delivered""}"
sms_a_jan_003,customer_a,SMS_001,sms_delivered,2024-01-15T11:15:00Z,175,"{""delivery_status"":""delivered""}"
sms_a_jan_004,customer_a,SMS_001,sms_delivered,2024-01-20T16:45:00Z,225,"{""delivery_status"":""delivered""}"
sms_a_jan_005,customer_a,SMS_001,sms_delivered,2024-01-25T08:20:00Z,250,"{""delivery_status"":""delivered""}"

whatsapp_a_jan_001,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-01-03T10:00:00Z,500,"{""message_type"":""text""}"
whatsapp_a_jan_002,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-01-08T13:00:00Z,300,"{""message_type"":""media""}"
whatsapp_a_jan_003,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-01-12T09:30:00Z,400,"{""message_type"":""text""}"
whatsapp_a_jan_004,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-01-18T15:00:00Z,600,"{""message_type"":""text""}"
whatsapp_a_jan_005,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-01-28T12:00:00Z,700,"{""message_type"":""template""}"

ai_sms_a_jan_001,customer_a,AI_SMS_001,ai_sms_processed,2024-01-02T08:00:00Z,100,"{""processing_time"":120}"
ai_sms_a_jan_002,customer_a,AI_SMS_001,ai_sms_processed,2024-01-07T11:30:00Z,150,"{""processing_time"":110}"
ai_sms_a_jan_003,customer_a,AI_SMS_001,ai_sms_processed,2024-01-14T14:00:00Z,200,"{""processing_time"":130}"
ai_sms_a_jan_004,customer_a,AI_SMS_001,ai_sms_processed,2024-01-21T10:45:00Z,250,"{""processing_time"":140}"
ai_sms_a_jan_005,customer_a,AI_SMS_001,ai_sms_processed,2024-01-30T16:30:00Z,300,"{""processing_time"":125}"
```

**January 2024 Totals:**
- **SMS**: 1,000 delivered = $10.00
- **WhatsApp**: 2,500 sent = 2.5 × $10 = $25.00
- **AI SMS**: 1,000 processed = 1,000 × $2.00 = $2,000.00
- **Total**: $2,035.00

#### March 2024 - High Volume Month
```csv
event_id,customer_id,product_code,metric_name,timestamp,quantity
sms_a_mar_001,customer_a,SMS_001,sms_delivered,2024-03-05T09:00:00Z,2000
sms_a_mar_002,customer_a,SMS_001,sms_delivered,2024-03-10T14:30:00Z,2500
sms_a_mar_003,customer_a,SMS_001,sms_delivered,2024-03-15T11:15:00Z,2200
sms_a_mar_004,customer_a,SMS_001,sms_delivered,2024-03-20T16:45:00Z,2800
sms_a_mar_005,customer_a,SMS_001,sms_delivered,2024-03-25T08:20:00Z,2500

whatsapp_a_mar_001,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-03-03T10:00:00Z,3000
whatsapp_a_mar_002,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-03-08T13:00:00Z,2500
whatsapp_a_mar_003,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-03-12T09:30:00Z,4000
whatsapp_a_mar_004,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-03-18T15:00:00Z,3500
whatsapp_a_mar_005,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-03-28T12:00:00Z,2000

ai_sms_a_mar_001,customer_a,AI_SMS_001,ai_sms_processed,2024-03-02T08:00:00Z,500
ai_sms_a_mar_002,customer_a,AI_SMS_001,ai_sms_processed,2024-03-07T11:30:00Z,600
ai_sms_a_mar_003,customer_a,AI_SMS_001,ai_sms_processed,2024-03-14T14:00:00Z,700
ai_sms_a_mar_004,customer_a,AI_SMS_001,ai_sms_processed,2024-03-21T10:45:00Z,800
ai_sms_a_mar_005,customer_a,AI_SMS_001,ai_sms_processed,2024-03-30T16:30:00Z,900
```

**March 2024 Totals:**
- **SMS**: 12,000 delivered = $120.00
- **WhatsApp**: 15,000 sent = 15.0 × $10 = $150.00
- **AI SMS**: 3,500 processed = (1,000 × $2.00) + (1,000 × $1.00) + (1,500 × $0.50) = $3,750.00
- **Total**: $4,020.00

## Customer B: Global Marketing Inc - Usage Patterns

### Expected Usage Profile
- **Industry**: Marketing & Advertising
- **Scale**: Variable volume with campaign-driven spikes
- **Pattern**: Irregular usage with some months below minimum commitment

### Monthly Usage Scenarios

#### February 2024 - Below Minimum Month
```csv
event_id,customer_id,product_code,metric_name,timestamp,quantity
sms_b_feb_001,customer_b,SMS_001,sms_delivered,2024-02-05T09:00:00Z,500
sms_b_feb_002,customer_b,SMS_001,sms_delivered,2024-02-12T14:30:00Z,300
sms_b_feb_003,customer_b,SMS_001,sms_delivered,2024-02-18T11:15:00Z,400
sms_b_feb_004,customer_b,SMS_001,sms_delivered,2024-02-25T16:45:00Z,300

ai_sms_b_feb_001,customer_b,AI_SMS_001,ai_sms_processed,2024-02-03T08:00:00Z,50
ai_sms_b_feb_002,customer_b,AI_SMS_001,ai_sms_processed,2024-02-10T11:30:00Z,75
ai_sms_b_feb_003,customer_b,AI_SMS_001,ai_sms_processed,2024-02-17T14:00:00Z,100
ai_sms_b_feb_004,customer_b,AI_SMS_001,ai_sms_processed,2024-02-28T10:45:00Z,125
```

**February 2024 Totals:**
- **SMS**: 1,500 sent = 1,500 × $0.02 = $30.00
- **AI SMS**: 350 processed = 350 × $2.00 = $700.00
- **Subtotal**: $730.00
- **Minimum Commitment**: $100.00
- **Final Bill**: $730.00 (exceeds minimum)

#### April 2024 - Below Minimum Month
```csv
event_id,customer_id,product_code,metric_name,timestamp,quantity
sms_b_apr_001,customer_b,SMS_001,sms_delivered,2024-04-05T09:00:00Z,800
sms_b_apr_002,customer_b,SMS_001,sms_delivered,2024-04-15T14:30:00Z,600
sms_b_apr_003,customer_b,SMS_001,sms_delivered,2024-04-25T11:15:00Z,400

ai_sms_b_apr_001,customer_b,AI_SMS_001,ai_sms_processed,2024-04-10T08:00:00Z,20
ai_sms_b_apr_002,customer_b,AI_SMS_001,ai_sms_processed,2024-04-20T11:30:00Z,15
ai_sms_b_apr_003,customer_b,AI_SMS_001,ai_sms_processed,2024-04-28T14:00:00Z,25
```

**April 2024 Totals:**
- **SMS**: 1,800 sent = 1,800 × $0.02 = $36.00
- **AI SMS**: 60 processed = 60 × $2.00 = $120.00
- **Subtotal**: $156.00
- **Minimum Commitment**: $100.00
- **Final Bill**: $156.00 (exceeds minimum)

## Customer C: StartupConnect - Usage Patterns

### Expected Usage Profile
- **Industry**: Business Services (Startup)
- **Scale**: Low to medium volume with growth trajectory
- **Pattern**: Consistent growth, heavy use of free tiers initially

### Monthly Usage Scenarios

#### January 2024 - Free Tier Focus
```csv
event_id,customer_id,product_code,metric_name,timestamp,quantity
sms_c_jan_001,customer_c,SMS_001,sms_delivered,2024-01-05T09:00:00Z,200
sms_c_jan_002,customer_c,SMS_001,sms_delivered,2024-01-12T14:30:00Z,300
sms_c_jan_003,customer_c,SMS_001,sms_delivered,2024-01-18T11:15:00Z,250
sms_c_jan_004,customer_c,SMS_001,sms_delivered,2024-01-25T16:45:00Z,350

whatsapp_c_jan_001,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-01-03T10:00:00Z,30
whatsapp_c_jan_002,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-01-10T13:00:00Z,25
whatsapp_c_jan_003,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-01-17T09:30:00Z,20
whatsapp_c_jan_004,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-01-24T15:00:00Z,15
```

**January 2024 Totals:**
- **SMS**: 1,100 delivered = 1,100 × $0.01 = $11.00
- **WhatsApp**: 90 sent = Free (within 100 free) = $0.00
- **Total**: $11.00

#### May 2024 - Tier Transition Month
```csv
event_id,customer_id,product_code,metric_name,timestamp,quantity
sms_c_may_001,customer_c,SMS_001,sms_delivered,2024-05-05T09:00:00Z,1500
sms_c_may_002,customer_c,SMS_001,sms_delivered,2024-05-12T14:30:00Z,2000
sms_c_may_003,customer_c,SMS_001,sms_delivered,2024-05-18T11:15:00Z,1800
sms_c_may_004,customer_c,SMS_001,sms_delivered,2024-05-25T16:45:00Z,2200

whatsapp_c_may_001,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-05-03T10:00:00Z,300
whatsapp_c_may_002,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-05-10T13:00:00Z,250
whatsapp_c_may_003,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-05-17T09:30:00Z,200
whatsapp_c_may_004,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-05-24T15:00:00Z,400
whatsapp_c_may_005,customer_c,WHATSAPP_001,whatsapp_messages_sent,2024-05-31T12:00:00Z,350
```

**May 2024 Totals:**
- **SMS**: 7,500 delivered = 7,500 × $0.01 = $75.00
- **WhatsApp**: 1,500 sent = $1.00 flat fee (1000-2000 range)
- **Total**: $76.00

## Data Generation Tools

### CSV Templates

#### Master Template: `smsworld_usage_events.csv`
```csv
event_id,customer_id,product_code,metric_name,timestamp,quantity,additional_properties
# Customer A Events
sms_a_jan_001,customer_a,SMS_001,sms_delivered,2024-01-05T09:00:00Z,150,"{""delivery_status"":""delivered""}"
# Customer B Events  
sms_b_feb_001,customer_b,SMS_001,sms_delivered,2024-02-05T09:00:00Z,500,"{""delivery_status"":""delivered""}"
# Customer C Events
sms_c_jan_001,customer_c,SMS_001,sms_delivered,2024-01-05T09:00:00Z,200,"{""delivery_status"":""delivered""}"
```

### API Batch Upload Script
```bash
#!/bin/bash
# Batch upload usage events via API

API_ENDPOINT="https://api.zenskar.com/v1/usage-events/batch"
API_KEY="your_api_key_here"

curl -X POST $API_ENDPOINT \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d @usage_events_batch.json
```

### Data Generation Scripts

#### Python Script for Random Data Generation
```python
import csv
import random
from datetime import datetime, timedelta

def generate_customer_a_data(month, year):
    """Generate realistic usage data for Customer A"""
    events = []
    
    # SMS: 1000-15000 per month
    sms_total = random.randint(1000, 15000)
    sms_batches = random.randint(5, 10)
    
    for i in range(sms_batches):
        events.append({
            'event_id': f'sms_a_{month}_{i:03d}',
            'customer_id': 'customer_a',
            'product_code': 'SMS_001',
            'metric_name': 'sms_delivered',
            'timestamp': generate_random_timestamp(month, year),
            'quantity': sms_total // sms_batches
        })
    
    return events
```

## Testing Scenarios

### Edge Case Testing
1. **Exactly at tier boundaries**
2. **Zero usage months**
3. **Partial month data**
4. **Late-arriving events**
5. **Duplicate event handling**

### Performance Testing
1. **High volume months** (>50,000 events)
2. **Burst patterns** (many events in short time)
3. **Cross-month boundary events**

### Validation Testing
1. **Data consistency checks**
2. **Billing calculation accuracy**
3. **Invoice generation timing**
4. **Payment processing flow**

## Monitoring & Analytics

### Usage Pattern Analysis
- **Customer growth trends**
- **Seasonal variations**
- **Service adoption rates**
- **Pricing tier distributions**

### Revenue Impact Analysis
- **Customer profitability**
- **Service profitability**
- **Commitment effectiveness** (Customer B)
- **Free tier utilization** (Customer C)

## Implementation Checklist
- [ ] CSV templates created for all customers
- [ ] Usage data generated for 6+ months
- [ ] Edge cases covered in test data
- [ ] API batch upload tested
- [ ] Data validation rules verified
- [ ] Monitoring dashboards configured

## Next Steps
1. Proceed to `08-invoice-generation.md`
2. Generate invoices from usage data
3. Validate billing calculations
4. Test payment processing

## Zenskar References
- [Usage Events](https://docs.zenskar.com/docs/usage-events)
- [Batch Data Upload](https://docs.zenskar.com/docs/batch-upload)
- [Data Validation](https://docs.zenskar.com/docs/data-validation) 