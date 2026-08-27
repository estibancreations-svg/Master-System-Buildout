# GrantOS Prototype vs. Enterprise Reconciliation

**System ID:** `SYS-GRANT-001`  
**Record ID:** `GRANTOS-PVE-001`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001

---

## 1. Purpose

Inventory all recovered GrantOS implementations. Compare the Android/Kotlin/Room prototype against the Drive-documented enterprise SaaS target. Document architectural differences and decision criteria. Record the canonical ruling on whether to maintain a single version or separate product lines. Produce the GrantOS roadmap and feature deprecation plan.

---

## 2. Recovered Implementation Inventory

| Implementation ID | Repository / Source | Evidence Type | F-Classification | Notes |
|---|---|---|---|---|
| GRANTOS-ANDROID-PROTOTYPE | `HisMajesty0225/GrantOS-` (Android/Kotlin/Room) | Repository — active code | F2 | Android native app; Room database; Kotlin; grant discovery and tracking features present |
| GRANTOS-DRIVE-V3-PDF | Drive — `GrantOS-v3-Full-System.pdf` | Document — enterprise specification | F1 | Enterprise SaaS architecture; multi-tenant; AI-agent grant matching; web-based; full system design |
| GRANTOS-DRIVE-DASHBOARD-HTML | Drive — dashboard HTML | Document / UI mockup | F1 | Web dashboard mockup; enterprise-style UI |
| GRANTOS-DRIVE-UPGRADE-PLAN | Drive — upgrade plan document | Document — roadmap | F1 | Documents planned upgrade from prototype to enterprise |
| GRANTOS-DRIVE-RESEARCH | Drive — research material | Document — research | F1 | Grant source research, Grants.gov/SAM.gov integration notes |
| GRANTOS-DRIVE-HANDOFF | Drive — handoff material | Document — handoff | F1 | Session/implementation handoff records |

---

## 3. Prototype vs. Enterprise Feature Comparison

| Feature / Capability | Android Prototype (F2) | Enterprise SaaS Target (F1 — Drive v3) |
|---|---|---|
| Platform | Android native (Kotlin/Room) | Web SaaS (multi-tenant) |
| Database | Room (SQLite on-device) | Supabase / PostgreSQL (cloud, multi-tenant) |
| Grant discovery | Grants.gov integration (partial) | Grants.gov + SAM.gov + additional sources; AI-agent matching |
| AI matching | Basic/not documented | AI-agent-driven recommendation and scoring engine |
| Multi-tenancy | Single user (on-device) | Multi-tenant; organization-level isolation |
| User auth | Android auth (local) | Supabase Auth; OAuth; enterprise SSO |
| Document intelligence | Not in prototype | AI-powered grant document parsing and compliance checking |
| Workflow orchestration | None | n8n-backed workflow; approval routing; deadline tracking |
| Compliance layer | Not in prototype | Compliance rules engine; audit trail |
| Reporting | Basic (local) | Executive dashboard; grant pipeline reporting |
| Deployment | Android APK | Vercel/cloud SaaS; environment isolation |
| Security posture | Basic — Android local | Zero Trust; RLS; Vault; secret rotation |
| API surface | Android internal | REST/GraphQL external API; webhook support |

---

## 4. Architectural Differences

| Dimension | Prototype | Enterprise |
|---|---|---|
| Architecture style | Monolithic Android app | Microservices / modular SaaS |
| Data residency | On-device | Cloud (Supabase/PostgreSQL) |
| Scalability | Single user | Horizontal; multi-org |
| AI integration | None / minimal | Core — AI grant matching, document intelligence |
| Governance | None | Full audit, compliance, approval gates |
| Integration | None | Grants.gov, SAM.gov, n8n, Supabase, document intelligence APIs |

---

## 5. Decision Criteria

