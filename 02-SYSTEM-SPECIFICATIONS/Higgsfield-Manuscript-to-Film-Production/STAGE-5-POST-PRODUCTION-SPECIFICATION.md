# Stage 5 — Post-Production Specification

**Stage ID:** HGFD-STAGE-5  
**Stage Name:** Post-Production  
**Primary Outcome:** Versioned final film package with export-ready deliverables

---

## 1. Multi-Clip Assembly

Assemble accepted clips in sequence using the approved production plan and scene order. Preserve edit decision lists for every assembly version.

## 2. Clip Trimming and Time Adjustment

Support trim-in, trim-out, tempo adjustment, and scene extension references without overwriting the underlying clip masters.

## 3. Transition Management

Supported transition families include:

- hard cuts
- fades
- dissolves
- motion transitions
- scene-specific effects

Each applied transition must be versioned and reversible.

## 4. VFX and Filter Application

Apply VFX and visual treatments as additive edits with metadata describing:

- effect type
- target timeline segment
- parameters
- operator
- rationale

## 5. Motion Effect Insertion Between Clips

Inter-scene bridges, camera moves, or motion graphics between clips must be stored as explicit derived assets and linked to both neighboring scenes.

## 6. Audio Integration

Audio tracks may include:

- voice-over
- dialogue cleanup
- music
- sound effects
- ambient beds

Audio must remain separable in the edit history for rollback and remix.

## 7. Edit History Tracking and Versioning

Every edit version must track:

- source assembly version
- changed timeline segments
- operator
- rationale
- export outputs created from the version

## 8. Quality Review Workflow

Quality review must evaluate:

- story continuity
- sync and pacing
- visual consistency
- audio quality
- export readiness
- rights / provenance completeness

## 9. Export Format Specifications

Required export classes should include:

- archive master
- publication master
- social master
- review proxy

Each export should record codec/profile/resolution metadata.

## 10. Rollback and Final Film Approval Gate

Rollback must allow restoration of any approved edit baseline. Final film approval requires completion of edit review, export validation, provenance review, and documented sign-off.
