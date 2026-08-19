# Ecosystem Discovery & Learning Engine — Implementation Specification

**System ID:** `SYS-EDLS-001`  
**Record ID:** `EDLS-IMPL-001`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001  
**Canonical Path:** `02-SYSTEM-SPECIFICATIONS/Ecosystem-Discovery-Learning-Engine/EDLS-IMPLEMENTATION-SPEC.md`

---

## 1. Purpose

This document specifies the implementation requirements for the Ecosystem Discovery & Learning Engine (EDLS). It complements the discovery design in `README.md` with concrete implementation specs: upstream monitoring automation, provenance tracking, SOURCE→DECISION→ESTIBAN-VERSION chain documentation, capability comparison matrix, and feed/alert mechanisms.

---

## 2. Upstream Monitoring Automation

### 2.1 Monitored Sources

All active entries in `00-CENTRAL-HUB/Registries/EXTERNAL-CAPABILITY-SOURCES.json` are subject to automated upstream monitoring. The initial seed source is `msitarzewski/agency-agents`.

### 2.2 Monitor Triggers

| Trigger Type | Check Frequency | Action |
|---|---|---|
| New release / tag | Daily | Create `DISC-{date}-{repo}-RELEASE.md` advisement draft |
| New security advisory | On detection (daily scan) | Escalate to HIGH priority; notify T.H.E.L.M.A. Sentinel Interface |
| Breaking change (detected in changelog / release notes) | Daily | Flag as BREAKING; link to affected Estiban systems |
| Architecture revision (major commit to key files) | Weekly | Review against capability comparison matrix |
| License change | Weekly | Flag for immediate legal review |
| Repository archival / deprecation | Weekly | Mark source status DEPRECATED in registry; assess impact |
| New major version | Daily | Generate comparison advisement |

### 2.3 Monitoring Implementation

```yaml
# Monitoring job definition (n8n workflow: EDLS-MONITOR-UPSTREAM)
schedule: "0 6 * * *"  # Daily at 06:00 UTC
steps:
  - fetch_github_releases: { source_registry: EXTERNAL-CAPABILITY-SOURCES.json }
  - fetch_security_advisories: { source_registry: EXTERNAL-CAPABILITY-SOURCES.json }
  - compare_against_last_known_state: { state_table: edls_upstream_state }
  - generate_advisement_draft_if_changed: { output_path: "00-CENTRAL-HUB/INBOX/" }
  - route_to_thelma_if_security_or_breaking: { escalation_threshold: [SECURITY, BREAKING] }
```

---

## 3. Provenance Tracking

### 3.1 Provenance Chain Contract

Every external capability import must produce a provenance chain record:

```markdown
## Provenance Chain: {CAPABILITY_ID}

### SOURCE
- Repository: {owner/repo}
- URL: {url}
- Version/Commit: {tag or sha}
- License: {license}
- Retrieved: {date}
- Evidence file: {path in this repo}

### DECISION
- Date: {date}
- Authority: {The Architect | T.H.E.L.M.A. | C-Suite}
- Disposition: ADOPT | ADAPT | REFERENCE | REJECT | FUTURE
- Decision record: {path to decision document}
- Security review: {PASS | PENDING | WAIVED with justification}
- QC review: {PASS | PENDING | WAIVED with justification}

### ESTIBAN VERSION
- Component/System: {SYS-XXX-001}
- Adapted capability: {description of what was taken and how adapted}
- Implementation path: {file or spec path}
- Adaptation notes: {how it differs from source}
- Change log entry: {reference to change log}
```

### 3.2 Provenance Registry

All provenance chains are registered in `00-CENTRAL-HUB/Registries/EXTERNAL-CAPABILITY-SOURCES.json` with status tracking.

Existing entry example:
```json
{
  "source_id": "ECS-001",
  "repository": "msitarzewski/agency-agents",
  "disposition": "ADAPT",
  "influenced_systems": ["SYS-THELMA-001"],
  "provenance_chain": "02-SYSTEM-SPECIFICATIONS/T.H.E.L.M.A./README.md#provenance-note"
}
```

---

## 4. SOURCE → DECISION → ESTIBAN VERSION Chain Documentation

### 4.1 Chain Index

Maintain `00-CENTRAL-HUB/Registries/PROVENANCE-CHAIN-INDEX.md` as the canonical index of all completed chains.

| Chain ID | Source | Decision | Estiban Component | Date | Status |
|---|---|---|---|---|---|
| CHAIN-001 | msitarzewski/agency-agents | ADAPT — 2026-08-11 | SYS-THELMA-001 mission execution patterns | 2026-08-11 | COMPLETE |

### 4.2 Historical Backfill Protocol

Existing ideas from historical chats, Drive files, and Memory Gems that were imported from external sources must be backfilled:

1. Identify external-sourced ideas from conversation/Memory Gem review
2. Create provenance chain record with best-available date and source
3. Mark as `RECONSTRUCTED_PROVENANCE` if original source cannot be precisely verified
4. Register in provenance chain index
5. Checkpoint completion in work tracker

