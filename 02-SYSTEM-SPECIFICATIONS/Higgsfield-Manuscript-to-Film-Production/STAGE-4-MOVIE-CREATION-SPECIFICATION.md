# Stage 4 — Movie Creation Specification

**Stage ID:** HGFD-STAGE-4  
**Stage Name:** Movie Creation  
**Primary Outcome:** Versioned scene clip library with accepted takes and sequence preview

---

## 1. Per-Scene Clip Generation

Generate video clips per approved production unit using the appropriate Higgsfield path:

- Cinema Studio for cinematic scene builds
- image-to-video where approved storyboard frames anchor motion
- custom prompts for scene-specific pacing, camera, or atmosphere

## 2. Clip Variation Generation and Management

Support multiple takes per scene. Each take must preserve:

```yaml
clip_id: required
scene_id: required
take_number: required
parent_storyboard_frame_ids: []
prompt_version: required
model: required
parameters: required
generation_timestamp: required
credit_cost: required
status: draft|accepted|rejected|superseded
```

## 3. Modification Tracking and Version Control

User modifications must be first-class events. Supported modification categories include:

- extend scene
- change angle
- adjust mood
- add or reduce effects
- modify motion
- revise pacing
- regenerate from earlier visual lock

Every modification creates a new generation record with:

- request text
- normalized change intent
- parent clip version
- changed parameters only
- reason and approving actor

Rollback must allow return to any approved prior clip version without destroying later history.

## 4. Character Consistency Across Scenes

Character identity must remain locked against the approved Stage 2 references. If a clip drifts from the approved character visual profile, the clip must be flagged for review or regeneration.

## 5. Location Continuity Across Scenes

Location continuity checks must compare:

- palette and lighting
- architecture or environment anchors
- key props and geography
- time-of-day continuity where applicable

## 6. Clip Acceptance / Rejection Workflow

For each scene:

1. generate one or more takes
2. review clips individually and in sequence context
3. accept, reject, or request change
4. lock accepted take as current scene baseline

## 7. Clip Metadata Tracking

The clip ledger must retain:

- generation timestamp
- model used
- credit cost
- prompt and parameters
- source references
- approval state
- linked modification chain

## 8. Scene Assembly Preview

The system must present a preview that shows all currently accepted clips in order so the user can validate narrative flow before post-production.

## 9. Transition Gate to Stage 5

Stage 4 completes only when:

- required scenes have accepted clips or documented waivers
- modification history is preserved
- character and location continuity checks have been reviewed
- sequence preview has been approved for post-production handoff
