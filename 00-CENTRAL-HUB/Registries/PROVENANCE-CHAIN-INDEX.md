# Provenance Chain Index

**Registry ID:** `PROV-CHAIN-INDEX-001`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001  
**Canonical Path:** `00-CENTRAL-HUB/Registries/PROVENANCE-CHAIN-INDEX.md`

---

## Purpose

The canonical index of all completed SOURCE → DECISION → ESTIBAN VERSION provenance chains. Every external capability import must produce a chain record and be registered here.

---

## Chain Registry

| Chain ID | Source | Source URL | License | Retrieved | Decision | Disposition | Estiban Component | Implementation Path | Status |
|---|---|---|---|---|---|---|---|---|---|
| CHAIN-001 | msitarzewski/agency-agents | https://github.com/msitarzewski/agency-agents | MIT | 2026-08-11 | The Architect — 2026-08-11 | ADAPT | SYS-THELMA-001 (mission execution patterns); SYS-EDLS-001 (ecosystem learning spec); PUB-001 (publishing/media roles) | `02-SYSTEM-SPECIFICATIONS/T.H.E.L.M.A./README.md#provenance-note`; `02-SYSTEM-SPECIFICATIONS/Ecosystem-Discovery-Learning-Engine/README.md#14-current-seed-source` | COMPLETE |

---

## Chain Detail: CHAIN-001

### SOURCE
- **Repository:** msitarzewski/agency-agents  
- **URL:** https://github.com/msitarzewski/agency-agents  
- **Version/Commit:** Reviewed 2026-08-11 (main branch at time of review)  
- **License:** MIT  
- **Retrieved:** 2026-08-11  
- **Evidence file:** `00-CENTRAL-HUB/Registries/EXTERNAL-CAPABILITY-SOURCES.json`  
- **Source registry entry:** ECS-001

### DECISION
- **Date:** 2026-08-11  
- **Authority:** The Architect  
- **Disposition:** ADAPT  
- **Decision record:** `02-SYSTEM-SPECIFICATIONS/T.H.E.L.M.A./README.md` (Provenance Note section)  
- **Security review:** WAIVED — specification patterns only; no code executed in production  
- **QC review:** WAIVED — architecture patterns reviewed and adapted; not direct code import

### ESTIBAN VERSION
- **Components affected:**
  - SYS-THELMA-001: NEXUS orchestration doctrine → T.H.E.L.M.A. mission execution; machine-readable runbooks; structured handoffs (Air Gap); evidence-first quality gates; autonomous optimization patterns
  - SYS-EDLS-001: Ecosystem Discovery & Learning Engine — agency-agents served as the seed demonstrating value of external learning
  - PUB-001: Publishing/media roles — patterns adapted for Publishing Studio publishing and media production agents
- **Adaptation notes:** All patterns adapted to fit existing Estiban governance frameworks (CEO authority, Air Gap, Zero Trust, QC Agency independence, cost governance). No agency-agents code was copied directly; architectural ideas were adapted under Estiban's own architecture.
- **Change log:** T.H.E.L.M.A. README v2026-08-11 expansion; THELMA-CANONICAL-19-SECTION-SPEC.md v1.0

---

## Historical Backfill Status

| Backfill Item | Status | Notes |
|---|---|---|
| Pre-2026-08-11 external sources in historical chats | OPEN | Requires conversation/Memory Gem review for source attribution |
| Drive documents — external tool references | OPEN | Review all Drive package documents for external tool citations |
| HisMajesty repositories — upstream dependencies | OPEN | Review npm/gradle/pip dependency files for external tool origins |

---

## Chain Addition Protocol

When a new external capability is imported:
1. Create a chain record file at `00-CENTRAL-HUB/Registries/Provenance-Chains/CHAIN-{id}.md`
2. Add a row to this index
3. Update `EXTERNAL-CAPABILITY-SOURCES.json` with the disposition and chain reference
4. Update the affected system's specification with a provenance note
5. The Architect signs off on all new chain entries

---

## Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial provenance chain index; CHAIN-001 registered |
