# Stage 01 — Manuscript Intake

## Objective

Accept manuscript package, normalize metadata, and open a provenance-tracked production record.

## Inputs

- Manuscript file(s)
- Story metadata (title, owner, rights)
- Optional character/location/object references

## Approval Gate

- **Gate:** Intake Approval
- **Owner:** VisionWeaver operator/reviewer
- **Blockers:** missing rights metadata, malformed source package

## Provider Boundary

No provider generation calls. Intake remains inside VisionWeaver + storage boundaries.

## Recovery / Error Handling

- failed parse creates a retriable intake error record
- partial metadata capture remains `PENDING_ENRICHMENT` and cannot advance

## Cost / Credit Control

No generation credits consumed; intake storage/processing event logged for cost audit.
