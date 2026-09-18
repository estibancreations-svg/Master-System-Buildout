# Higgsfield / VisionWeaver Cost, Audit, and Troubleshooting

## Cost and credit controls

- Run preflight budget checks on Stage 02 and Stage 04.
- Block provider dispatch when policy returns budget rejection.
- Retain failed dispatch attempts in cost telemetry.

## Provenance audit minimums

For every stage transition, keep:

- stage transition timestamp
- approver identity
- source manuscript/version id
- prompt/spec version id
- provider job ids when applicable
- credit/budget decision receipt

## Troubleshooting matrix

| Symptom | Likely boundary | First action |
|---|---|---|
| provider generation timeout | Higgsfield Integration Layer | inspect queued job state and retry policy |
| budget rejection before dispatch | VisionWeaver policy gate | review forecast and approval envelope |
| missing distribution package | Publishing boundary | re-run Stage 06 package generation |
| stage advance without approval | Workflow governance defect | stop run, mark blocked, reopen prior stage |

## Verification disclaimer

A successful spec validation run confirms internal consistency of this package only. It does not certify production runtime behavior.
