# Metering Configuration Guide: Usage Tracking Setup

## Overview
Configure metering rules and usage data ingestion for Smsworld's three products to enable accurate billing based on actual usage.

## Metering Strategy

### Data Ingestion Methods
1. **API Integration** (Recommended)
2. **CSV Upload** (For testing/manual data)
3. **Dashboard Manual Entry** (For small volumes)

## Usage Event Schema

### SMS Service Events
```json
{
  "event_id": "sms_001_{{timestamp}}",
  "customer_id": "customer_a",
  "product_code": "SMS_001",
  "metric_name": "sms_delivered",
  "timestamp": "2024-01-15T10:30:00Z",
  "properties": {
    "quantity": 1,
    "recipient_country": "US",
    "message_length": 160,
    "delivery_status": "delivered"
  }
}
```

### WhatsApp Messaging Events
```json
{
  "event_id": "whatsapp_001_{{timestamp}}",
  "customer_id": "customer_a",
  "product_code": "WHATSAPP_001",
  "metric_name": "whatsapp_messages_sent",
  "timestamp": "2024-01-15T10:30:00Z",
  "properties": {
    "quantity": 1,
    "message_type": "text",
    "recipient_country": "US",
    "conversation_category": "business_initiated"
  }
}
```

### AI SMS Service Events
```json
{
  "event_id": "ai_sms_001_{{timestamp}}",
  "customer_id": "customer_a",
  "product_code": "AI_SMS_001",
  "metric_name": "ai_sms_processed",
  "timestamp": "2024-01-15T10:30:00Z",
  "properties": {
    "quantity": 1,
    "ai_processing_time": 150,
    "sentiment_analysis": true,
    "routing_optimization": "high"
  }
}
```

## Zenskar Customer ID Mapping Guidance

### Which customer_id to use in Billable Metrics?

- **Always use the top-level `customer_id` field** for customer mapping, filtering, and contract association in Zenskar billable metrics.
- The nested `data.customer_id` is for business logic or redundancy, but Zenskar's billing and reporting logic relies on the top-level field.

### Example Billable Metric Filters
- For customer-specific metrics, filter on:
  - `customer_id` (top-level, matches the customer's External ID in Zenskar)
  - `data.product_type` (e.g., SMS, WhatsApp Messaging, AI SMS)
  - `data.status` (e.g., delivered, sent)

#### Example: Customer A, SMS Delivered
- `customer_id is c0027` (where c0027 is Customer A's External ID)
- `data.product_type is SMS`
- `data.status is delivered`

### Why?
- Zenskar uses the top-level `customer_id` for all customer mapping, contract logic, and reporting.
- Filtering on the nested `data.customer_id` will not work for billing or contract association.

---

## Metering Rules Configuration

### 1. SMS Delivery Tracking
**Rule Configuration:**
- **Trigger**: On SMS delivery confirmation
- **Event Filter**: `delivery_status = "delivered"`
- **Aggregation**: Daily, Monthly
- **Metric**: `sms_delivered`

**Zenskar Setup:**
1. Navigate to **Metering** → **Usage Events**
2. Create new event type: `SMS Delivery`
3. Map to product: `SMS_001`
4. Set aggregation rules: Sum by customer, daily rollup

### 2. WhatsApp Message Tracking
**Rule Configuration:**
- **Trigger**: On message send
- **Event Filter**: All message types
- **Aggregation**: Daily, Monthly
- **Metric**: `whatsapp_messages_sent`

**Zenskar Setup:**
1. Navigate to **Metering** → **Usage Events**
2. Create new event type: `WhatsApp Message`
3. Map to product: `WHATSAPP_001`
4. Set aggregation rules: Sum by customer, daily rollup

### 3. AI SMS Processing Tracking
**Rule Configuration:**
- **Trigger**: On AI SMS processing completion
- **Event Filter**: All processed messages
- **Aggregation**: Daily, Monthly
- **Metric**: `ai_sms_processed`

**Zenskar Setup:**
1. Navigate to **Metering** → **Usage Events**
2. Create new event type: `AI SMS Processing`
3. Map to product: `AI_SMS_001`
4. Set aggregation rules: Sum by customer, daily rollup

## Data Ingestion Setup

### API Integration
**Endpoint Configuration:**
```bash
POST https://api.zenskar.com/v1/usage-events
Authorization: Bearer {{api_key}}
Content-Type: application/json
```

**Batch Upload Support:**
```json
{
  "events": [
    {
      "event_id": "sms_001_001",
      "customer_id": "customer_a",
      "product_code": "SMS_001",
      "metric_name": "sms_delivered",
      "timestamp": "2024-01-15T10:30:00Z",
      "properties": {
        "quantity": 1
      }
    }
  ]
}
```

### CSV Upload Template
**File Format: `usage_events_template.csv`**
```csv
event_id,customer_id,product_code,metric_name,timestamp,quantity,additional_properties
sms_001_001,customer_a,SMS_001,sms_delivered,2024-01-15T10:30:00Z,1,"{""delivery_status"":""delivered""}"
whatsapp_001_001,customer_a,WHATSAPP_001,whatsapp_messages_sent,2024-01-15T10:35:00Z,1,"{""message_type"":""text""}"
ai_sms_001_001,customer_a,AI_SMS_001,ai_sms_processed,2024-01-15T10:40:00Z,1,"{""processing_time"":150}"
```

## Usage Data Validation

### Validation Rules
1. **Event ID Uniqueness**: Prevent duplicate events
2. **Timestamp Validation**: Events within billing period
3. **Customer Mapping**: Valid customer IDs
4. **Product Mapping**: Valid product codes
5. **Quantity Validation**: Positive numbers only

### Data Quality Checks
- [ ] Event deduplication enabled
- [ ] Late-arriving events handling configured
- [ ] Missing data alerts set up
- [ ] Data retention policies defined

## Aggregation Configuration

### Daily Aggregation
- **Schedule**: Every day at 02:00 UTC
- **Scope**: Per customer, per product
- **Output**: Daily usage summaries

### Monthly Aggregation
- **Schedule**: 1st day of month at 03:00 UTC
- **Scope**: Per customer, per product
- **Output**: Monthly billing summaries

## Testing Data Generation

### Sample Events for Testing
Create test events for each customer using the CSV template:
- **Customer A**: Mixed usage across all products
- **Customer B**: SMS and AI SMS only
- **Customer C**: SMS and WhatsApp only

## Monitoring & Alerting

### Key Metrics to Monitor
- **Event Processing Rate**: Events/minute
- **Processing Latency**: Time to process events
- **Error Rate**: Failed events percentage
- **Data Completeness**: Missing events detection

### Alert Configuration
- High error rates (>5%)
- Processing delays (>15 minutes)
- Missing expected events
- Data quality issues

## Implementation Checklist
- [ ] Usage event schemas defined
- [ ] Metering rules configured in Zenskar
- [ ] API integration tested
- [ ] CSV upload template created
- [ ] Validation rules implemented
- [ ] Aggregation schedules set
- [ ] Monitoring alerts configured
- [ ] Test data prepared

## Next Steps
1. Proceed to `03-customer-setup.md`
2. Create customer profiles
3. Configure customer-specific contracts

## Zenskar References
- [Usage Events](https://docs.zenskar.com/docs/usage-events)
- [Metering](https://docs.zenskar.com/docs/metering)
- [Data Ingestion](https://docs.zenskar.com/docs/data-ingestion) 