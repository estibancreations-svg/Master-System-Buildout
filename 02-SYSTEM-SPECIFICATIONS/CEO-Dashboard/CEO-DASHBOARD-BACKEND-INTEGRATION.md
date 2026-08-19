# CEO Dashboard — Backend Integration with Master-System-Buildout

**Record ID:** `CEO-BACKEND-INTEGRATION-001`  
**Status:** CANONICAL / ACTIVE  
**Authority:** The Architect  
**Date:** 2026-08-19  
**Schema Reference:** MSB-SCHEMA-001  
**Canonical Path:** `02-SYSTEM-SPECIFICATIONS/CEO-Dashboard/CEO-DASHBOARD-BACKEND-INTEGRATION.md`

---

## 1. Purpose

Define the integration contracts between the CEO Dashboard (`estibancreations-svg/MASTER_CEO_DASHBOARD`) and the Master-System-Buildout system registries. Specify how the CEO Dashboard queries system identity, version lineage, and provider status. Define the system health dashboard for monitoring all linked systems. Document all API contracts between this hub and the dashboard.

---

## 2. Systems Linked to CEO Dashboard

| System ID | System Name | Integration Direction | Data Provided to CEO Dashboard |
|---|---|---|---|
| MSB-HUB-001 | Master Systems Buildout Hub | Inbound | System registry, schema standard, governance rules |
| SYS-DASH-001 | Master Dashboard | Bidirectional | System identity, version, status |
| SYS-VISION-001 | VisionWeaver | Outbound to CEO | Pipeline health, provider status, n8n cron status, security posture |
| SYS-LAND-001 | LandWeaver | Outbound to CEO | Adapter health, database state, property intelligence status |
| SYS-THELMA-001 | T.H.E.L.M.A. | Bidirectional | Mission queue status, escalations, cost events, quality gate outcomes |
| SYS-GRANT-001 | GrantOS | Outbound to CEO | Grant pipeline status, active campaigns, compliance flags |
| SYS-ADS-001 | Master Advertising Platform | Outbound to CEO | Campaign status, asset generation queue, publish events |
| SYS-CLIMATE-001 | ClimateTrack Pro | Outbound to CEO | Environmental data health, government report status, compliance events |
| SYS-EDLS-001 | Ecosystem Discovery & Learning Engine | Outbound to CEO | Ecosystem alerts, pending advisements, decision queue |
| PUB-001 | Publishing & Media Studio | Outbound to CEO | Book catalog status, editorial gate queue, release events |

---

## 3. Data Model — CEO Dashboard System Registry View

The CEO Dashboard requires the following data model to surface system-level intelligence:

### 3.1 System Status Record

```typescript
interface SystemStatusRecord {
  system_id: string;          // e.g. "SYS-VISION-001"
  system_name: string;        // e.g. "VisionWeaver"
  division: string;
  status: 'ACTIVE' | 'DEGRADED' | 'OFFLINE' | 'PENDING' | 'ARCHIVED';
  version: string;            // current canonical version
  version_classification: 'F0' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5';
  last_verified: string;      // ISO 8601 date
  health_score: number;       // 0–100
  open_blockers: number;
  security_findings: number;  // open security findings count
  provider_status: ProviderStatus[];
  next_action: string;
  specification_path: string; // canonical spec file path
}

interface ProviderStatus {
  provider_id: string;        // e.g. "supabase", "n8n", "vercel"
  status: 'CONNECTED' | 'PLACEHOLDER' | 'DEGRADED' | 'OFFLINE';
  last_checked: string;
}
```

### 3.2 Mission Status Record (from T.H.E.L.M.A.)

```typescript
interface MissionStatusRecord {
  mission_id: string;
  type: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  status: 'QUEUED' | 'ACTIVE' | 'QC_REVIEW' | 'ESCALATED' | 'COMPLETE' | 'BLOCKED';
  assigned_to: string;
  created_at: string;
  updated_at: string;
  cost_estimate_usd: number;
  quality_gate_outcome: 'PASS' | 'FAIL' | 'NEEDS_WORK' | 'BLOCKED' | 'ESCALATED' | 'PENDING';
  escalation_reason: string | null;
}
```

### 3.3 Ecosystem Alert Record (from EDLS)

```typescript
interface EcosystemAlert {
  alert_id: string;
  type: 'SECURITY_ADVISORY' | 'BREAKING_CHANGE' | 'NEW_RELEASE' | 'LICENSE_CHANGE' | 'DEPRECATION';
  source: string;
  priority: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  summary: string;
  affected_systems: string[];
  status: 'NEW' | 'UNDER_REVIEW' | 'DECIDED' | 'CLOSED';
  detected_on: string;
  decision: string | null;
}
```

---

## 4. API Contracts — CEO Dashboard → Master-System-Buildout Systems

