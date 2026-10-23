# Enterprise system map and forensic baseline — October 23, 2026

**Status:** repository-wide structural inventory complete; targeted source and runtime-evidence review completed. This is a forensic baseline, not a certification that every file's behavior or every live service has been exercised.

## Scope and evidence rule

The connected GitHub account exposes **23 private repositories**. I enumerated the tracked `main` tree of each: **1,592 files** and their blob SHA fingerprints are preserved in [the complete file inventory](2026-10-23-repository-file-inventory.json). I read the repositories' README files, the canonical registry, identity rule, key architecture and workstate records, GrantOS source and migration, CRM and Prime handoffs, and current GitHub/Vercel release evidence. File-tree coverage is exhaustive for these 23 `main` branches; content-level and runtime investigation is ongoing. Other accounts, uncommitted branches, complete live Supabase data/policies, provider accounts, Drive assets, authenticated user journeys and physical devices are outside this evidence boundary. The live Supabase project inventory and one active project's migration/table metadata were inspected in the addendum below; production environment binding remains unproven.

A name, route, database table, READY deployment or successful static check does not prove a domain workflow works. The governing [identity rule](../../00-CENTRAL-HUB/Directives/SEPARATE-SYSTEM-IDENTITY-AND-LINKAGE-RULE.md) keeps linked systems separate.

## Control and execution topology

| Layer | Current evidence | Boundary |
| --- | --- | --- |
| Canon and authority | This repository's [system registry](../../00-CENTRAL-HUB/Registries/SYSTEM-REGISTRY.md), identity directive, architecture and recovery records | Defines identities and intended contracts; does not execute them |
| Executive shell | [MASTER_CEO_DASHBOARD](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD) React/Vite routes, C-Suite, dashboards and six attached workspaces | Shared host does not merge the hosted systems |
| Data and runtime | Supabase migrations, RLS policies, Edge Functions and EC Fabric in dashboard repo | Schema/source evidence; live migration, policy and provider verification remains separate |
| Specialist products | VisionWeaver, Design Studio, VisionWeaver Prime, standalone CRM, logistics THELMA, OSIRIS and other repositories below | Separate release trains and identities; attachment must be proven |
| Release evidence | GitHub Quality Gate and Vercel project/deployment records | A READY build is not production certification under [release policy](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/main/docs/operations/RELEASE-PROMOTION-POLICY.md) |

## Approved system registry: 18 identities