| Criterion | Weight | Prototype Score | Enterprise Score |
|---|---|---|---|
| Alignment with enterprise mission | HIGH | LOW — single user, no compliance | HIGH — multi-tenant, compliance, AI |
| Existing implementation value | MEDIUM | MEDIUM — working code, grant data model | LOW — specification only, no active code |
| Path to production | HIGH | HIGH EFFORT — rebuild required for multi-tenant | HIGH EFFORT — net-new build from spec |
| Security posture | HIGH | LOW — on-device, no audit | HIGH — Zero Trust, RLS, Vault |
| Grant matching intelligence | HIGH | LOW | HIGH |
| Reusable code/patterns | MEDIUM | MEDIUM — data model, Grants.gov fetch patterns | LOW — spec patterns only |

---

## 6. Canonical Ruling

**Decision: Single canonical version — Enterprise SaaS architecture (GrantOS Enterprise)**  
**Authority:** The Architect  
**Date:** 2026-08-19  

**Rationale:**
1. The Drive v3 enterprise specification documents a materially superior architecture for the enterprise grant operations use case.
2. The Android prototype serves a single-device single-user model inconsistent with organization-scale grant operations.
3. Multi-tenancy, AI-agent grant matching, compliance, and audit requirements cannot be retrofitted onto the Android/Room prototype without a full rebuild — making separate product lines a false distinction.
4. The Android prototype code provides reusable data model patterns (grant entity, application lifecycle, Grants.gov fetch) that will inform the enterprise build and should be reviewed for canonical entity design.
5. Maintaining two separate product lines creates governance, identity, and security complexity without a clear business case for a separate Android-only grant tracker.

**What the Android prototype becomes:**
- Preserved as F2 historical implementation evidence
- Grant entity model and Grants.gov fetch patterns extracted as implementation references
- Not a separate governed product line
- Not deprecated — classified as "prototype/reference" within the single GrantOS Enterprise system

---

## 7. GrantOS Roadmap

| Phase | Deliverable | Priority | Status |
|---|---|---|---|
| P1 | GrantOS canonical 19-section specification (MSB-SCHEMA-001) | HIGH | OPEN |
| P2 | Grant entity data model (informed by Android prototype + Drive v3) | HIGH | OPEN |
| P3 | Supabase schema deploy (grants, applications, organizations, users) | HIGH | OPEN |
| P4 | Grants.gov + SAM.gov API integration (reuse prototype patterns) | HIGH | OPEN |
| P5 | AI grant matching engine (provider integration via n8n) | HIGH | OPEN |
| P6 | Multi-tenant organization onboarding | MEDIUM | OPEN |
| P7 | Document intelligence — grant PDF parsing | MEDIUM | OPEN |
| P8 | Compliance rules engine and audit trail | MEDIUM | OPEN |
| P9 | Executive dashboard and pipeline reporting | MEDIUM | OPEN |
| P10 | QC certification and production deployment | HIGH | BLOCKED on P1–P8 |

---

## 8. Feature Deprecation Plan (Android Prototype)

| Prototype Feature | Disposition | Notes |
|---|---|---|
| Android/Kotlin/Room codebase (as product) | ARCHIVED — not maintained | Preserved as provenance; no new feature work |
| Grant entity model (Room entities) | EXTRACT → reference for enterprise data model | Inform P2 above |
| Grants.gov fetch implementation | EXTRACT → reference for P4 above | Re-implement in enterprise stack |
| On-device storage | DEPRECATED — replaced by Supabase | No migration path; data format reference only |
| Android UI | DEPRECATED — replaced by web SaaS UI | Screenshots preserved for UX reference |

---

## 9. Next Actions

| Action | Priority | Owner | Status |
|---|---|---|---|
| Build GrantOS canonical 19-section specification | HIGH | The Architect | OPEN |
| Extract Android prototype data model for enterprise reference | MEDIUM | Engineering | OPEN |
| Archive Android prototype with deprecation label | MEDIUM | Engineering | OPEN |
| Begin Supabase schema design (P3) | HIGH | Engineering | BLOCKED on P1 |
| Evaluate GrantOS-Drive-Research for Grants.gov/SAM.gov API specifications | HIGH | Engineering | OPEN |

---

## 10. Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial prototype vs. enterprise reconciliation and canonical ruling |
