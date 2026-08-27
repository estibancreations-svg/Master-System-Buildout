# T.H.E.L.M.A. Upgrade & Compatibility Matrix

**System ID:** `SYS-THELMA-001`  
**Record ID:** `THELMA-UCM-001`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001

---

## Purpose

Define the compatibility rules, upgrade paths, and deprecation schedule for all T.H.E.L.M.A. versions, modules, and integration contracts. This matrix governs how future T.H.E.L.M.A. development may build on, replace, or retire prior versions without breaking live enterprise missions.

---

## Version Compatibility Table

| From Version | To Version | Compatible? | Upgrade Path | Breaking Changes | Notes |
|---|---|---|---|---|---|
| THELMA-V0 (Drive Directives) | THELMA-SPEC-2026-08-11 | ✅ Conceptually compatible | Intent preserved; no code migration needed | None — V0 is specification only | V0 preserved as provenance |
| THELMA-CORE-V1 (HisMajesty) | THELMA-CANONICAL-SPEC-001 | ⚠️ Partial | Code must be reconciled against 19-section spec; gaps documented | Module naming; Air Gap not implemented in CORE-V1 | Build blockers must be resolved first |
| THELMA-MODULES-V1 | THELMA-CANONICAL-SPEC-001 | ⚠️ Partial | Modules must map to canonical section §5; unrecognized modules classified | Module scope may not align with §5 modules | Evaluate each module against registry |
| THELMA-POST-HACKATHON | THELMA-CANONICAL-SPEC-001 | ❌ Not production-compatible | Capabilities require QC review before promotion; F3 → F2 gate required | Likely breaking security/governance assumptions | Evaluate only for novel capability patterns |
| THELMA-OPS-COMMAND | THELMA-CANONICAL-SPEC-001 | ⚠️ Component only | Treat as Mission Router / Operations Command module candidate | Not a full THELMA; integration contract required | May be absorbed as §5 module |
| Any future THELMA-V2+ | THELMA-CANONICAL-SPEC-001 | ✅ if following schema | Increment version; update change log §19; preserve backward-compatible API | Breaking API changes require major version bump | Use semantic versioning |

---

## Module-Level Compatibility Rules

| Module | Current Status | Backward Compatibility Policy |
|---|---|---|
| Mission Router | Specified; not production-deployed | All classification changes require runbook version increment |
| Capability Resolver | Specified; not production-deployed | Agent capability contract changes require registry update |
| Mission Ledger | Specified; not production-deployed | Schema migrations append-only; no destructive column removal |
| Air Gap Handoff Controller | Specified; not in CORE-V1 | New packet schema versions must be backward-readable by v1 consumers |
| Quality Gate Controller | Specified; not production-deployed | Outcome enum (PASS/FAIL/NEEDS WORK/BLOCKED/ESCALATE) is stable; additions require change log entry |
| Resource & Cost Controller | Specified; not production-deployed | Cost event schema is append-only |
| Sentinel Interface | Specified; not production-deployed | Alert types may be extended; never removed without deprecation period |
| Ecosystem Learning Interface | Specified; active (governed) | Advisement schema may be extended; core fields are locked |
| Executive Reporting | Specified; not production-deployed | Report format may evolve; structured fields are stable |

---

## Integration Contract Versioning

| Integration | Current Contract Version | Backward Compatible? | Notes |
|---|---|---|---|
| CEO Dashboard (INT-THELMA-CEO-001) | v1 | Yes — until CEO Dashboard v2 | Versioned API; breaking changes require joint migration |
| n8n dispatch (INT-THELMA-N8N-001) | v1 | Yes | Workflow IDs must be stable; payload schema versioned |
| Agent Capability Registry (INT-THELMA-ACR-001) | v1 | Yes | Registry schema is append-only |
| Supabase (INT-THELMA-SUPA-001) | v1 | Yes — migrations only | No destructive schema changes without migration |

---

## Deprecation Schedule

| Component | Deprecation Trigger | Deprecation Period | Replacement |
|---|---|---|---|
| THELMA-CORE-V1 (as canonical) | Canonical spec P4 build complete | 90 days | THELMA-CANONICAL-19-SECTION-SPEC v1.0 |
| THELMA-DRIVE-ARCHITECTURE (12-module) | 19-section spec alignment complete | Already superseded — preserved as provenance only | THELMA-CANONICAL-19-SECTION-SPEC §5 |
| THELMA-POST-HACKATHON | Any novel capability promoted | On promotion — original archived | Promoted capability enters canonical spec |
| Any API v1 endpoint | Breaking change approved | 60-day deprecation with notice | v2 endpoint; v1 forwarded for 60 days |

---

## Future Version Requirements

All future T.H.E.L.M.A. versions must:

1. Reference MSB-SCHEMA-001 as the controlling schema
2. Maintain or extend (never reduce) the 11 functional requirements in §3
3. Preserve immutable audit log contracts (Mission Ledger, Quality Gate, Cost Ledger)
4. Maintain Air Gap — no version may introduce direct uncontrolled agent-to-agent memory transfer
5. Preserve CEO reserved decision list — no version may auto-resolve a reserved decision
6. Document all breaking changes in §19 (Change Log) with authority signature
7. Pass independent QC certification before production deployment

---

## Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial upgrade and compatibility matrix |