The October 14 Architect decision recorded in [dashboard PR #65](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/pull/65) approved T.H.E.L.M.A. CRM Complete as system #18, distinct from AgencyFlow. The dashboard [registry code](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/main/src/boards/systemsRegistry.tsx) includes it. The canonical registry had remained at 17 before this reconciliation. States below describe implementation coverage, not live health.

| # | ID and system | State | Current implementation/evidence boundary |
| ---: | --- | --- | --- |
| 1 | SYS-DASH-001 Master Dashboard | PARTIAL | Dashboard route and module shell; owned workflows require proof |
| 2 | SYS-CEO-001 CEO Command Center | PARTIAL | Executive route and C-Suite contracts; distinct decision receipts incomplete |
| 3 | SYS-THELMA-001 enterprise T.H.E.L.M.A. | PARTIAL | Dashboard control plane and `-THELMA-AI` specification; authenticated intelligence/repair path not certified |
| 4 | SYS-FABRIC-001 EC Integration Fabric | PARTIAL | Queue, retry, audit and functions in dashboard repo; domain handler coverage remains incomplete |
| 5 | SYS-VISION-001 VisionWeaver | PARTIAL | Dashboard runtime plus separate VisionWeaver, Design Studio and Prime surfaces; no single certified combined release |
| 6 | SYS-LAND-001 LandWeaver | PARTIAL | Dashboard property workspace/data foundation; authoritative GIS ingestion unverified |
| 7 | SYS-GRANT-001 GrantOS | PARTIAL | Dashboard workspace and four grant tables; federal discovery/submission connectors unverified |
| 8 | SYS-CMGIO-001 CMGIO | PARTIAL | Shared campaign/control UI; independent metrics and optimization evidence incomplete |
| 9 | SYS-ADS-001 MAP | RECOVERY_REQUIRED | Shared CMGIO/MAP view is not a certified independent MAP workspace |
| 10 | SYS-AGENCYFLOW-001 AgencyFlow | RECOVERY_REQUIRED | CRM-related work elsewhere does not merge this identity |
| 11 | SYS-CLIMATE-001 ClimateTrack Pro | RECOVERY_REQUIRED | Historical evidence; no certified current enterprise workspace |
| 12 | SYS-PUBLISH-001 Publishing & Media Studio | SPECIFICATION_ONLY | Project/book repositories do not establish the enterprise studio runtime |
| 13 | SYS-IAM-001 IAM / Self-Help | NOT_IMPLEMENTED | Supabase Auth foundation is not a self-service product |
| 14 | SYS-TELECOM-001 Telecommunications | NOT_IMPLEMENTED | No certified dedicated product |
| 15 | SYS-ASSESS-001 Assessment Suite | NOT_IMPLEMENTED | No certified scoring and longitudinal workflow |
| 16 | SYS-TRAINING-001 AI Mastery / Training | PARTIAL | Dashboard module material; independent LMS unverified |
| 17 | SYS-QC-001 Quality Control Agency | PARTIAL | GitHub gates and QC doctrine; domain certification incomplete |
| 18 | SYS-THELMACRM-001 T.H.E.L.M.A. CRM Complete | PARTIAL | `standalone-crm` Version 2.0 and a READY Vercel production deployment; tenant, gateway and feature gates remain open |

Resource Intelligence, Ecosystem Intelligence, Analyst Memory, White Blood Cells and OSIRIS are control-plane capabilities/adapters in the [canonical registry](../../00-CENTRAL-HUB/Registries/SYSTEM-REGISTRY.md), not extra identities.

## All 23 accessible repositories

| Repository | Structural role and current boundary |
| --- | --- |
| [Master-System-Buildout](https://github.com/estibancreations-svg/Master-System-Buildout) | Canonical governance, 18-system registry, specifications, provenance and project records |
| [MASTER_CEO_DASHBOARD](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD) | Executable executive shell, attached workspaces, Supabase migrations/functions; source of the GrantOS update feed |
| [Master-dashboard-](https://github.com/estibancreations-svg/Master-dashboard-) | README calls this VisionWeaver Command v6, despite dashboard-like repo name; separate implementation lineage must be reconciled |
| [-HisMajesty0225-CEO-Dashboard](https://github.com/estibancreations-svg/-HisMajesty0225-CEO-Dashboard) | Historical noncanonical shell; README points to current dashboard |
| [-THELMA-AI](https://github.com/estibancreations-svg/-THELMA-AI) | Enterprise THELMA core/governance repository; separate from logistics namesake |
| [reunion-os](https://github.com/estibancreations-svg/reunion-os) | Reunion/event-planning application; demo and production setup paths described |
| [VisionWeaver](https://github.com/estibancreations-svg/VisionWeaver) | Creative production canon and director studio code |
| [content-that-builds](https://github.com/estibancreations-svg/content-that-builds) | Pre-release workbook and content-production IP |
| [This-Is-Your-Life](https://github.com/estibancreations-svg/This-Is-Your-Life) | Anthology series canon and production references |
| [Crossroads-of-Identity](https://github.com/estibancreations-svg/Crossroads-of-Identity) | Seven-book literary canon and adaptation references |
| [Higgsfield-Integration-Layer](https://github.com/estibancreations-svg/Higgsfield-Integration-Layer) | Separate provider API bridge and schemas; runtime attachment needs verification |
| [The-Arc](https://github.com/estibancreations-svg/The-Arc) | Creative franchise canon and production package |
| [52-Books-in-52-Weeks](https://github.com/estibancreations-svg/52-Books-in-52-Weeks) | Publishing program and early book pipeline |
| [OSIRIS](https://github.com/estibancreations-svg/OSIRIS) | Logistics risk adapter, marked implemented but unverified |
| [THELMA-Global-Link-Logistics](https://github.com/estibancreations-svg/THELMA-Global-Link-Logistics) | Separate fleet/dispatch THELMA product; not enterprise THELMA |
| [motive-next-deployment](https://github.com/estibancreations-svg/motive-next-deployment) | Recovered Netlify deployment bundle; README says relationship unresolved |
| [-Five-Stations-Learning-Serie](https://github.com/estibancreations-svg/-Five-Stations-Learning-Serie) | Children's learning series, Avatar State and production records |
| [DESIGN_STUDIO](https://github.com/estibancreations-svg/DESIGN_STUDIO) | Dedicated VisionWeaver character/world/scene authoring app |
| [VisionWeaver-Prime](https://github.com/estibancreations-svg/VisionWeaver-Prime) | Separate 27-page front end and Supabase project; not attached to dashboard |
| [standalone-crm](https://github.com/estibancreations-svg/standalone-crm) | T.H.E.L.M.A. CRM Complete Version 2.0; distinct from AgencyFlow and Leadstack |
| [crm-tour-deck-build-temp](https://github.com/estibancreations-svg/crm-tour-deck-build-temp) | Four-file temporary presentation build repo |
| [Leadstack-Clone](https://github.com/estibancreations-svg/Leadstack-Clone) | Native CRM intelligence/control-layer project; relationship to CRM Complete needs contract evidence |
| [Archive-HisMajesty0225-Shenry60](https://github.com/estibancreations-svg/Archive-HisMajesty0225-Shenry60) | Source archive and external-account inventory, explicitly incomplete as a backup |

## Findings and required verification

| ID | Finding and evidence | Impact / next proof |
| --- | --- | --- |
| F-01 | Dashboard [main Quality Gate run 39341332002](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/actions/runs/39341332002) failed before the GrantOS change. The [GrantOS PR #66](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/pull/66) TypeScript gate passed, but the suite failed three VisionWeaver assertions (continuity UI label, Studio `create` call, long-form duration option). PR #65 also recorded those failures as pre-existing. | **High release risk.** Reconcile tests to the current VisionWeaver contract or restore missing behavior, then rerun all gates; do not label the new GrantOS view released yet. |
| F-02 | Vercel marked the GrantOS PR preview `BLOCKED` with a [team configuration error](https://vercel.com/estibancreations101/master-ceo-dashboard/2W71egh35BQ56eB3DFrL4zDidocS). The prior dashboard production deployment `dpl_Ftpnd1T4HP2M2vewYDvRfJyG9rHy` was READY at `cd58a2b`. | **High preview gate.** Resolve the Vercel team/project collaboration setting and obtain a working preview before any production promotion. |
| F-03 | Canonical [SYSTEM-REGISTRY.md](../../00-CENTRAL-HUB/Registries/SYSTEM-REGISTRY.md) said 17, while [PR #65](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/pull/65) approved an 18th CRM identity and deployed the UI registry. | **Governance drift.** This branch reconciles the canonical count and adds a separate CRM row. Compare every future system promotion against the canonical registry and dashboard in the same change cycle. |
| F-04 | [GrantOS workspace](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/main/src/components/GrantOSWorkspace.tsx) reads/writes `grant_applications` and `grant_requirements`; the [MVP migration](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/main/supabase/migrations/20260814223000_grantos_operational_mvp.sql) also creates `grant_opportunities` and `grant_budget_items`. The [connection registry](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/main/docs/architecture/CONNECTION-REGISTRY.md) defers live discovery and submission. Search found no `api.sam.gov` or `grants.gov` code in the dashboard's indexed default branch. | **Medium coverage gap.** Verify the deployed database and then implement governed official-source ingestion, provenance and submission receipts in a separate work package. The federal [change ledger in PR #66](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/pull/66) is informational, not an ingest connector. |
| F-05 | The GrantOS migration seeds `progress_percent=82`, `health_state=healthy`, `qc_state=passed` for a synthetic MVP, while the canonical registry says PARTIAL. The dashboard [README](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/main/README.md) and older connection registry use broad internal-certification language; [QC-GATE.md](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/main/docs/QC-GATE.md) says release-bound functional proof is required. | **Medium truth-label risk.** Trace which UI consumes the seeded status row, remove or qualify stale health/certification claims, and bind readiness to current evidence. |
| F-06 | [VisionWeaver Prime handoff](https://github.com/estibancreations-svg/VisionWeaver-Prime/blob/main/docs/HANDOFF-2026-10-11.md) says its first two applied Supabase migrations are absent from Git, and two-user RLS plus social sign-in are unverified. | **High reproducibility/security verification gap.** Export and review a schema baseline, test cross-tenant access with two users, then verify providers only after configured. |
| F-07 | [CRM START_HERE](https://github.com/estibancreations-svg/standalone-crm/blob/main/START_HERE.md) leaves the 92-check RLS and 54-check feature suites, health, type generation and owner walk-through open. Vercel reports a READY production deployment on `main`; READY establishes deployment only. | **Medium certification gap.** Run the suites against the intended project, perform two-tenant and gateway authorization tests, record exact commit/deployment evidence, then consider dashboard attachment. |
| F-08 | The [historical archive README](https://github.com/estibancreations-svg/Archive-HisMajesty0225-Shenry60/blob/main/README.md) says 39 external-account repositories have only name/file/commit inventory, not source contents. | **Recovery gap.** Treat those sources as inaccessible/unpreserved until contents and history are captured under authorized access; do not claim a complete backup. |
| F-09 | Two separate THELMA identities and several VisionWeaver surfaces coexist; [logistics README](https://github.com/estibancreations-svg/THELMA-Global-Link-Logistics/blob/main/README.md), [enterprise README](https://github.com/estibancreations-svg/-THELMA-AI/blob/main/README.md), and [Prime handoff](https://github.com/estibancreations-svg/VisionWeaver-Prime/blob/main/docs/HANDOFF-2026-10-11.md) describe distinct roles and incomplete attachment. | **Medium routing risk.** Give each integration an explicit owner, endpoint, auth boundary, data contract, deployment and observed receipt before calling it connected. |


## Live Supabase reconciliation — October 23, 2026

Read-only inspection through the connected Supabase account found three projects: `yqealeekngxooyoemfba` (“Master Dashboard”, **INACTIVE**), `azoqszhhmmkyqztubgem` (“MASTER_CEO_DASHBOARD”, **ACTIVE_HEALTHY**) and `csxtrhwzswluismrayen` (“standalone-crm-test”, **ACTIVE_HEALTHY**). These are project statuses at inspection time, not application health certifications. The older dashboard project could not be queried for migrations while inactive.

The active `azoqszhhmmkyqztubgem` project's applied migration list contains six `prime_*` migrations and a read-only `information_schema.tables` query found **zero public `grant_*` tables**. Its identity as the [Prime handoff's dedicated project](https://github.com/estibancreations-svg/VisionWeaver-Prime/blob/main/docs/HANDOFF-2026-10-11.md) is supported by that handoff and the migration names. Current [Prime repository](https://github.com/estibancreations-svg/VisionWeaver-Prime/tree/main/supabase/migrations) source contains `prime_01`–`prime_03`; the applied `prime_04_workflow_memory_voice_qc`, `prime_05_location_editorial_delivery` and `prime_06_approval_provenance` were not present in its tracked `main` tree at this inspection.

| ID | Finding | Impact / next proof |
| --- | --- | --- |
| F-10 | The active project is Prime-shaped and lacks the dashboard's four source-defined `grant_*` tables. The separate older “Master Dashboard” project is inactive. Vercel has a sensitive `VITE_SUPABASE_URL` setting for production and preview, but its decrypted target was not exposed by the available read-only response. **Production's actual project binding is unconfirmed.** | **High integration uncertainty.** An authorized operator should inspect the production and preview URL's project ref without sharing the key, compare it to the three project IDs, and verify the intended project's GrantOS migration, RLS and a least-privilege read/write smoke test. Do not infer a live GrantOS outage from names alone. |
| F-11 | Six Prime migrations are applied in the active project, while only the first three migration files are currently tracked in Prime `main`. The handoff's earlier complaint about missing `prime_01` and `prime_02` is now stale. | **High schema drift.** Recover exact `prime_04`–`prime_06` definitions and checksums from the authorized deployment/change record, review for secrets and policy changes, commit them in order, then compare a fresh clone's schema with the live project. |

This observation is limited to project metadata and one table-name query. It does not prove which database the deployed dashboard calls or the state of grants data, permissions, users or service endpoints.

## Next forensic pass

1. Unblock the dashboard's three pre-existing VisionWeaver test failures and Vercel preview; validate the GrantOS change against a working preview and keep the main release policy intact.
2. Compare all 18 registry identities against actual routes, migrations, deployed functions, authorization, data ownership and end-to-end receipts. Record each as defined, implemented, connected, runtime-verified or production-certified separately.
3. Resolve the dashboard production/preview Supabase project binding, then inspect the intended GrantOS migrations and RLS and run authenticated two-tenant tests. Reconcile Prime's applied migrations 04–06 and CRM's test versus production project boundaries.
4. Trace one real request through THELMA → Fabric → domain handler → output/receipt → audit, plus failure/recovery; then expand across domain systems.
5. Extend the inventory to approved external accounts and Drive once access and source identity are confirmed. Preserve hash and provenance, not just summaries.

This baseline deliberately does not mark the enterprise or any individual system production-certified.