### 4.1 System Registry Query

| Endpoint | Method | Auth | Response | Notes |
|---|---|---|---|---|
| `/api/systems` | GET | JWT — operator role | `SystemStatusRecord[]` | All registered systems with current health |
| `/api/systems/{system_id}` | GET | JWT — operator role | `SystemStatusRecord` | Single system detail |
| `/api/systems/{system_id}/version-lineage` | GET | JWT — operator role | Version lineage tree (JSON) | Links to version lineage documents |
| `/api/systems/{system_id}/providers` | GET | JWT — operator role | `ProviderStatus[]` | Provider connection status |

### 4.2 T.H.E.L.M.A. Mission Queue

| Endpoint | Method | Auth | Response | Notes |
|---|---|---|---|---|
| `/api/missions` | GET | JWT — executive role | `MissionStatusRecord[]` | Active and recent missions |
| `/api/missions/{mission_id}/escalate` | POST | JWT — CEO role | Confirmation | CEO escalation action |
| `/api/cost-summary` | GET | JWT — executive role | Cost summary (daily/weekly/monthly) | Aggregated from T.H.E.L.M.A. cost events |

### 4.3 Ecosystem Alerts

| Endpoint | Method | Auth | Response | Notes |
|---|---|---|---|---|
| `/api/ecosystem-alerts` | GET | JWT — operator role | `EcosystemAlert[]` | Pending alerts from EDLS |
| `/api/ecosystem-alerts/{alert_id}/decide` | POST | JWT — Architect role | Confirmation | Record decision on alert |

### 4.4 Publishing & Media Studio

| Endpoint | Method | Auth | Response | Notes |
|---|---|---|---|---|
| `/api/publishing/catalog` | GET | JWT — operator role | Book catalog summary | Status of all books and series |
| `/api/publishing/gate-queue` | GET | JWT — Architect role | Editorial gate queue | Pending approvals for chapters/releases |
| `/api/publishing/approve/{item_id}` | POST | JWT — Architect role | Confirmation | Architect approval for gate item |

---

## 5. System Health Dashboard Specification

### 5.1 Dashboard View — All Systems

The CEO Dashboard must include a System Health view with:

| Widget | Data Source | Display |
|---|---|---|
| System status grid | `/api/systems` | Card per system; color-coded by status and health score |
| Open blockers count | `/api/systems` | Count of systems with `open_blockers > 0` |
| Security findings | `/api/systems` | Count of systems with `security_findings > 0`; CRITICAL flagged in red |
| Provider health | `/api/systems/{id}/providers` | Per-system provider connection status |
| Mission queue | `/api/missions` | Active missions; ESCALATED missions surfaced at top |
| Cost summary | `/api/cost-summary` | Daily/weekly spend; overage alerts |
| Ecosystem alerts | `/api/ecosystem-alerts` | CRITICAL and HIGH alerts surfaced prominently |
| Publishing gate queue | `/api/publishing/gate-queue` | Pending Architect approvals |

### 5.2 Refresh / Real-Time

- System status: refresh every 60 seconds
- Mission queue: refresh every 30 seconds
- Ecosystem alerts: push notification on NEW CRITICAL/HIGH alerts (via n8n webhook)
- Cost summary: refresh every 5 minutes
- Publishing gate: refresh every 5 minutes

---

## 6. Implementation Roadmap

| Phase | Deliverable | Priority | Status |
|---|---|---|---|
| P1 | System status data model defined (this document — §3) | HIGH | COMPLETE |
| P2 | `/api/systems` endpoint implemented in CEO Dashboard backend | HIGH | OPEN |
| P3 | T.H.E.L.M.A. mission queue API implemented | HIGH | BLOCKED on THELMA build P4–P5 |
| P4 | Ecosystem alert feed implemented (EDLS → n8n → CEO Dashboard) | MEDIUM | BLOCKED on EDLS P3–P4 |
| P5 | Publishing gate queue and approval workflow implemented | MEDIUM | BLOCKED on PUB-001 P6 |
| P6 | System Health dashboard view implemented in CEO Dashboard UI | MEDIUM | BLOCKED on P2–P5 |
| P7 | Real-time refresh and push notifications | LOW | BLOCKED on P6 |

---

## 7. Security Requirements

- All CEO Dashboard API endpoints require JWT authentication
- No system registry data exposed to unauthenticated requests
- CEO-reserved actions (escalate, decide, approve) require elevated role claim
- T.H.E.L.M.A. cost and mission data requires executive role
- All API calls produce audit events
- Provider credentials (Supabase, n8n) never returned in API responses; status only

---

## 8. Change Log

| Version | Date | Authority | Change |
|---|---|---|---|
| 1.0 | 2026-08-19 | The Architect | Initial CEO Dashboard backend integration spec; data model; API contracts; system health dashboard; implementation roadmap |
