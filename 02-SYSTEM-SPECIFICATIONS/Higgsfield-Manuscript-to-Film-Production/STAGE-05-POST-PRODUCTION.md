# Stage 05 — Post-Production

## Objective

Assemble approved generated scenes, apply finishing passes, and produce master deliverables.

## Inputs

- approved generated scene assets
- soundtrack/voice/effects assets
- quality thresholds and render settings

## Approval Gate

- **Gate:** Post-Production Approval
- **Owner:** Post-production reviewer
- **Blockers:** failing QC checks, unresolved asset lineage gaps

## Provider Boundary

Provider-bound generation is complete; this stage primarily performs assembly and QC workflows.

## Recovery / Error Handling

- failed render/export jobs create resumable post jobs
- QC failures reopen targeted asset repair tasks

## Cost / Credit Control

Post-production compute usage and rerender counts recorded for variance tracking.
