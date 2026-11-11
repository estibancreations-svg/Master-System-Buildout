# Stage 02 — Storyboarding

## Objective

Generate and review scene-level storyboard plan with reference assets and prompt lineage.

## Inputs

- Approved Stage 01 intake package
- Scene breakdown and style directives
- Optional reference image generation requests routed to Higgsfield Integration Layer

## Approval Gate

- **Gate:** Storyboard Approval
- **Owner:** Creative reviewer
- **Blockers:** unresolved continuity conflicts, rejected storyboard set

## Provider Boundary

Reference generation requests cross into Higgsfield Integration Layer. VisionWeaver remains approval authority.

## Recovery / Error Handling

- provider failure creates retryable storyboard task
- each retry increments provenance attempt count

## Cost / Credit Control

- preflight credit estimate required
- failed provider jobs still write spend-attempt telemetry
