# Stage 1 — Manuscript Intake Specification

**Stage ID:** HGFD-STAGE-1  
**Stage Name:** Manuscript Intake  
**Input Surface:** VisionWeaver manuscript upload  
**Primary Outcome:** Approved manuscript package with parsed narrative structure and reference-asset plan

---

## 1. Supported Formats

Accepted manuscript inputs:

- `.md`
- `.txt`
- `.pdf`

Rules:

- preserve original uploaded file and checksum
- normalize extracted text into a canonical working text record
- for PDFs, keep both raw file and extracted text snapshot
- reject password-protected or unreadable PDFs until the user resolves access

## 2. Intake Sequence

```text
Upload manuscript
    ↓
Fingerprint file + capture metadata
    ↓
Extract text
    ↓
Parse chapters / scenes / characters / locations
    ↓
Ask for existing reference images
    ↓
Ingest uploaded references or queue Higgsfield-assisted generation
    ↓
Produce manuscript package for approval
```

## 3. Required Metadata Capture

Capture at minimum:

```yaml
title: required
author: required
genre: required
target_audience: required
visual_style: required
source_format: required
language: recommended
series_or_project: recommended
adaptation_goal: required
notes_from_user: optional
```

## 4. Parsing Requirements

The parser must identify where possible:

- chapters or equivalent sections
- scene boundaries
- named characters
- locations and settings
- object and prop references
- dialogue blocks
- emotional beats
- action beats
- time-of-day or temporal clues

If confidence is low, the system must flag the ambiguous section for user review instead of silently inventing structure.

## 5. Asset Discovery Loop

After parsing, VisionWeaver must ask the user whether reference assets already exist for:

- main characters
- supporting characters
- locations
- important props/objects
- mood boards / lighting references / style boards

Decision logic:

1. if user uploads references, bind them to entities and log provenance
2. if user has partial references, preserve them and queue only missing entities
3. if user has no references, offer guided Higgsfield generation with approval checkpoints
4. generated references must be labeled as derivatives, not source-author artifacts

## 6. Scene Extraction Algorithm

The stage should extract one structured scene card per scene using this minimum model:

```yaml
scene_id: required
chapter_id: optional
summary: required
emotional_beats: []
character_interactions: []
location_requirements: []
props: []
time_context: optional
conflict: optional
visual_priority_score: low|medium|high
```

Extraction rule set:

- split on explicit headings when present
- otherwise detect scene boundaries from location/time/dialogue transitions
- identify primary point-of-view where inferable
- mark unresolved parsing conflicts for user review
- attach citations back to the source text span

## 7. Character Roster Generation

For each identified character produce:

- canonical display name
- aliases or alternate mentions
- narrative role
- short description
- physical traits relevant to visual continuity
- emotional / archetypal notes where explicit in source
- reference image status: uploaded, pending, generated, approved

## 8. Location Roster Generation

For each location produce:

- canonical location name
- short description
- recurring or one-time classification
- tone / mood / lighting cues
- required visual references
- continuity notes across scenes

## 9. Database Schema Mapping

Minimum record mapping:

```yaml
manuscripts:
  - manuscript_id
  - project_id
  - source_file_uri
  - source_checksum
  - normalized_text_uri
  - metadata_json
  - parsing_status
  - approval_state
scenes:
  - scene_id
  - manuscript_id
  - order_index
  - chapter_ref
  - summary
  - metadata_json
characters:
  - character_id
  - manuscript_id
  - canonical_name
  - metadata_json
locations:
  - location_id
  - manuscript_id
  - canonical_name
  - metadata_json
reference_assets:
  - asset_id
  - entity_type
  - entity_id
  - source_type
  - approval_state
```

## 10. Validation Gates Before Stage 2

Stage 1 is complete only when:

- manuscript file stored and checksum recorded
- text extracted successfully or issue explicitly blocked
- manuscript metadata completed
- scene roster created and reviewed
- character roster created
- location roster created
- reference asset needs identified
- missing reference assets either supplied or queued for Higgsfield generation
- intake approval recorded

If any item is missing, the manuscript package remains `IN_REVIEW` or `CHANGES_REQUESTED`.