---

## 5. Capability Comparison Matrix

Maintained at `00-CENTRAL-HUB/Registries/CAPABILITY-COMPARISON-MATRIX.md`:

| Capability Domain | Estiban Current Approach | External Best Practice Found | Source | Gap? | Disposition | Notes |
|---|---|---|---|---|---|---|
| Multi-agent orchestration | T.H.E.L.M.A. mission router + dynamic team assembly | NEXUS orchestration doctrine (agency-agents) | ECS-001 | PARTIAL — NEXUS patterns informed THELMA expansion | ADAPTED | Provenance: CHAIN-001 |
| Machine-readable runbooks | Defined in MSB-SCHEMA-001 runbook section | Structured runbook format (agency-agents) | ECS-001 | PARTIAL | ADAPTED | Runbook Registry created |
| Structured handoffs | Air Gap Handoff Controller / EIP model | Enterprise Information Packet pattern (agency-agents) | ECS-001 | MINIMAL | ADAPTED | Air Gap pattern predates agency-agents discovery |
| Evidence-first quality gates | Quality Control Agency | Reality Checker pattern (agency-agents) | ECS-001 | MINIMAL | REFERENCE | QC Agency already governed independently |
| Autonomous optimization | Post-mission learning | Autonomous optimization (agency-agents) | ECS-001 | GAP — not yet implemented | FUTURE | P9 in THELMA roadmap |
| Publishing/media roles | Publishing Studio runbook (PUB-001) | Publishing/media roles (agency-agents) | ECS-001 | PARTIAL | ADAPTED | PUB-001 informed by discovery |

---

## 6. Feed / Alert Mechanism

### 6.1 Alert Types

| Alert Type | Trigger | Destination | Priority |
|---|---|---|---|
| SECURITY_ADVISORY | Upstream security advisory detected | T.H.E.L.M.A. Sentinel Interface + Architect notification | CRITICAL |
| BREAKING_CHANGE | Breaking change in monitored dependency | T.H.E.L.M.A. + affected system owners | HIGH |
| NEW_RELEASE | New major or minor release of monitored source | EDLS advisement draft created | MEDIUM |
| LICENSE_CHANGE | License change in monitored source | Architect notification for legal review | HIGH |
| ARCHITECTURE_REVISION | Significant architectural change in monitored source | EDLS advisement review queue | LOW |
| DEPRECATION | Monitored source archived or deprecated | Architect notification; capability gap assessment | MEDIUM |

### 6.2 Alert Delivery

- **Primary:** n8n workflow posts alert to CEO Dashboard notification queue (INT-EDLS-CEO-001)
- **Secondary:** Committed advisement draft to `00-CENTRAL-HUB/INBOX/ECOSYSTEM-ALERTS/`
- **Escalation:** Security and breaking change alerts additionally sent to T.H.E.L.M.A. Sentinel Interface

### 6.3 Alert Schema

```yaml
alert_id: ALERT-{date}-{seq}
type: SECURITY_ADVISORY | BREAKING_CHANGE | NEW_RELEASE | LICENSE_CHANGE | ARCHITECTURE_REVISION | DEPRECATION
source_id: {ECS-xxx}
repository: owner/repo
detected_on: {ISO 8601 date}
summary: {one-line summary}
evidence_url: {GitHub URL}
affected_estiban_systems: [{SYS-xxx}]
recommended_action: {text}
priority: CRITICAL | HIGH | MEDIUM | LOW
status: NEW | UNDER_REVIEW | DECIDED | CLOSED
decision: {text or null}
decided_by: {authority or null}
decided_on: {date or null}
```

---

## 7. Implementation Roadmap

| Phase | Deliverable | Priority | Status |
|---|---|---|---|
| P1 | Provenance Chain Index (`PROVENANCE-CHAIN-INDEX.md`) | HIGH | OPEN |
| P2 | Capability Comparison Matrix (`CAPABILITY-COMPARISON-MATRIX.md`) | HIGH | OPEN |
| P3 | n8n upstream monitoring workflow (EDLS-MONITOR-UPSTREAM) | HIGH | OPEN |
| P4 | Alert delivery to CEO Dashboard notification queue | MEDIUM | BLOCKED on CEO Dashboard backend integration |
| P5 | Historical backfill — provenance chains for pre-2026-08-11 imports | MEDIUM | OPEN |
| P6 | EDLS advisement review workflow in CEO Dashboard | LOW | DEFERRED |

---

## 8. Governance Boundaries (Reinforced)

The EDLS may automatically:
- Search, collect metadata, compare, classify provisionally, detect changes, draft advisements, create alert records

The EDLS may NOT automatically:
- Replace production agents or code
- Promote external capabilities to production
- Grant permissions or modify governance rules
- Expose secrets or system data to external projects
- Accept new licenses without review by The Architect

---

## 9. Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial implementation specification; monitoring automation; provenance chain; capability matrix; feed/alert mechanism |
