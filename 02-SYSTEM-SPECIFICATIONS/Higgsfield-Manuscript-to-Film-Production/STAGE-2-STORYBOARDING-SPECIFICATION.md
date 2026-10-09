# Stage 2 — Storyboarding Specification

**Stage ID:** HGFD-STAGE-2  
**Stage Name:** Storyboarding  
**Primary Outcome:** Approved storyboard baseline per scene with visual continuity controls

---

## 1. Manuscript Analysis

Stage 2 consumes the approved Stage 1 manuscript package and performs semantic scene understanding for each scene:

- core action
- emotional intent
- character presence and positioning
- location visual requirements
- camera or framing implications
- continuity dependencies from prior and following scenes

## 2. Storyboard Generation via Higgsfield

For each scene, create one or more keyframe candidates that represent:

- opening frame
- pivotal emotional beat
- transition frame where needed
- closing frame when scene handoff matters

The system must preserve:

```yaml
storyboard_frame_id: required
scene_id: required
prompt_version: required
model: required
reference_assets: []
credit_cost_estimate: required
actual_credit_cost: required_when_known
status: draft|approved|rejected|superseded
```

## 3. Character Reference Management

Character consistency uses Soul ID or equivalent identity locks where supported. Each character visual profile should bind:

- character record
- approved reference image set
- Soul ID / identity token
- forbidden drift notes
- costume / age / style variants by scene if intentionally changed

## 4. Location Reference Management

Location packages should store:

- approved establishing references
- mood and lighting presets
- weather or time-of-day variants
- continuity constraints between scenes

## 5. Scene-by-Scene Storyboard Structure

Every approved storyboard scene record must answer:

- **Who** is present and visually dominant
- **What** action or emotional beat is being shown
- **Where** it takes place and what environmental cues are required
- **When** in narrative time and lighting context it occurs

Recommended card:

```yaml
scene_id: required
who: []
what: required
where: required
when: optional
shot_intent: required
continuity_notes: []
approved_frames: []
```

## 6. Storyboard Approval Workflow

1. generate initial candidates
2. present scene-by-scene review package
3. capture requested modifications
4. regenerate only the affected scenes or entities
5. mark final approved baseline

No scene should move to production planning while visually unresolved unless explicitly waived.

## 7. Storyboard Versioning and Change Tracking

Required version events:

- created
- revised
- rejected
- approved baseline
- reopened

Every revision must store reason, requesting actor, changed parameters, and parent storyboard version.

## 8. Production Metadata Extraction

For each approved scene, compute planning signals:

- estimated clip duration
- scene complexity
- likely VFX requirements
- character count
- location reuse potential
- special asset dependencies

## 9. Approved Storyboard Data Model

```yaml
storyboards:
  - storyboard_id
  - manuscript_id
  - version
  - approval_state
storyboard_scenes:
  - storyboard_scene_id
  - storyboard_id
  - scene_id
  - who_json
  - what_summary
  - where_summary
  - when_summary
  - complexity_score
storyboard_frames:
  - frame_id
  - storyboard_scene_id
  - asset_id
  - prompt_hash
  - model
  - approved
storyboard_changes:
  - change_id
  - target_scene_id
  - requested_by
  - reason
  - parent_version
```

## 10. Transition Gate to Stage 3

Stage 2 completes only when:

- all required scenes have storyboard coverage
- character references are approved or formally waived
- location references are approved or formally waived
- storyboard changes are resolved or documented
- a storyboard baseline version is locked
- planning metadata is generated
