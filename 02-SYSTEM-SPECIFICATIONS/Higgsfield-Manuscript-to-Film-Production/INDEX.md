# Higgsfield Manuscript-to-Film Production Index

**System ID:** `SYS-HGFD-001`  
**Primary Consumer:** VisionWeaver  
**Governing Directive:** `../../00-CENTRAL-HUB/Directives/HIGGSFIELD-INTEGRATION-ACCOUNTABILITY-DIRECTIVE.md`

---

## User-Facing Workflow Map

| Stage | File | User Outcome | Required Artifacts | Approval Gate | Typical Timeline | Credit / Budget Impact |
|---|---|---|---|---|---|---|
| 1 | [`STAGE-1-MANUSCRIPT-INTAKE-SPECIFICATION.md`](STAGE-1-MANUSCRIPT-INTAKE-SPECIFICATION.md) | Manuscript accepted, parsed, and normalized | manuscript file, parsed scenes, metadata, character roster, location roster, reference-asset intake plan | Intake approval | 30 minutes to 1 business day depending on manuscript size and PDF extraction quality | Low to medium; reference generation begins only for missing assets |
| 2 | [`STAGE-2-STORYBOARDING-SPECIFICATION.md`](STAGE-2-STORYBOARDING-SPECIFICATION.md) | Scene storyboard package with approved visual anchors | approved storyboard frames, reference images, Who/What/Where/When breakdown, storyboard versions | Storyboard approval | 1 to 5 business days | Medium to high depending on scene count and revision iterations |
| 3 | [`STAGE-3-PRODUCTION-PLANNING-SPECIFICATION.md`](STAGE-3-PRODUCTION-PLANNING-SPECIFICATION.md) | Budgeted scene and episode production plan | scene breakdown, episode groupings, schedule, credit estimate, readiness checklist | Planning approval | Same day to 2 business days | Planning only; budget commitment recorded before clip generation |
| 4 | [`STAGE-4-MOVIE-CREATION-SPECIFICATION.md`](STAGE-4-MOVIE-CREATION-SPECIFICATION.md) | Generated clip library with variations and accepted takes | clip versions, prompt history, Soul ID locks, acceptance ledger, assembly preview | Clip package approval | 1 day to multiple weeks based on scope | Highest generation spend; must enforce caps and approvals |
| 5 | [`STAGE-5-POST-PRODUCTION-SPECIFICATION.md`](STAGE-5-POST-PRODUCTION-SPECIFICATION.md) | Edited film package ready for release | edit timeline, transitions, audio, VFX, exports, rollback checkpoints | Final film approval | 1 day to 2 weeks | Medium; render/export and post-processing costs |
| 6 | [`STAGE-6-DISTRIBUTION-SPECIFICATION.md`](STAGE-6-DISTRIBUTION-SPECIFICATION.md) | Publication, social, and commerce derivatives prepared and tracked | social clips, carousel images, captions, analytics hooks, publication files, production notes | Distribution approval | Same day to ongoing | Variable; usually lower than production but can compound with marketing variations |

---

## Stage Transition Rules

```text
Stage 1 complete  → Stage 2 begins only after manuscript structure + references are approved
Stage 2 complete  → Stage 3 begins only after storyboard baseline is approved
Stage 3 complete  → Stage 4 begins only after budget + schedule + readiness are approved
Stage 4 complete  → Stage 5 begins only after required clips are accepted or waived
Stage 5 complete  → Stage 6 begins only after final film QC and approval
Stage 6 complete  → Distribution, publication, analytics, and commerce monitoring continue as governed follow-on operations
```

---

## Required Artifacts by Stage

### Stage 1
- manuscript checksum
- manuscript metadata card
- chapter/scene index
- character roster
- location roster
- asset discovery questionnaire

### Stage 2
- scene storyboard set
- character Soul ID bindings
- location mood boards
- storyboard change log
- production metadata draft

### Stage 3
- per-scene production sheet
- episode grouping map
- schedule estimate
- credit budget summary
- readiness checklist

### Stage 4
- scene clip library
- approved take index
- modification request ledger
- clip parameter receipts
- assembly preview

### Stage 5
- edit decision list
- transitions and effect manifest
- audio mix manifest
- export catalog
- rollback checkpoints

### Stage 6
- social distribution package
- platform variants
- captions and hashtag pack
- publication package
- production notes bundle
- analytics and commerce ledger

---

## Related Materials

### Prompt
- [`../../03-AI-PROMPTS/Agent-Prompts/MANUSCRIPT-TO-FILM-ORCHESTRATOR-AGENT.md`](../../03-AI-PROMPTS/Agent-Prompts/MANUSCRIPT-TO-FILM-ORCHESTRATOR-AGENT.md)

### Automation Specs
- [`../../05-AUTOMATION/Higgsfield-Integration/manuscript-intake-automation.ts`](../../05-AUTOMATION/Higgsfield-Integration/manuscript-intake-automation.ts)
- [`../../05-AUTOMATION/Higgsfield-Integration/storyboard-generation-automation.ts`](../../05-AUTOMATION/Higgsfield-Integration/storyboard-generation-automation.ts)
- [`../../05-AUTOMATION/Higgsfield-Integration/production-planning-automation.ts`](../../05-AUTOMATION/Higgsfield-Integration/production-planning-automation.ts)
- [`../../05-AUTOMATION/Higgsfield-Integration/movie-creation-automation.ts`](../../05-AUTOMATION/Higgsfield-Integration/movie-creation-automation.ts)
- [`../../05-AUTOMATION/Higgsfield-Integration/post-production-automation.ts`](../../05-AUTOMATION/Higgsfield-Integration/post-production-automation.ts)
- [`../../05-AUTOMATION/Higgsfield-Integration/distribution-automation.ts`](../../05-AUTOMATION/Higgsfield-Integration/distribution-automation.ts)

### Deployment
- [`../../06-DEPLOYMENT/Higgsfield-Integration/vercel-edge-functions.yaml`](../../06-DEPLOYMENT/Higgsfield-Integration/vercel-edge-functions.yaml)
- [`../../06-DEPLOYMENT/Higgsfield-Integration/backend-microservice.yaml`](../../06-DEPLOYMENT/Higgsfield-Integration/backend-microservice.yaml)
- [`../../06-DEPLOYMENT/Higgsfield-Integration/supabase-migrations.yaml`](../../06-DEPLOYMENT/Higgsfield-Integration/supabase-migrations.yaml)
- [`../../06-DEPLOYMENT/Higgsfield-Integration/environment-variables.yaml`](../../06-DEPLOYMENT/Higgsfield-Integration/environment-variables.yaml)
- [`../../06-DEPLOYMENT/Higgsfield-Integration/monitoring-and-alerts.yaml`](../../06-DEPLOYMENT/Higgsfield-Integration/monitoring-and-alerts.yaml)

### Operator Documentation
- [`../../07-DOCUMENTATION/Higgsfield-Integration/QUICK-START-GUIDE.md`](../../07-DOCUMENTATION/Higgsfield-Integration/QUICK-START-GUIDE.md)
- [`../../07-DOCUMENTATION/Higgsfield-Integration/GOVERNANCE-AND-AUDIT.md`](../../07-DOCUMENTATION/Higgsfield-Integration/GOVERNANCE-AND-AUDIT.md)

---

## Operating Principle

The pipeline is manuscript-first, approval-gated, provenance-preserving, and version-aware. The system must always be able to answer:

- what source the current asset came from
- what changed between versions
- who approved the transition
- what budget was estimated and consumed
- how to resume if a run is interrupted
