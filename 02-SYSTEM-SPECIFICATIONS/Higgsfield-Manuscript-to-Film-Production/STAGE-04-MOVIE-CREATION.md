# Stage 04 — Movie Creation

## Objective

Execute approved scene generation through Higgsfield Integration Layer with locked prompts and tracked versions.

## Inputs

- Approved production plan
- locked prompts + references
- scene generation batch definitions

## Approval Gate

- **Gate:** Locked Image/Scene Generation Approval
- **Owner:** Production reviewer
- **Blockers:** unresolved failed scenes, unacceptable generated outputs

## Provider Boundary

Higgsfield Integration Layer owns provider calls, leases, queueing, and job-state persistence.

## Recovery / Error Handling

- failed scene jobs are resumable
- partial scene completion is retained, not discarded
- retries require audit-linked decision entry

## Cost / Credit Control

- per-batch credit precheck and post-run reconciliation
- policy rejection blocks dispatch before provider call
