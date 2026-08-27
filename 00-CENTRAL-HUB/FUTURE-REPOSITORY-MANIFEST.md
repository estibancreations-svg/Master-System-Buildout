# Future Repository Manifest & Migration Readiness

**Record ID:** `FUTURE-REPO-MANIFEST-2026-08-19`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001  
**Canonical Path:** `00-CENTRAL-HUB/FUTURE-REPOSITORY-MANIFEST.md`

---

## 1. Purpose

Finalize the repository creation manifest for the two planned dedicated repositories: the Ecosystem Intelligence repository (from PR #9 manifest) and the Publishing Studio repository. Document creation prerequisites, GitHub API requirements, migration checklist, and hand-off procedure.

---

## 2. Planned Repository 1 — Estiban Ecosystem Intelligence

### 2.1 Repository Specification

| Field | Value |
|---|---|
| Recommended name | `Estiban-Ecosystem-Intelligence` |
| Alternatives | `Estiban-Capability-Discovery`, `Estiban-External-Learning-Lab`, `Estiban-Architecture-Intelligence` |
| Visibility | Private |
| Default branch | `main` |
| Organization | `estibancreations-svg` |
| Purpose | Provenance-first research and advisement repository: discovers external capabilities, monitors upstream projects, compares against Estiban architecture, preserves attribution, produces adoption recommendations |
| Owner | The Architect |
| Division | DIV-008 Technology Division |

### 2.2 Content to Migrate

| Source File in Master-System-Buildout | Destination in New Repository | Notes |
|---|---|---|
| `00-GOVERNANCE/Agent-Governance/EXTERNAL-CAPABILITY-IMPORT-POLICY.md` | `governance/EXTERNAL-CAPABILITY-IMPORT-POLICY.md` | Copy and update canonical path |
| `00-CENTRAL-HUB/Registries/EXTERNAL-CAPABILITY-SOURCES.json` | `registries/EXTERNAL-CAPABILITY-SOURCES.json` | Maintain as live registry |
| `07-DOCUMENTATION/Checklists/ECOSYSTEM-DISCOVERY-PROVENANCE-AND-ADOPTION-CHECKLIST.md` | `checklists/ECOSYSTEM-DISCOVERY-PROVENANCE-AND-ADOPTION-CHECKLIST.md` | Reference in new repo README |
| `02-SYSTEM-SPECIFICATIONS/Ecosystem-Discovery-Learning-Engine/README.md` | `spec/EDLS-DESIGN-SPEC.md` | Discovery design spec |
| `02-SYSTEM-SPECIFICATIONS/Ecosystem-Discovery-Learning-Engine/EDLS-IMPLEMENTATION-SPEC.md` | `spec/EDLS-IMPLEMENTATION-SPEC.md` | Implementation spec |
| `05-AUTOMATION/Integrations/Agency-Agents-Upstream/README.md` | `upstream/agency-agents/README.md` | Upstream monitoring seed |
| Future: Provenance Chain Index | `registries/PROVENANCE-CHAIN-INDEX.md` | New — created in this buildout |
| Future: Capability Comparison Matrix | `registries/CAPABILITY-COMPARISON-MATRIX.md` | New — created in this buildout |

### 2.3 What Stays in Master-System-Buildout

The following must remain canonical in `Master-System-Buildout` even if referenced or copied into the new repo:

- `MSB-SCHEMA-001` — canonical schema stays in `01-ARCHITECTURE/System-Build-Schema/`
- `SYSTEM-REGISTRY.md` — canonical system registry stays in `00-CENTRAL-HUB/Registries/`
- All system specifications — canonical specs stay in `02-SYSTEM-SPECIFICATIONS/`
- Hub continuity records — canonical hub records stay in `00-CENTRAL-HUB/`

### 2.4 Creation Prerequisites

| Prerequisite | Status |
|---|---|
| GitHub repository creation capability (API token with repo:create scope or manual creation) | REQUIRED — connector does not expose repository creation |
| Branch protection rules configured (require PR, require review) | REQUIRED — configure on creation |
| CODEOWNERS file | REQUIRED — set `* @estibancreations-svg` as default owner |
| Initial README | REQUIRED — describe purpose, link to Master-System-Buildout |
| Secret scanning enabled | REQUIRED — enable on creation |
| `.gitignore` | REQUIRED — standard Node/Python/generic |

---

## 3. Planned Repository 2 — Publishing Studio

### 3.1 Repository Specification

| Field | Value |
|---|---|
| Recommended name | `Estiban-Publishing-Studio` |
| Alternatives | `Estiban-Book-Catalog`, `Estiban-Media-Studio` |
| Visibility | Private (may later be partially public for book releases) |
| Default branch | `main` |
| Organization | `estibancreations-svg` |
| Purpose | Multi-book catalog, Series Bible, Canon Registry, chapter management, version releases, transmedia tracking |
| Owner | The Architect |
| Division | Publishing & Media Division |

### 3.2 Content to Migrate

| Source File in Master-System-Buildout | Destination in New Repository | Notes |
|---|---|---|
| `02-SYSTEM-SPECIFICATIONS/Publishing-Media-Studio/README.md` | `docs/PUBLISHING-STUDIO-OVERVIEW.md` | Background reference |
| `02-SYSTEM-SPECIFICATIONS/Publishing-Media-Studio/PUB-001-OPERATIONALIZATION.md` | `docs/PUB-001-OPERATIONALIZATION.md` | Operational spec |
| Future: Catalog directory | `Catalog/` | Full catalog structure per PUB-001 spec §2.1 |
| Future: Series Bible template | `templates/SERIES-BIBLE-TEMPLATE.md` | Created in P2 |
| Future: Canon Registry template | `templates/CANON-REGISTRY-TEMPLATE.md` | Created in P3 |

### 3.3 Creation Prerequisites

| Prerequisite | Status |
|---|---|
| GitHub repository creation capability | REQUIRED |
| Branch protection rules (require PR for main; chapter review branches) | REQUIRED |
| GitHub Actions workflow for chapter update automation (PUB-UPDATE-CHAPTER) | REQUIRED — defined in PUB-001-OPERATIONALIZATION.md §6 |
| GitHub Actions workflow for book release (PUB-RELEASE-BOOK) | REQUIRED |
| CODEOWNERS | REQUIRED |
| Secret scanning enabled | REQUIRED |

---

## 4. GitHub API Requirements

Both repositories require the following GitHub API capabilities at creation time:

| Capability | API / CLI Method | Notes |
|---|---|---|
| Repository creation | `POST /user/repos` or `POST /orgs/{org}/repos` | Requires `repo` scope OAuth token or `gh repo create` |
| Branch protection | `PUT /repos/{owner}/{repo}/branches/{branch}/protection` | Configure after first commit |
| CODEOWNERS | File commit to `.github/CODEOWNERS` | Commit on repository initialization |
| Secret scanning | Repository Settings → Security | Enable during creation or via API |
| GitHub Actions | `.github/workflows/*.yml` committed | Workflows activated on first push |

**Note:** The current GitHub Copilot coding agent connector supports file/commit/PR/issue operations but does not expose repository creation. Repository creation must be performed manually by The Architect or via a GitHub CLI session with `repo:create` scope.

---

## 5. Migration Checklist

### Pre-Migration

- [ ] Repository created with correct name, visibility, and organization
- [ ] Branch protection rules configured on `main`
- [ ] CODEOWNERS file committed
- [ ] Secret scanning enabled
- [ ] Initial README committed

### Content Migration

- [ ] All identified source files copied to destination paths (see §2.2 and §3.2)
- [ ] Canonical paths in Master-System-Buildout updated to reference new repository (do not remove originals — add cross-reference)
- [ ] EXTERNAL-CAPABILITY-SOURCES.json updated with new canonical path
- [ ] `00-CENTRAL-HUB/FUTURE-REPOSITORY-MOVE-MANIFEST.md` updated to status: MIGRATED
- [ ] SYSTEM-REGISTRY.md updated with new repository reference for SYS-EDLS-001 and PUB-001

### Post-Migration Validation

- [ ] All links in Master-System-Buildout that reference migrated content updated
- [ ] New repository README reviewed and accurate
- [ ] GitHub Actions workflows active (for Publishing Studio)
- [ ] No secrets committed (secret scan passed)
- [ ] The Architect has reviewed the final state of both repositories

---

## 6. Hand-off Procedure

1. The Architect creates both repositories manually via GitHub UI or CLI
2. Open a Copilot coding agent session against each new repository
3. Commit initial file structure per migration checklists above
4. Run secret scanning on all committed files
5. Update `SYSTEM-REGISTRY.md` in Master-System-Buildout with new repository paths
6. Close LEAD items in WORK-TRACKER.md for each migrated repository
7. The Architect signs off on migration completion

---

## 7. Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial future repository manifest; migration checklist; hand-off procedure |
