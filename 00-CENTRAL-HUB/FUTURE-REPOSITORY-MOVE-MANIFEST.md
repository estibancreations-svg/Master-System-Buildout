# Future Repository Move Manifest — Ecosystem Learning & Capability Provenance

**Created:** 2026-08-11  
**Current home:** `estibancreations-svg/Master-System-Buildout`  
**Status:** Prepared for future extraction; DO NOT move yet.

## Why This Exists

The 2026-08-11 `agency-agents` review produced a substantial new body of architecture around external capability discovery, provenance, attribution, adaptation, runbooks, publishing/media, and continuous ecosystem learning.

The GitHub connector available during this implementation can create branches/files/commits/PRs/issues but does not expose repository creation, and this runtime does not have the GitHub CLI installed. Therefore the work is being committed safely inside `Master-System-Buildout` now and organized so it can later be extracted into a dedicated repository without losing history or links.

## Proposed Future Repository

Recommended working name:

`Estiban-Ecosystem-Intelligence`

Alternative names:

- `Estiban-Capability-Discovery`
- `Estiban-External-Learning-Lab`
- `Estiban-Architecture-Intelligence`

Recommended purpose:

> A provenance-first research and advisement repository that discovers external capabilities, monitors upstream projects, compares them against Estiban architecture, preserves attribution, produces adoption recommendations, and maintains migration-ready capability packages.

## Material Prepared for Future Move

Primary candidates:

- `00-GOVERNANCE/Agent-Governance/EXTERNAL-CAPABILITY-IMPORT-POLICY.md`
- `00-CENTRAL-HUB/Registries/EXTERNAL-CAPABILITY-SOURCES.json`
- `07-DOCUMENTATION/Checklists/ECOSYSTEM-DISCOVERY-PROVENANCE-AND-ADOPTION-CHECKLIST.md`
- `02-SYSTEM-SPECIFICATIONS/Ecosystem-Discovery-Learning-Engine/README.md`
- `05-AUTOMATION/Integrations/Agency-Agents-Upstream/README.md`
- the 2026-08-11 conversation/continuity record

The following should generally remain canonical in `Master-System-Buildout` even if copied/reference-linked into the future repo:

- `01-ARCHITECTURE/AI-Agent-Architecture.md`
- `01-ARCHITECTURE/Mission-Execution-Architecture.md`
- `02-SYSTEM-SPECIFICATIONS/T.H.E.L.M.A./README.md`
- `02-SYSTEM-SPECIFICATIONS/Publishing-Media-Studio/README.md`
- `00-CENTRAL-HUB/Registries/AGENT-CAPABILITY-REGISTRY.json`
- `00-CENTRAL-HUB/Registries/RUNBOOK-REGISTRY.json`
- operational runbooks that are part of the enterprise OS

## Future Repository Structure

```text
Estiban-Ecosystem-Intelligence/
├── README.md
├── LICENSES/
├── sources/
│   ├── github/
│   ├── standards/
│   ├── research/
│   └── vendors/
├── registries/
│   ├── external-sources.json
│   ├── candidate-capabilities.json
│   └── upstream-watchlist.json
├── assessments/
│   ├── adopt/
│   ├── adapt/
│   ├── reference/
│   ├── duplicate/
│   ├── reject/
│   └── future/
├── crosswalks/
├── advisements/
├── queries/
├── checklists/
├── automation/
├── conversations/
└── migration-packages/
```

## Future Move Procedure

- [ ] Create dedicated repository.
- [ ] Preserve this manifest in both repositories during migration.
- [ ] Copy/extract discovery-specific history without deleting the Master-System source until validated.
- [ ] Retain source URLs, licenses, commit/blob references, and adaptation decisions.
- [ ] Create reciprocal links between repositories.
- [ ] Define which registry is authoritative for each data type.
- [ ] Add CI validation for JSON registries and provenance completeness.
- [ ] Add scheduled upstream-monitoring workflows only after credentials and cost controls are approved.
- [ ] Run full Quality Control reconciliation.
- [ ] Update `00-CENTRAL-HUB/REPOSITORY-MAP.md` and indexes.
- [ ] Archive migration decision and date.

## Do Not Lose During Migration

- source attribution
- upstream paths/SHAs
- historical decisions
- rejected/unsafe patterns
- local adaptation rationale
- license requirements
- links to resulting Estiban-native capabilities
- conversation continuity
- old-note reconciliation backlog

## Current Decision

Keep this architecture operational inside `Master-System-Buildout` until the dedicated repository can be created and the move can be performed as a controlled migration rather than a manual copy.
