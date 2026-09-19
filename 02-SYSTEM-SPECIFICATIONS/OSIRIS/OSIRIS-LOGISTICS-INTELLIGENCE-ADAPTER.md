# OSIRIS Logistics Intelligence Adapter

**Capability ID:** CAP-OSIRIS-001  
**Authority:** The Architect / Estibancreations  
**Repository:** `estibancreations-svg/OSIRIS`  
**Classification:** Shared enterprise capability; not an additional system identity  
**State:** IMPLEMENTED_UNVERIFIED  
**Implemented:** 2026-09-19

## 1. Purpose

Provide a controlled, replaceable intelligence boundary between selected OSIRIS feeds and the separate logistics T.H.E.L.M.A. system described by the Architect.

The adapter supplies risk signals for U.S. road, air and maritime operations. It is not a dispatch engine, carrier-tracking system, trading authority or source of operational truth.

## 2. Identity boundary

- `SYS-THELMA-001` remains the enterprise operating-intelligence and orchestration system.
- The separate logistics T.H.E.L.M.A. runtime remains unlocated and must not be silently collapsed into `SYS-THELMA-001`.
- `CAP-OSIRIS-001` is an integration capability. It does not become an 18th system without an explicit Architect decision.
- The `OSIRIS` repository owns integration code, source lineage and operational evidence.

## 3. Implemented runtime

Supabase project `yqealeekngxooyoemfba` now contains:

- `public.osiris_tracked_corridors`
- `public.osiris_world_signals`
- `public.osiris_sync_runs`
- authenticated Edge Function `sync-world-signals`

A Continental United States baseline corridor is installed for multimodal domestic filtering. It is temporary and must be replaced or supplemented with real operating lanes.

## 4. Security controls

- RLS enabled on all OSIRIS tables.
- Explicit restrictive deny policies for `anon` and `authenticated`.
- Direct browser-role table privileges revoked.
- Backend service identity retains controlled access.
- Edge Function requires a valid JWT.
- Unauthenticated invocation verified to return HTTP 401.
- Recon/scanner endpoints are excluded.
- No populated credentials are committed.

## 5. Data flow

1. An authorized backend invokes `sync-world-signals`.
2. The function reads only approved OSIRIS endpoints.
3. Payloads are normalized to the stable `osiris_world_signals` contract.
4. Signals outside active corridor bounds are discarded.
5. The function upserts matching signals and writes a sync-run audit record.
6. The future logistics runtime reads the normalized table rather than OSIRIS directly.
7. T.H.E.L.M.A./EC Fabric may later convert qualifying signals into governed alerts and work items.

## 6. Approved initial feeds

- earthquakes
- wildfires
- weather
- maritime reference/live data when available

## 7. Excluded initial feeds and capabilities

- active reconnaissance or port scanning
- `/api/scanner`
- `/api/osint/*`
- unrestricted CCTV proxying
- unfiltered global news ingestion
- direct client-to-OSIRIS calls
- automated executive decisions without validation

## 8. Verification evidence

Verified on 2026-09-19:

- database migration applied successfully;
- three tables exist;
- RLS is enabled;
- browser roles have no SELECT privilege;
- backend service role has SELECT privilege;
- three restrictive policies exist;
- one U.S. baseline corridor exists;
- Edge Function version 1 is ACTIVE with `verify_jwt=true`;
- unauthenticated POST returns `401 UNAUTHORIZED_NO_AUTH_HEADER`.

Not yet verified:

- authorized live feed execution;
- successful signal ingestion;
- scheduler execution;
- consuming logistics T.H.E.L.M.A. attachment;
- Estibancreations-controlled OSIRIS source deployment;
- upstream data-license approval.

## 9. Completion gates

1. Identify or designate the canonical logistics T.H.E.L.M.A. repository/runtime.
2. Add real corridors and asset relevance rules.
3. Configure a backend invocation identity in Supabase Vault.
4. Run and capture an authorized live sync.
5. Schedule at 30–60 minute cadence only after live sync passes.
6. Pin and audit an Estibancreations-controlled OSIRIS upstream commit.
7. Complete legal/data-terms review.
8. Run QC and White Blood Cell failure/recovery tests.

## 10. Rollback

The integration is additive and isolated under `osiris_*` names. Disable the Edge Function or stop authorized invocations first. Preserve sync evidence before removing tables. Any removal requires a reviewed rollback migration.
