# Stage 06 — Distribution

## Objective

Release mastered outputs to configured publishing/distribution channels with rights/provenance receipts.

## Inputs

- approved post-production masters
- channel package definitions
- campaign metadata and release windows

## Approval Gate

- **Gate:** Distribution Approval
- **Owner:** Publishing/release authority
- **Blockers:** rights mismatch, missing provenance receipt, failed package validation

## Provider Boundary

Distribution endpoints are downstream of VisionWeaver/Higgsfield generation boundary.

## Recovery / Error Handling

- failed channel publish attempts are retried with idempotent release token
- distribution exception report written for manual recovery path

## Cost / Credit Control

Distribution charges and channel-specific fees logged as release receipts and linked to project budget.
