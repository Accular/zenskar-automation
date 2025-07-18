# Zenskar Implementation Plan: Smsworld Billing Configuration

## Project Overview
Configure Zenskar billing system for **Smsworld** - a telecommunications company offering SMS, WhatsApp Messaging, and AI SMS services with complex customer-specific pricing models.

## Project Structure

### Phase 1: Foundation Setup
- [ ] **Product Catalog Configuration** (`01-product-setup.md`)
- [ ] **Metering Rules & Usage Data** (`02-metering-configuration.md`)
- [ ] **Customer Profile Setup** (`03-customer-setup.md`)

### Phase 2: Contract Configuration
- [ ] **Customer A Contract** (`04-customer-a-contract.md`)
- [ ] **Customer B Contract** (`05-customer-b-contract.md`) 
- [ ] **Customer C Contract** (`06-customer-c-contract.md`)

### Phase 3: Testing & Invoice Generation
- [ ] **Usage Data Simulation** (`07-usage-data-simulation.md`)
- [ ] **Invoice Generation** (`08-invoice-generation.md`)
- [ ] **Validation & Testing** (`09-validation-testing.md`)

## Key Zenskar Features Required

### Core Concepts
- **Products**: SMS, WhatsApp Messaging, AI SMS
- **Contracts**: Customer-specific pricing rules
- **Usage Events**: Metering data for billing
- **Billable Metrics**: Usage measurement definitions

### Pricing Models Needed
- **Per-unit pricing**: Simple per-SMS billing
- **Volume pricing**: WhatsApp bulk pricing
- **Tiered pricing**: AI SMS volume discounts
- **Minimum commitments**: Customer B monthly minimum
- **Free tiers**: Customer C WhatsApp free messages

### Data Integration
- **Usage ingestion**: Via APIs, dashboard, or CSV
- **Invoice generation**: Automated billing cycles
- **Analytics**: Revenue tracking and reporting

## Implementation Timeline
1. **Day 1**: Foundation setup (Products, Metering)
2. **Day 2**: Contract configuration (All 3 customers)
3. **Day 3**: Usage simulation and invoice generation
4. **Day 4**: Testing and validation

## Success Criteria
- [ ] All 3 products configured correctly
- [ ] Metering rules capture usage accurately
- [ ] 3 customer contracts with distinct pricing
- [ ] Minimum 6 invoices generated (2 per customer)
- [ ] Pricing calculations validated against requirements

## Documentation Files
- `01-product-setup.md` - Product catalog configuration
- `02-metering-configuration.md` - Usage tracking setup
- `03-customer-setup.md` - Customer profile creation
- `04-customer-a-contract.md` - Customer A pricing setup
- `05-customer-b-contract.md` - Customer B pricing setup
- `06-customer-c-contract.md` - Customer C pricing setup
- `07-usage-data-simulation.md` - Test data generation
- `08-invoice-generation.md` - Billing process
- `09-validation-testing.md` - Quality assurance

## Reference Links
- [Zenskar Documentation](https://docs.zenskar.com/docs/introduction-to-zenskar)
- [Pricing Models Guide](https://docs.zenskar.com/docs/pricing-models)
- [Contract Management](https://docs.zenskar.com/docs/contracts)
- [Usage Events](https://docs.zenskar.com/docs/usage-events) 