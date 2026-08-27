# VisionWeaver Version Lineage & Security Remediation Record

**System ID:** `SYS-VISION-001`  
**Record ID:** `VISIONWEAVER-VLR-001`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001

---

## 1. Purpose

Map all recovered VisionWeaver versions across HisMajesty repositories, Master-dashboard-, Drive, and memory sources. Classify each version F0–F5. Document security findings and remediation requirements. Record the formal canonical version decision. Produce the version compatibility and deprecation schedule.

---

## 2. Recovered Version Inventory

| Version ID | Repository / Source | Evidence Type | F-Classification | Notes |
|---|---|---|---|---|
| VW-DREAM-WEAVER-HISTORICAL | HisMajesty archives / conversation records | Historical conversation reference | F4 | Early creative/concept-stage name; no active code; provenance only |
| VW-V4X | `HisMajesty0225/VisionWeaver-Revision-Hub` (v4.x branch/tags) | Repository — older implementation branch | F3 | Pre-production iteration; AI/orchestration interface present but not hardened |
| VW-V5X | `HisMajesty0225/VisionWeaver-Revision-Hub` (v5.x branch/tags) | Repository — intermediate version | F2 | Closer to production-ready; Firebase/Firestore integration; security gaps present |
| VW-V6-MAIN | `estibancreations-svg/Master-dashboard-` (main branch) | Repository — merged production implementation | F1 | Merged 2026-08-12 via PR #2; Supabase migration applied; n8n cron live; CEO/Architect overrides active — live re-verification required |
| VW-DRIVE-SYSTEM-BIBLE | Drive — VisionWeaver System Bible document | Document specification | F1 | High-confidence spec source; not yet certified as implementation-verified against v6 code |
| VW-DRIVE-SETUP | Drive — setup document | Document — configuration | F2 | Setup instructions; may contain stale credential patterns |
| VW-DRIVE-MEMORY-GEM | Drive — Memory Gem export | Document — conversation/memory | F1 | Preserved conversation provenance |
| VW-DRIVE-ORGANIZED-FINDINGS | Drive — organized findings package | Document — research/recovery | F1 | Cross-source reconciliation artifact |
| VW-SPEC-2026-08-12 | `02-SYSTEM-SPECIFICATIONS/VisionWeaver/VISIONWEAVER-IMPLEMENTATION-RECONCILIATION.md` | Specification — governed reconciliation | F0 | Canonical governed specification; implementation domains defined |
| VW-PRODUCTION-RELEASE-2026-08-10 | `02-SYSTEM-SPECIFICATIONS/VisionWeaver/VISIONWEAVER-PRODUCTION-RELEASE-2026-08-10.md` | Release record | F0 | Production release record; links to merged v6 |

---

## 3. Version Lineage Tree

```
VW-DREAM-WEAVER-HISTORICAL (concept — F4)
  │
  └─► VW-V4X (HisMajesty — F3)
        │
        └─► VW-V5X (HisMajesty — F2)
              │
              └─► VW-V6-MAIN (Master-dashboard- main — F1)  ← current implementation
                    │
                    └─► VW-SPEC-2026-08-12 [CANONICAL — F0]  ← authoritative spec
                          └─► VW-PRODUCTION-RELEASE-2026-08-10 [RELEASE RECORD — F0]

VW-DRIVE-SYSTEM-BIBLE (F1) ──────────► informed VW-SPEC-2026-08-12
VW-DRIVE-ORGANIZED-FINDINGS (F1) ────► informed VW-SPEC-2026-08-12
```

---

## 4. Canonical Version Decision

**Canonical VisionWeaver Implementation:** VW-V6-MAIN in `estibancreations-svg/Master-dashboard-` main branch  
**Canonical VisionWeaver Specification:** `02-SYSTEM-SPECIFICATIONS/VisionWeaver/VISIONWEAVER-IMPLEMENTATION-RECONCILIATION.md`  
**Decision:** **Accept current v6 as canonical — subject to mandatory security verification before new production claims.**

**Rationale:**
- v6 is merged, Supabase migration applied, n8n cron active, CEO/Architect policies active
- v4.x and v5.x are historical iterations preserved as provenance; they do not supersede v6
- Dream-Weaver is a historical naming artifact with no active implementation
- Drive System Bible informs the spec but does not create a separate version identity
- Security hardening gate (defined in `VISIONWEAVER-IMPLEMENTATION-RECONCILIATION.md` §Security Hardening Gate) is the outstanding blocker before any new production promotion

