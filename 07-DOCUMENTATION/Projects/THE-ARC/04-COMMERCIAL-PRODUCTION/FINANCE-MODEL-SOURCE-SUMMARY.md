# THE ARC — Commercial Finance Model v1 Source Summary

The generated workbook `THE_ARC_COMMERCIAL_FINANCE_MODEL_v1.xlsx` remains in the project artifact archive. This repository file preserves its planning assumptions, formulas, workstreams, and warnings so the financial logic is reviewable in Git.

## Workbook sheets
- Dashboard
- Assumptions
- Development Budget
- POC Trailer Budget
- Pilot Budget
- Season Model
- Revenue Scenarios
- Execution Tracker

## Base planning assumptions

| Category | Assumption | Base | Low | High | Note |
|---|---|---:|---:|---:|---|
| Development | Writers room / story package | $50,000 | $25,000 | $150,000 | planning assumption; replace with quotes |
| Development | Legal / IP / chain-of-title | $15,000 | $5,000 | $50,000 | consult entertainment attorney |
| Development | Pitch deck / design polish | $12,000 | $5,000 | $40,000 | planning assumption |
| Proof of Concept | 90-sec trailer production | $45,000 | $10,000 | $200,000 | AI-assisted POC planning assumption |
| Proof of Concept | Sound / music / VO / edit | $15,000 | $5,000 | $60,000 | planning assumption |
| Pilot | Pilot script + polish | $75,000 | $25,000 | $250,000 | planning assumption |
| Pilot | Pilot presentation production | $750,000 | $150,000 | $3,000,000 | depends on production method |
| Season | Episodes in season | 10 | 6 | 10 | creative assumption |
| Season | Pilot episode budget | $3,000,000 | $500,000 | $8,000,000 | scenario model |
| Season | Episode budget after pilot | $1,800,000 | $300,000 | $6,000,000 | scenario model |
| Revenue | Option/license upfront | $250,000 | $25,000 | $1,500,000 | illustrative only; not forecast |
| Revenue | Production fee / creator participation | $500,000 | $50,000 | $3,000,000 | illustrative only |
| Revenue | Ancillary / publishing / interactive | $150,000 | $10,000 | $2,000,000 | illustrative only |
| Finance | Contingency | 15% | 10% | 25% | adjustable scenario input |

## Core formulas

### Development
`Total Development = Development Subtotal + (Development Subtotal × Contingency)`

### Proof of concept
`Total POC = POC Subtotal + (POC Subtotal × Contingency)`

### Pilot
`Total Pilot = Pilot Subtotal + (Pilot Subtotal × Contingency)`

### Season production
`Season Production Subtotal = Pilot Episode Budget + (Episodes - 1) × Episode Budget After Pilot`

### Total package + season
`Total Package + Season = Season Production Subtotal + Development Carry + POC Carry`

### Illustrative value multiple
`Value / Dev+POC Multiple = Total Illustrative Value Pool ÷ Development+POC Cash Required`

## Important limitation

These are internal scenario assumptions, **not market quotes, forecasts, valuations, promises of revenue, or financing advice**. Before investor or producer use:

1. replace production assumptions with line-producer/vendor quotes;
2. replace legal assumptions with counsel estimates;
3. separate creator compensation from production-company fees;
4. model tax incentives only after jurisdiction is selected;
5. model distribution/financing terms from actual deal structures;
6. label every revenue scenario as contingent and non-guaranteed.

## Current financial gate

The workbook is sufficient for development planning. It is not yet investor-grade until assumptions are replaced with sourced quotes and deal-specific terms.
