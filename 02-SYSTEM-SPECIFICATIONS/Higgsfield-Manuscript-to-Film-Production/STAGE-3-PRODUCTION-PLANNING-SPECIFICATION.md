# Stage 3 — Production Planning Specification

**Stage ID:** HGFD-STAGE-3  
**Stage Name:** Production Planning  
**Primary Outcome:** Approved scene, schedule, and budget plan for movie creation

---

## 1. Manuscript Scene-to-Production Breakdown

Convert approved storyboard scenes into production units with:

- source scene reference
- target clip count
- target duration
- required models or workflows
- continuity dependencies
- approval priority

## 2. Per-Scene Metadata Extraction

Each production unit must include:

```yaml
scene_id: required
character_count: required
primary_location: required
effects_level: none|light|medium|heavy
estimated_duration_seconds: required
iteration_risk: low|medium|high
continuity_dependencies: []
```

## 3. Episode Grouping Logic

Group scenes into episodes or sequence bundles using:

- natural act breaks
- narrative pacing
- length targets
- cliffhanger or transition logic
- production-efficiency considerations such as shared location or cast continuity

The grouping engine must allow manual override.

## 4. Production Schedule Estimation

Estimate:

- time per scene generation cycle
- likely revision cycles
- total render time
- review windows
- overall project duration

Outputs should separate optimistic, expected, and conservative ranges.

## 5. Higgsfield Credit Cost Calculation

Budgeting must incorporate:

- scene class (dialogue, action, VFX-heavy, montage)
- selected model
- number of takes or iterations planned
- reference asset preparation cost
- downstream edit/export overhead where relevant

## 6. Total Budget Estimation and Presentation

Present budget summary in a user-readable table:

| Category | Basis | Estimate |
|---|---|---|
| Reference generation | missing character/location/object assets | required |
| Storyboard revisions | per affected scene | required |
| Clip generation | scenes × takes × model profile | required |
| Post-production exports | final outputs and derivatives | required |

Budget must be approved before Stage 4 when the projected spend crosses the configured threshold.

## 7. Resource Planning

The plan must assign:

- render capacity expectations
- queue strategy for long-running jobs
- team review roles
- escalation route for failures or budget overruns

## 8. Production Readiness Checklist

Minimum checklist:

- storyboard baseline approved
- character locks present
- location continuity reviewed
- scene list complete
- clip/take targets defined
- schedule published
- budget accepted
- risk hotspots flagged
- backup/recovery path available

## 9. Transition Gate to Stage 4

Movie creation may start only when the readiness checklist passes and the user approves the production plan. If image continuity is not locked, clip generation is blocked unless the run is explicitly exploratory.
