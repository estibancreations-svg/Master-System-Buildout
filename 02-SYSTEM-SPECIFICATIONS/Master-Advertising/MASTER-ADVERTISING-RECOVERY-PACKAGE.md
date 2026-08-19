# Master Advertising Platform — Recovery Package

**System ID:** `SYS-ADS-001`  
**Record ID:** `MASTER-ADS-RECOVERY-001`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001

---

## 1. Purpose

Recover and classify all Master Advertising Platform assets from HisMajesty repositories and Google Drive. Document integration points with VisionWeaver, CEO Dashboard, and marketing tools. Create the system package and schema. Establish activation/go-live criteria.

---

## 2. Recovered Asset Inventory

| Asset ID | Repository / Source | Evidence Type | F-Classification | Notes |
|---|---|---|---|---|
| ADS-DRIVE-PROMPT-1 | Drive — `Master Advertising System Prompt.docx` | Document — system prompt / specification | F1 | Primary recovered specification; defines advertising system purpose, capabilities, and AI prompt design |
| ADS-DRIVE-PROMPT-2 | Drive — Prompt 2 (advertising) | Document — extended prompt | F1 | Extended or variant prompt; may represent v2 or specialization |
| ADS-DRIVE-DEPLOY-LOGS | Drive — deployment logs | Document — deployment evidence | F2 | Historical deployment records; not confirmed active |
| ADS-THUMBNAIL-GEN | `HisMajesty0225/Thumbnail-Generator` | Repository — related implementation | F2 | Thumbnail generation capability; possible component or linked system |
| ADS-VIRALTUBE | `HisMajesty0225/ViralTube-Architect` | Repository — related implementation | F2 | YouTube / viral content architecture; possible component or linked system |
| ADS-GITHUB-UNRESOLVED | `HisMajesty0225/Master-Advertising-System` (name reported) | Repository — unresolved | F5 | Repository name reported but not confirmed accessible; status unknown |

---

## 3. Asset Classification Rationale

| Asset | Classification | Rationale |
|---|---|---|
| ADS-DRIVE-PROMPT-1 | F1 | Drive-verified; clear specification intent; governs advertising AI behavior |
| ADS-DRIVE-PROMPT-2 | F1 | Drive-verified; companion or variant; provenance confirmed |
| ADS-DRIVE-DEPLOY-LOGS | F2 | Evidence of historical deployment; not confirmed current |
| ADS-THUMBNAIL-GEN | F2 | Active repository code; Thumbnail Generator is a distinct capability; identity relationship to Master Advertising is unresolved (see §5) |
| ADS-VIRALTUBE | F2 | Active repository code; ViralTube Architect is a distinct capability; identity relationship unresolved (see §5) |
| ADS-GITHUB-UNRESOLVED | F5 | Repository name supplied but not verified accessible; requires live resolution |

---

## 4. Integration Points

| Integration | System | Direction | Notes |
|---|---|---|---|
| INT-ADS-VISION-001 | VisionWeaver (SYS-VISION-001) | Bidirectional | VisionWeaver provides media/vision processing pipeline for advertising content; Advertising Platform submits creative briefs and receives generated assets |
| INT-ADS-CEO-001 | CEO Dashboard (SYS-CEO-001) | Outbound | Advertising performance metrics and campaign status surface in CEO Dashboard; campaign approvals routed through CEO Dashboard |
| INT-ADS-CMGIO-001 | CMGIO | Bidirectional | Campaign management, organization, and intelligence orchestration; CMGIO handles multi-channel publishing |
| INT-ADS-YOUTUBE-001 | YouTube / Social Publishing | Outbound | ViralTube Architect component handles YouTube publishing; integration with YouTube API |
| INT-ADS-THUMBNAIL-001 | Thumbnail Generator | Internal component | Generates thumbnail assets for published content |
| INT-ADS-IMAGE-001 | Image/Audio/Video generation providers | Outbound | Provider calls for creative asset generation (via VisionWeaver pipeline) |
| INT-ADS-CHARACTER-001 | Character/content tools | Outbound | Character-based content generation for advertising campaigns |

---

## 5. Identity Boundary Ruling

| Component | Ruling | Authority |
|---|---|---|
| Thumbnail-Generator (`HisMajesty0225/Thumbnail-Generator`) | **Component of Master Advertising Platform** — not a separate governed system unless evidence of independent governance is discovered | The Architect, 2026-08-19 |
| ViralTube-Architect (`HisMajesty0225/ViralTube-Architect`) | **Component of Master Advertising Platform** (YouTube/viral publishing specialization) — not a separate governed system unless evidence of independent governance is discovered | The Architect, 2026-08-19 |
| `HisMajesty0225/Master-Advertising-System` | **Unresolved — F5** — must be located and verified before any identity determination; if found, evaluate whether it is the canonical implementation or a historical variant | The Architect, 2026-08-19 |

