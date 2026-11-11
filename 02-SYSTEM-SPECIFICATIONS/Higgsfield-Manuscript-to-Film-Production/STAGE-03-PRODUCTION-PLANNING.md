# Stage 03 — Production Planning

## Objective

Lock the scene order, generation strategy, provider routing, and budget envelope before movie creation.

## Inputs

- Approved storyboard
- target runtime specs (aspect ratio, duration, output format)
- provider constraints from Higgsfield Integration Layer

## Approval Gate

- **Gate:** Production Plan + Budget Approval
- **Owner:** Production lead + budget approver
- **Blockers:** budget exceeds policy, unresolved provider capability gaps

## Provider Boundary

No final generation call yet. Stage prepares deterministic execution plan for Stage 04.

## Recovery / Error Handling

- plan validation failures return to storyboard revision loop
- provider-unavailable state triggers fallback routing policy

## Cost / Credit Control

Budget must include forecast by scene group and provider; advance blocked without approved budget receipt.