---

## 5. Security Findings & Remediation Requirements

| Finding ID | Finding | Severity | Remediation | Status |
|---|---|---|---|---|
| SEC-VW-001 | Live Supabase runtime not re-verified since merge | HIGH | Re-verify Supabase authorization boundaries used by v6 active code | OPEN |
| SEC-VW-002 | No confirmation that service credentials are absent from browser bundle | HIGH | Audit build output; confirm no service key in client bundle | OPEN |
| SEC-VW-003 | Server/edge function authentication not independently certified | HIGH | Authenticate all server/edge functions; document auth mechanism | OPEN |
| SEC-VW-004 | OAuth state, replay, and redirect handling not verified | MEDIUM | Test OAuth flows; confirm state parameter; test replay prevention | OPEN |
| SEC-VW-005 | RLS/policy gaps for Supabase-backed read models unresolved | HIGH | Audit all RLS policies; verify row-level isolation per tenant/workspace | OPEN |
| SEC-VW-006 | Historically exposed credentials (if any) not confirmed rotated | CRITICAL | Run repository secret scan; rotate any found credentials immediately | OPEN |
| SEC-VW-007 | Repository secret scanning not confirmed complete | HIGH | Run automated secret scan; document results | OPEN |
| SEC-VW-008 | Tenant/workspace isolation not tested | HIGH | Test cross-tenant data isolation; document test evidence | OPEN |
| SEC-VW-009 | v5.x HisMajesty code contains Firebase security patterns that may persist in references | MEDIUM | Audit any Firebase/Firestore code still present in v6; replace or remove | OPEN |
| SEC-VW-010 | QC certification not recorded for current v6 production claim | HIGH | Independent QC certification required before next production promotion | OPEN |

**Security Gate Status: BLOCKED — all HIGH and CRITICAL findings must be resolved before next production promotion.**

---

## 6. Formal Decision Record

| Decision | Authority | Date | Rationale |
|---|---|---|---|
| Accept VW-V6-MAIN as canonical implementation | The Architect | 2026-08-19 | v6 is the most complete and merged implementation; regression to earlier versions would lose n8n/Supabase work |
| Do NOT promote v4.x or v5.x to canonical | The Architect | 2026-08-19 | Both are superseded by v6; preserve as provenance only |
| Mandate security refresh before next production claim | The Architect | 2026-08-19 | SEC-VW-001 through SEC-VW-010 must be resolved; QC certification required |
| Dream-Weaver classified as F4 historical naming artifact | The Architect | 2026-08-19 | No distinct active code; not a separate governed system |

---

## 7. Version Compatibility & Deprecation Schedule

| Version | Current Status | Deprecation Trigger | Timeline | Replacement |
|---|---|---|---|---|
| VW-DREAM-WEAVER-HISTORICAL | F4 — preserved as provenance | Already deprecated | N/A | VW-V6-MAIN |
| VW-V4X | F3 — historical | Immediately — superseded by v6 | Archive; do not reference in new work | VW-V6-MAIN |
| VW-V5X | F2 — historical | Immediately — superseded by v6 | Archive; do not reference in new work | VW-V6-MAIN |
| VW-V6-MAIN | F1 — active implementation | On security refresh completion + QC cert | N/A — becomes F0 after cert | — |
| VW-DRIVE-SETUP | F2 — informational | Immediately if stale credentials present | Audit then archive or update | v6 deployment runbook |

---

## 8. Next Actions

| Action | Priority | Owner | Status |
|---|---|---|---|
| Complete all 10 security remediation items (SEC-VW-001 – SEC-VW-010) | CRITICAL | Engineering / Security | OPEN |
| Re-verify live Supabase runtime against v6 merged code | CRITICAL | Engineering | OPEN |
| Run automated repository secret scan on Master-dashboard- | CRITICAL | Engineering | OPEN |
| Produce independent QC certification record | HIGH | Quality Control | BLOCKED on security findings |
| Update VISIONWEAVER-IMPLEMENTATION-RECONCILIATION.md with v6 live-verification results | HIGH | The Architect | BLOCKED on re-verification |
| Archive v4.x and v5.x HisMajesty branches with clear deprecation labels | MEDIUM | Engineering | OPEN |
| Build VisionWeaver canonical 19-section specification | HIGH | The Architect | OPEN — pending re-verification |

---

## 9. Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial version lineage and security remediation record |
