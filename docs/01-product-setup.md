# Product Setup Guide: Smsworld Products

## Overview
Configure three core products in Zenskar for Smsworld's telecommunications services.

## Products to Create

Following [Zenskar's Product structure](https://docs.zenskar.com/docs/product), each product represents a billable offering with specific properties.

### 1. SMS Service
**Product Details:**
- **Name**: SMS Service
- **Description**: Professional SMS delivery service for businesses
- **SKU**: `SMS_001`
- **Type**: Service
- **Category**: Communication Services
- **Tax Code**: Standard rate (if applicable)

**Zenskar Configuration Steps:**
1. Navigate to **Products** section in Zenskar dashboard
2. Click **Create Product**
3. Fill in product properties:
   - **Name**: `SMS Service`
   - **SKU**: `SMS_001`
   - **Description**: `Professional SMS delivery service for businesses`
   - **Type**: `Service`
   - **Category**: `Communication`
   - **Tags**: `sms, messaging, telecommunications`
4. Configure product for usage-based billing
5. Save product configuration

### 2. WhatsApp Messaging
**Product Details:**
- **Name**: WhatsApp Messaging Service
- **Description**: WhatsApp Business messaging platform for customer engagement
- **SKU**: `WHATSAPP_001`
- **Type**: Service
- **Category**: Communication Services
- **Tax Code**: Standard rate (if applicable)

**Zenskar Configuration Steps:**
1. Navigate to **Products** section
2. Click **Create Product**
3. Fill in product properties:
   - **Name**: `WhatsApp Messaging Service`
   - **SKU**: `WHATSAPP_001`
   - **Description**: `WhatsApp Business messaging platform for customer engagement`
   - **Type**: `Service`
   - **Category**: `Communication`
   - **Tags**: `whatsapp, messaging, business-messaging`
4. Configure product for usage-based billing
5. Save product configuration

### 3. AI SMS Service
**Product Details:**
- **Name**: AI SMS Service
- **Description**: AI-powered SMS service with intelligent routing and optimization
- **SKU**: `AI_SMS_001`
- **Type**: Service
- **Category**: AI Communication Services
- **Tax Code**: Standard rate (if applicable)

**Zenskar Configuration Steps:**
1. Navigate to **Products** section
2. Click **Create Product**
3. Fill in product properties:
   - **Name**: `AI SMS Service`
   - **SKU**: `AI_SMS_001`
   - **Description**: `AI-powered SMS service with intelligent routing and optimization`
   - **Type**: `Service`
   - **Category**: `AI Communication`
   - **Tags**: `ai, sms, intelligent-routing, automation`
4. Configure product for usage-based billing
5. Save product configuration

## Billable Metrics Configuration

Following [Zenskar's Usage Event structure](https://docs.zenskar.com/docs/usage-event), billable metrics are created from ingested usage events to calculate charges.

### SMS Service Billable Metric
- **Metric Name**: `sms_delivered`
- **Event Type**: SMS delivery confirmation
- **Aggregation Method**: SUM
- **Aggregation Field**: `quantity`
- **Filters**: `status = 'delivered'`
- **Associated Product**: SMS Service (`SMS_001`)

**Configuration Steps:**
1. Navigate to **Billable Metrics** in Zenskar
2. Create new metric: `sms_delivered`
3. Set aggregation: SUM of quantity field
4. Apply filter for delivered messages only
5. Link to SMS Service product

### WhatsApp Messaging Billable Metric
- **Metric Name**: `whatsapp_messages_sent`
- **Event Type**: WhatsApp message dispatch
- **Aggregation Method**: SUM
- **Aggregation Field**: `quantity`
- **Filters**: All message types included
- **Associated Product**: WhatsApp Messaging Service (`WHATSAPP_001`)

**Configuration Steps:**
1. Navigate to **Billable Metrics** in Zenskar
2. Create new metric: `whatsapp_messages_sent`
3. Set aggregation: SUM of quantity field
4. No filters (count all sent messages)
5. Link to WhatsApp Messaging Service product

### AI SMS Service Billable Metric
- **Metric Name**: `ai_sms_processed`
- **Event Type**: AI SMS processing completion
- **Aggregation Method**: SUM
- **Aggregation Field**: `quantity`
- **Filters**: `processing_status = 'completed'`
- **Associated Product**: AI SMS Service (`AI_SMS_001`)

**Configuration Steps:**
1. Navigate to **Billable Metrics** in Zenskar
2. Create new metric: `ai_sms_processed`
3. Set aggregation: SUM of quantity field
4. Apply filter for completed processing only
5. Link to AI SMS Service product

## Product Validation Checklist

### Product Configuration Validation
- [ ] SMS Service created with SKU `SMS_001` and correct properties
- [ ] WhatsApp Messaging Service created with SKU `WHATSAPP_001`
- [ ] AI SMS Service created with SKU `AI_SMS_001`
- [ ] All products have appropriate Type set to `Service`
- [ ] Categories and tags properly configured
- [ ] Tax codes assigned where applicable

### Billable Metrics Validation
- [ ] `sms_delivered` metric created and linked to SMS Service
- [ ] `whatsapp_messages_sent` metric created and linked to WhatsApp Service  
- [ ] `ai_sms_processed` metric created and linked to AI SMS Service
- [ ] All metrics configured with SUM aggregation
- [ ] Appropriate filters applied to each metric
- [ ] Metrics ready to receive usage events

### Integration Readiness
- [ ] Products ready for contract assignment
- [ ] Billable metrics ready for usage event ingestion
- [ ] Product catalog complete for customer configuration

## Next Steps
1. Proceed to `02-metering-configuration.md` to set up usage event ingestion
2. Configure usage data sources and validation rules
3. Test usage event to billable metric flow

## Zenskar References
- [Product Management](https://docs.zenskar.com/docs/product)
- [Billable Metrics](https://docs.zenskar.com/docs/billable-metrics)
- [Usage Events](https://docs.zenskar.com/docs/usage-event) 