Identity rule applied: A shared repository or related capability does not merge system identity without evidence of separate governed status. These components are provisionally classified as internal to SYS-ADS-001 until evidence mandates separation.

---

## 6. System Package Schema (19-Section Outline)

The Master Advertising Platform requires a full 19-section specification under MSB-SCHEMA-001. The following is the shell outline; each section must be completed as implementation evidence is assembled.

1. **Executive Definition** — SYS-ADS-001; Marketing & Media Division; status ACTIVE / SPECIFICATION RECOVERY IN PROGRESS
2. **Mission** — Provide enterprise-level advertising intelligence, creative generation, and multi-channel publishing for Estiban Creations
3. **Functional Requirements** — Campaign management; AI creative brief submission; asset generation pipeline; thumbnail/visual production; multi-channel publishing; performance tracking; compliance and brand governance
4. **System View** — Boundary between CEO Dashboard (approvals), VisionWeaver (asset generation), CMGIO (publishing), and external ad platforms
5. **Internal Departments** — Campaign Intelligence; Creative Production; Publishing Engine; Performance Analytics; Brand Governance
6. **AI Agent Structure** — Campaign Strategist; Creative Brief Agent; Asset Generator; Publisher Agent; Analytics Agent; Brand Compliance Checker
7. **Data Model** — Campaign, CreativeBrief, Asset, PublishEvent, PerformanceMetric, BrandRule
8. **Database Specification** — Supabase (PostgreSQL); tables for campaigns, assets, publish_events, performance_metrics
9. **UI Specification** — Campaign dashboard; brief builder; asset library; publish scheduler; performance view
10. **API Specification** — Campaign CRUD; brief submission; asset retrieval; publish trigger; metrics query
11. **Automations** — n8n workflows for brief → generation → publish → track pipeline
12. **Memory Architecture** — Campaign history; asset library; brand rules; performance data
13. **Security** — JWT auth; no service keys in browser; RLS per organization; Vault for provider credentials
14. **Integration Map** — VisionWeaver, CEO Dashboard, CMGIO, YouTube API, image/video providers
15. **Build Roadmap** — P1: locate canonical GitHub source; P2: 19-section spec; P3: data model; P4: pipeline; P5: publish integration; P6: QC
16. **Testing & QC** — Campaign flow integration tests; asset pipeline tests; publish validation; brand compliance tests
17. **Deployment** — Vercel/cloud; Supabase backend; n8n workflow runner
18. **Future Expansion** — Programmatic ad buying integration; A/B testing engine; cross-platform analytics aggregation
19. **Change Log** — v1.0 2026-08-19 initial recovery package

---

## 7. Activation / Go-Live Criteria

| Criterion | Required | Status |
|---|---|---|
| ADS-GITHUB-UNRESOLVED resolved (repository found or ruled not to exist) | YES | OPEN |
| Canonical 19-section specification complete | YES | OPEN |
| Drive Prompt 1 and 2 reconciled into canonical system spec | YES | OPEN |
| Thumbnail-Generator and ViralTube-Architect integrated or scoped as components | YES | OPEN |
| VisionWeaver integration tested (creative brief → asset generation round-trip) | YES | BLOCKED on VW security gate |
| CEO Dashboard integration for campaign approvals tested | YES | OPEN |
| Security review: no credentials in browser; Vault-backed provider keys | YES | OPEN |
| Independent QC certification | YES | OPEN |
| CEO / Architect sign-off | YES | OPEN |

---

## 8. Next Actions

| Action | Priority | Owner | Status |
|---|---|---|---|
| Locate `HisMajesty0225/Master-Advertising-System` repository and classify | CRITICAL | The Architect | OPEN |
| Extract specification from Drive Prompt 1 and 2 into canonical 19-section spec | HIGH | The Architect | OPEN |
| Document Thumbnail-Generator and ViralTube-Architect as component specs | HIGH | Engineering | OPEN |
| Design campaign data model and Supabase schema | MEDIUM | Engineering | BLOCKED on 19-section spec |
| Define n8n creative brief → generate → publish workflow | MEDIUM | Engineering | BLOCKED on 19-section spec |

---

## 9. Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial recovery package; asset classification; integration map; identity ruling; activation criteria |
