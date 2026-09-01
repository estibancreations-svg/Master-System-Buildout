# DEDICATED REPOSITORY REGISTRY

**Status:** ACTIVE_WORKPLAN  
**Hub:** `estibancreations-svg/Master-System-Buildout`  
**Date:** 2026-08-30

This registry tracks dedicated-repository boundaries, provisioning status, and reciprocal linkage contracts.

## Provisioning Matrix

| System ID | System | Target Repository | Repo Provision Status | Baseline Scaffold Status | Migration Status | Blockers |
|---|---|---|---|---|---|---|
| `SYS-THELMA-001` | T.H.E.L.M.A. | `estibancreations-svg/-THELMA-AI` | CREATED_BY_ARCHITECT / ACCESS_GAP | READY IN HUB | BLOCKED_AT_PUSH | Repository exists per Architect, but current integration returns `404 Not Found` when reading/writing repo contents |
| `SYS-GRANT-001` | GrantOS | `estibancreations-svg/GrantOS` | BLOCKED (permission 403) | READY IN HUB | NOT_STARTED | GitHub integration cannot create repos with current token scope |
| `SYS-LAND-001` | LandWeaver | `estibancreations-svg/LandWeaver` | BLOCKED (permission 403) | READY IN HUB | NOT_STARTED | GitHub integration cannot create repos with current token scope |
| `SYS-CLIMATE-001` | ClimateTrack Pro | `estibancreations-svg/ClimateTrack` | BLOCKED (permission 403) | READY IN HUB | NOT_STARTED | GitHub integration cannot create repos with current token scope |
| `QUEUE-OTHER-001` | 08-OTHER-SYSTEMS Candidate Queue | `estibancreations-svg/08-OTHER-SYSTEMS` | BLOCKED (permission 403) | READY IN HUB | NOT_STARTED | Queue repo provisioning blocked pending repo-create permission |

## Canonical Hub Linkage Contracts

All dedicated repositories must link back to these hub authorities:

- `00-CENTRAL-HUB/Registries/SYSTEM-REGISTRY.md`
- `00-CENTRAL-HUB/Directives/SEPARATE-SYSTEM-IDENTITY-AND-LINKAGE-RULE.md`
- `00-CENTRAL-HUB/Registries/FRAGMENT-RECOVERY-REGISTRY.md`
- `00-CENTRAL-HUB/Registries/CAPTURE-LEDGER.md`

## Shared Zero-Trust + Air-Gap Control Pattern

Each dedicated repository must include:

1. explicit trust boundaries;
2. least-privilege integration points;
3. deterministic approval gates;
4. immutable audit trail requirements;
5. prohibition on implicit cross-system identity merge;
6. explicit T.H.E.L.M.A. role as orchestrator/governor rather than identity-collapsing owner.

## Source Reconciliation Rules

- `MASTER_CEO_DASHBOARD` is the canonical executable reference for cross-hosted artifacts.
- Drive and Shared Drive intake remains blocked until folder IDs/roots are provided to the execution runtime.
- Only verified artifacts are promoted into canonical destination slots.

## Required Baseline Seed Pack (per dedicated repo)

- `README.md` (charter + boundary + hub interfaces)
- `ARCHITECTURE.md`
- `INTERFACES.md`
- `SECURITY-BOUNDARY.md`
- `PROVENANCE.md`
- `BUILD-STATUS-TRUTH-MODEL.md`

## Next Actions

1. Grant this integration access to `estibancreations-svg/-THELMA-AI` and retry seed-pack push.
2. Request and provision next repository consecutively (`GrantOS`) per Architect workflow.
3. Push baseline seed pack into each dedicated repository after access is confirmed.
4. Start staged content migration from validated hub and `MASTER_CEO_DASHBOARD` artifacts.
5. Execute 08-OTHER-SYSTEMS classification queue operations with Architect approval gates.
