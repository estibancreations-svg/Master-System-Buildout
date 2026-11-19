# HIGGSFIELD INTEGRATION ACCOUNTABILITY DIRECTIVE

**Directive ID:** DIR-HIGGSFIELD-INTEGRATION-001  
**Managed Subsystem ID:** SYS-HGFD-001  
**Version:** 1.0  
**Status:** ACTIVE / SPECIFICATION-INSTALLED  
**Repository:** `estibancreations-svg/Master-System-Buildout`  
**Implementation Repository:** `estibancreations-svg/Higgsfield-Integration-Layer`  
**Primary Product Surface:** VisionWeaver manuscript-to-film pipeline  
**Related Systems:** `SYS-VISION-001`, `SYS-CEO-001`

---

# PURPOSE

Govern the Higgsfield Integration Layer as a managed creative-production subsystem for VisionWeaver. This directive establishes accountability, provenance, approval gates, audit requirements, recovery rules, and deployment boundaries for manuscript-to-film work spanning manuscript intake, storyboard generation, production planning, movie creation, post-production, and distribution.

This directive controls creative-asset generation and lifecycle tracking. No stage may be treated as complete unless its required artifacts, approvals, audit records, and provenance links are present.

---

# CONTROLLING AUTHORITY

The Architect remains final discretionary authority for governed creative production. The accountability model defined in the Central Hub directive family applies here, including explicit approval gates, truthful status reporting, and prohibition on silent overrides.

Reference authority:

- `00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md`
- `00-CENTRAL-HUB/Directives/FRAGMENTED-DATA-RECOVERY-AND-PROVENANCE-DIRECTIVE.md`
- `00-CENTRAL-HUB/Directives/SEPARATE-SYSTEM-IDENTITY-AND-LINKAGE-RULE.md`

---

# MANAGED SUBSYSTEM DEFINITION

## Canonical identity

| Field | Value |
|---|---|
| System ID | `SYS-HGFD-001` |
| System Name | Higgsfield Integration Layer |
| System Class | Managed subsystem / integration layer |
| Canonical Role | Creative asset generation, job orchestration, provenance logging, credit accountability |
| Source Repository | `estibancreations-svg/Higgsfield-Integration-Layer` |
| Governing Repository | `estibancreations-svg/Master-System-Buildout` |
| Primary Consumer | VisionWeaver |
| Oversight Surface | CEO Dashboard |

## Boundary rule

Higgsfield is a governed subsystem, not a silent extension of VisionWeaver. VisionWeaver owns the user-facing manuscript-to-film workflow; Higgsfield owns generation orchestration, generation metadata, credit consumption records, and media provenance receipts. Shared infrastructure does not merge system identity.

---

# LIFECYCLE-CONTROLLED ARTIFACTS

Every production run must track the full lifecycle of the following artifact classes:

1. manuscript source files (`.md`, `.txt`, `.pdf`)
2. parsed manuscript records
3. character reference images
4. location and object reference images
5. storyboard keyframes
6. production plans and episode groupings
7. per-scene clips and alternate takes
8. assembled cuts and post-production revisions
9. final films and export packages
10. distribution derivatives such as social clips, carousel images, captions, publication packages, and commerce assets

Each artifact must maintain:

```yaml
artifact_id: required
artifact_type: required
source_stage: required
derived_from: required_when_derivative
project_id: required
manuscript_id: required_when_applicable
scene_id: required_when_scene_bound
version: required
status: required
checksum_or_receipt: required_when_file_exists
created_by: required
created_at: required
approval_state: required
provenance_links: required
```

---

# AUDIT LOGGING REQUIREMENTS

All Higgsfield-managed work must emit durable audit records for:

- every image, video, and derived-media generation call
- input prompts, model identifiers, rendering parameters, and reference assets used
- credit estimates, actual credit consumption, refunds, and manual adjustments
- user modification requests, including who requested the change, when, and why
- approval/rejection decisions at every stage gate
- retries, failures, cancellations, and recovery actions
- exports to publication or distribution targets

Minimum log fields:

```yaml
log_id: required
system_id: SYS-HGFD-001
workflow_id: required
stage_id: required
action_type: required
actor_id: required
actor_role: required
timestamp: required
request_payload_hash: required_when_api_call
response_receipt: required_when_available
credit_delta: required_when_billed
artifact_ids: []
change_reason: required_for_modifications
outcome: success|failure|cancelled|partial|recovered
```

Do not treat provider success responses as sufficient evidence of business completion. Generation success, asset approval, and stage completion are separate states.

---

# PROVENANCE CHAIN RULE

Every creative asset must be traceable from manuscript source to final derivative. The provenance chain must preserve:

```text
MANUSCRIPT SOURCE
    ↓
PARSED SCENE / CHARACTER / LOCATION RECORDS
    ↓
REFERENCE ASSET SET
    ↓
STORYBOARD KEYFRAMES
    ↓
PRODUCTION PLAN
    ↓
SCENE CLIPS + VARIATIONS
    ↓
POST-PRODUCTION ASSEMBLIES
    ↓
FINAL FILM
    ↓
DISTRIBUTION / PUBLICATION / COMMERCE DERIVATIVES
```

For each hop, record:

- parent artifact IDs
- transformation type
- prompt or instruction set
- approving actor
- timestamps
- source checksums or immutable object references
- applicable rights or reuse constraints

No derivative asset may be published if its parentage cannot be resolved to an approved manuscript/project lineage.

---

# APPROVAL GATES AND STAGE TRANSITIONS

No downstream stage may start automatically unless the prior stage gate is satisfied or The Architect explicitly authorizes parallel work.

| Transition | Required Gate |
|---|---|
| Manuscript → Storyboards | Manuscript parsed, metadata captured, scene roster validated, character/location references resolved or queued for generation, intake approval recorded |
| Storyboards → Production Planning | Scene-by-scene storyboard approved, visual continuity locked, version baseline created |
| Production Planning → Movie Creation | Scene counts, episode groups, schedule, cost estimate, and readiness checklist approved |
| Movie Creation → Post-Production | Required scene clips accepted or explicitly waived, modification ledger complete, clip sequence preview approved |
| Post-Production → Distribution | Final cut approved, export package validated, QC and provenance checks complete |
| Distribution → Publication/Analytics | Platform package prepared, destination metadata approved, tracking hooks verified |

Mandatory approval states:

```text
DRAFT
IN_REVIEW
CHANGES_REQUESTED
APPROVED
BLOCKED
RECOVERY_REQUIRED
```

---

# VISIONWEAVER MANUSCRIPT-FIRST OPERATING RULE

The canonical user flow is manuscript-first:

1. user uploads manuscript source (`.md`, `.txt`, or `.pdf`) into VisionWeaver
2. system parses chapters, scenes, characters, locations, and metadata
3. system asks whether the user already has reference images for characters, locations, objects, or style boards
4. user uploads available references
5. missing references pivot into guided Higgsfield generation with the user
6. system returns structured scene/episode breakdowns and storyboard proposals
7. user reviews, modifies, and locks approved visual/story structure
8. system generates a production layout with scene counts, clip counts, timing, and budget
9. movie creation proceeds only after storyboard and planning locks are approved
10. post-production and distribution derive from approved clip and edit history

Any deviation from this manuscript-first flow must be explicitly recorded in the audit trail.

---

# FRAGMENT RECOVERY AND INTERRUPTED WORKFLOW RULE

Incomplete generations, cancelled jobs, upload interruptions, and partial media sets are governed fragments, not disposable noise.

For any interrupted workflow:

1. preserve the partial artifact and provider receipts
2. classify the interruption cause
3. record the last confirmed good stage and asset version
4. mark downstream outputs `BLOCKED` or `RECOVERY_REQUIRED`
5. offer resume, regenerate, or rollback paths
6. retain prior failed or partial generations for provenance unless policy requires secure deletion

Integrity classes from the fragmented-data directive apply by analogy:

- complete approved artifact package = strongest evidence
- partial generation output = reference fragment
- regenerated replacement = new evidence unit, not overwrite-by-assumption

Recovery actions must preserve modification history and cost impact.

---

# CREDIT AND BUDGET ACCOUNTABILITY

Credit use is governed financial evidence. Higgsfield jobs must support:

- preflight credit estimation
- user-visible budget presentation before costly runs
- project-level cost caps
- per-stage credit ledger entries
- reconciliation of estimated versus actual credit usage
- escalation when budget variance exceeds threshold

The CEO Dashboard may aggregate reporting, but the Higgsfield subsystem remains the originating source of truth for generation-level credit receipts.

---

# MINIMUM IMPLEMENTATION CLAIMS

Current allowed truth state:

```text
Directive: INSTALLED
Stage Specifications: REQUIRED
Automation Specs: REQUIRED
Deployment Specs: REQUIRED
Operator Docs: REQUIRED
Production Runtime: SEPARATE IMPLEMENTATION REPOSITORY
Deployed VisionWeaver UI Integration: NOT YET CERTIFIED
```

Do not claim a production-ready manuscript-to-film runtime in this repository unless executable evidence exists and has been independently validated.

---

# COMPLIANCE CHECKLIST

Before calling a Higgsfield workflow production-ready, verify:

- directive installed
- stage specifications installed
- prompt installed
- automation specifications installed
- deployment specs installed
- audit fields defined
- provenance chain defined
- approval gates defined
- recovery rules defined
- registry entry created
- repository map updated

Failure at any item blocks a truthfully complete claim.
