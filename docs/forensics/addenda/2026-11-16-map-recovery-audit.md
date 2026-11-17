# Forensic enterprise audit — SYS-ADS-001 Master Advertising Platform (MAP)

**Audit date:** November 16, 2026  
**Repository:** `estibancreations-svg/Master-System-Buildout`  
**Audit branch:** `forensics/map-recovery-audit-2026-11-16`  
**Base main SHA:** `60f4787561dd29671f79bb47687d234fae8eca35`  
**System identity:** `SYS-ADS-001` — preserved as a separate governed identity  
**Registry boundary:** 18 system rows were found in the canonical registry; the approved 18-identity set is unchanged.

## Executive finding

MAP is **defined but not an independently executable or production-certified system**. The current dashboard contains a partial CMGIO marketing control plane, not a MAP workspace. The canonical registry keeps CMGIO (`SYS-CMGIO-001`) and MAP (`SYS-ADS-001`) separate, but dashboard README, connection-registry, and live status metadata still combine them under `CMGIO / MAP`. The current route and navigation provide a CMGIO workspace only; MAP has no launch route.

The live database evidence also shows that social account and post-queue tables are not tenant-bound, OAuth callback state is not tied to the initiating user or organization, and no actual social connections, queued posts, metric snapshots, or attribution events exist. Do not activate provider credentials, posting, ad spend, or autonomous optimization until the security and ownership gates below are corrected.

No system identity was added, removed, or merged. No MAP application code, database migration, credential, provider, or production setting was changed in this audit. This PR records evidence and recovery actions only.

## 1. Canonical identity and route audit

The canonical [System Registry](https://github.com/estibancreations-svg/Master-System-Buildout/blob/60f4787561dd29671f79bb47687d234fae8eca35/00-CENTRAL-HUB/Registries/SYSTEM-REGISTRY.md) lists:
- `SYS-CMGIO-001` — CMGIO, status `PARTIAL`, route `/systems/cmgio-map`.
- `SYS-ADS-001` — Master Advertising Platform, status `RECOVERY_REQUIRED`, no certified dedicated workspace.

The [Separate System Identity and Linkage Rule](https://github.com/estibancreations-svg/Master-System-Buildout/blob/60f4787561dd29671f79bb47687d234fae8eca35/00-CENTRAL-HUB/Directives/SEPARATE-SYSTEM-IDENTITY-AND-LINKAGE-RULE.md) says shared repositories, interfaces, workflows, data sources, and dependencies do not merge system identity.

Current dashboard evidence agrees with the registry in some places:
- [systemsRegistry.tsx](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/src/boards/systemsRegistry.tsx) lists CMGIO and MAP as separate rows; MAP remains `RECOVERY_REQUIRED`.
- [GlobalNavigation.tsx](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/src/components/GlobalNavigation.tsx) lists a separate MAP item, but the MAP item has no `path`.
- [routing.ts](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/src/routing.ts) maps `cmgio-map` to `/systems/cmgio-map`; no MAP route or `MAPWorkspace` was found.
- [GITHUB_ENTERPRISE_RECALIBRATION_MANIFEST](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/docs/verification/GITHUB_ENTERPRISE_RECALIBRATION_MANIFEST_2026-08-27.json) records `SYS-ADS-001` as `RECOVERY_REQUIRED` with `launch_route: null`.

The current code does **not** establish a dedicated MAP route, component, schema, experiment executor, ad-account connector, spend ledger, platform publishing adapter, or MAP-specific attribution/audit workflow.

## 2. New finding F-27 — dashboard identity and certification metadata contradict the canonical registry

**Severity: High — governance and status integrity.**

The [dashboard README](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/README.md) describes “CMGIO/MAP” as attached workspaces and labels it `SYS-ADS-001`. The [Connection Registry](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/docs/architecture/CONNECTION-REGISTRY.md) likewise has one row, “CMGIO / MAP | SYS-ADS-001”, and calls its internal workflow “certified / manual pilot”.

That conflicts with the canonical registry and the dashboard's own [systemsRegistry.tsx](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/src/boards/systemsRegistry.tsx), which keep CMGIO and MAP separate and keep MAP in `RECOVERY_REQUIRED`.

Live Supabase inspection of the older **Master Dashboard** project (`yqealeekngxooyoemfba`) found one `ceo_system_status` row for `SYS-CMGIO-001` whose `system_name` is “CMGIO / MAP”. The live row currently reports `health_state=unknown`, `progress_percent=0`, `blocker_count=1`, and `qc_state=not_certified`; its summary still says reusable MAP capabilities are active. There is no separate `SYS-ADS-001` status row in that project. The earlier migration seed [20260814233000_cmgio_map_control_plane.sql](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/supabase/migrations/20260814233000_cmgio_map_control_plane.sql) inserted the combined name with an 86%/healthy/passed seed state; the live state is now different and must take precedence over that seed for current status.

**Required correction:** retain both system IDs; split README and Connection Registry into distinct CMGIO and MAP rows; make CMGIO status refer only to `SYS-CMGIO-001`; create a separate MAP status row only when there is a genuine MAP-owned workspace and evidence. Do not copy a CMGIO certification to MAP.

## 3. New finding F-28 — Vercel-to-Supabase project binding is not proven

**Severity: High — deployment/configuration and runtime-certification blocker.**

Two active Supabase projects are present:
- **MASTER_CEO_DASHBOARD** — project `azoqszhhmmkyqztubgem`, status `ACTIVE_HEALTHY`; 20 public tables and six migrations, all for the separate VisionWeaver Prime workspace. It contains no `marketing_*`, `social_*`, or `grant_*` tables.
- **Master Dashboard** — project `yqealeekngxooyoemfba`, status `ACTIVE_HEALTHY`; contains the CMGIO `marketing_campaigns`, `marketing_assets`, and `marketing_signals` tables plus social-commerce tables.

The Vercel `master-ceo-dashboard` project has `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` configured for Preview and Production. Their values were deliberately not decrypted or exposed during this audit, so the actual URL-to-project binding remains unverified.

Vercel records show a production-target deployment for main SHA `5a5d039fb84107db2ecda56489d8193f13cde785` in READY state, and a previous PR-branch preview for SHA `5ac98cf98e8872c74af95e3c981ed4be574a161d` in READY state with a non-production target. These deployment records do not prove which Supabase project the browser client actually uses or that MAP is connected.

**Required verification:** verify the non-secret project URL fingerprint for each environment, confirm the expected schema exists in that project, then run an authenticated read-only smoke test against the exact deployment. Do not log or copy publishable/secret key values into this report. Until then, mark the Vercel-to-Supabase binding as `unverified`.

## 4. CMGIO control plane is not MAP implementation

The [CmgioWorkspace](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/src/components/CmgioWorkspace.tsx) reads and writes `marketing_campaigns` and `marketing_signals`. Its Publishing tab only changes the campaign authorization/status fields; the UI explicitly says this does not mean a post or ad was published. Its Autopilot panel says external writes remain credential-gated. The component is labeled `SYS-CMGIO-001`, not `SYS-ADS-001`.

The migration [20260814233000_cmgio_map_control_plane.sql](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/supabase/migrations/20260814233000_cmgio_map_control_plane.sql) creates a shared marketing control plane. `marketing_assets.source_system` defaults to `MAP`, but a default label on a shared CMGIO table does not create an independent MAP domain model.

The later [schema reconciliation migration](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/blob/5a5d039fb84107db2ecda56489d8193f13cde785/supabase/migrations/20260825034527_seed_quantico_schema_reconciliation.sql) explicitly says MAP has no first-class production schema, no first-class workflow executor, and no MAP-specific production evidence/cost/performance audit model. It records the CMGIO/MAP collapse as a critical gap.

## 5. Existing finding F-23/F-26 reaffirmed — campaign metrics are not source-backed MAP attribution

Live inspection of the **Master Dashboard** Supabase project found:
- `marketing_campaigns`: 3 seeded rows.
- `marketing_signals`: 3 seeded rows.
- `marketing_assets`: 0 rows.
- `social_connections`: 0 rows.
- `social_post_queue`: 0 rows.
- `social_metric_snapshots`: 0 rows.
- `social_attribution_events`: 0 rows.
- `social_weekly_reports`: 9 rows; every inspected period has `source_rows=0` and zero views, impressions, reach, engagements, clicks, leads, conversions, attributed revenue, boost spend, and ad spend.

The CMGIO UI computes displayed portfolio revenue/ROAS from fields on the seeded campaign rows. Those fields are not backed by social metric snapshots or attribution events in the live project. They must not be represented as verified ad performance or MAP attribution.

The `marketing_campaigns`, `marketing_assets`, and `marketing_signals` tables have organization-scoped policies in the inspected project. This does not cure the separate social-connection and queue policies below.

## 6. New finding F-29 — social OAuth and queue records lack tenant ownership

**Severity: Critical before enabling real accounts, publishing, or multi-tenant operation. No current row exposure was demonstrated.**

Live policy inspection found:
- `public.social_connections` has `auth_all_social_connections` for all authenticated operations with `USING (true)` and `WITH CHECK (true)`.
- `public.social_post_queue` has `auth_all_queue` for all authenticated operations with `USING (true)` and `WITH CHECK (true)`.
- Neither table has an `organization_id` or owner column. Both currently have zero rows.

The active `oauth-callback` Edge Function is version 11 with `verify_jwt=false`. It uses a service-role client, one-time state consumption, expiry checks, and PKCE code-verifier handling, then stores token references through Vault RPCs. However, the inspected `oauth_flow_state` record has no user/organization binding, and the callback upserts a `social_connections` record without owner or organization. The state token/PKCE controls do not establish tenant ownership.

The table's platform check allows nine platforms, but the callback's token-endpoint map covers only TikTok, Pinterest, Threads, and Snapchat. No dedicated social-publish, ad-account, campaign-execution, or ad-analytics Edge Function was found. The live project has no connected social rows or queued posts.

**Required security gate before activation:** add owner/organization binding to OAuth state, connections, and queue rows; bind the callback to the initiating authorized principal; replace global authenticated policies with organization-membership and role policies; add two-tenant negative tests for read/insert/update/delete, callback replay, and cross-owner access. Keep provider activation and external writes disabled until these tests pass.

## 7. Historical MAP source recovery boundary

The August 8 [Cross-Source Evidence Sweep 002](https://github.com/estibancreations-svg/Master-System-Buildout/blob/60f4787561dd29671f79bb47687d234fae8eca35/00-CENTRAL-HUB/INBOX/Fragment-Recovery/08-08-2026_CROSS-SOURCE-EVIDENCE-SWEEP-002_HISMAJESTY-AND-DRIVE.md) records prior Drive retrieval of:
- `Master Advertising System Prompt.docx`
- `Master Advertising System Prompt 2.docx`
- `MASTER ADVERTISING SYSTEM - ARCHITECT DEPLOYMENT LOGS -.docx`

It also records `HisMajesty0225/Thumbnail-Generator` and `HisMajesty0225/ViralTube-Architect` as related historical implementation repositories, while the exact `HisMajesty0225/Master-Advertising-System` repository name was unresolved in that sweep.

The current connected GitHub account returned 404 for the two historical utility repositories. The current 24-repository inventory contains the archive inventory record but not their source trees. The Drive documents were not re-fetched in this run. Therefore this audit does not claim full historical source-code inspection, version-lineage verification, or migration readiness. Do not import or reclassify those utilities until the source content and canonical component relationship are re-verified under the separate-system rule.

## 8. Changed-source, dependency, CI, and deployment review

The November 9–16 recursive tree comparison covered 24 accessible repositories; every tree response was complete (`truncated=false`). Twenty repositories had no path or blob-SHA changes. Four changed:
- `MASTER_CEO_DASHBOARD`: two new documentation files and two changed files, `src/components/SystemControls.tsx` and `src/theme.css`.
- `Master-System-Buildout`: two new Vercel deployment-trigger notes (the inventory file is excluded from its own inventory).
- `VisionWeaver`: six new November 9 review/retirement documents.
- `VisionWeaver-Prime`: two retirement/deployment documents.

The Dashboard's changed `SystemControls.tsx` removes the notepad/Think theme and forces dark mode on startup; logout behavior is unchanged. The matching CSS change is theme-only. Neither changes MAP execution. The VisionWeaver/VisionWeaver-Prime additions contain no MAP handoff implementation in the reviewed source search. `package.json` for the Dashboard contains React/Vite/Supabase dependencies but no social-network or ad-platform SDK.

The Master-System-Buildout [Quality Gate workflow](https://github.com/estibancreations-svg/Master-System-Buildout/blob/60f4787561dd29671f79bb47687d234fae8eca35/.github/workflows/quality-gate.yml) runs on push and pull request. Its [quality-gate script](https://github.com/estibancreations-svg/Master-System-Buildout/blob/60f4787561dd29671f79bb47687d234fae8eca35/scripts/quality_gate.py) checks required files, JSON duplicate keys/syntax, Python and JavaScript syntax, conflict markers, tracked environment files, and selected secret patterns. It is an offline integrity gate, not an application runtime or production certification. The repository's [Quality Gate policy](https://github.com/estibancreations-svg/Master-System-Buildout/blob/60f4787561dd29671f79bb47687d234fae8eca35/docs/QUALITY_GATE.md) says branch-protection enforcement remains pending; this PR will still be held to a passing exact-head gate.

## 9. Evidence maturity — MAP

| State | Assessment | Evidence boundary |
|---|---|---|
| Defined | **Yes** | MAP has a separate `SYS-ADS-001` registry row and historical Drive/recovery specification evidence. |
| Implemented | **No independent MAP implementation** | Shared CMGIO campaign control plane exists; no MAP workspace, schema, experiment/spend executor, or attribution model. |
| Connected | **Not verified** | No actual ad/social account connection or provider write authority was demonstrated. |
| Runtime-verified | **No end-to-end MAP verification** | CMGIO tables and an OAuth callback exist in the older Master Dashboard project; exact Vercel database binding and real provider flow are unverified. |
| Production-certified | **No** | No MAP release evidence, source-backed performance, provider receipts, or security acceptance. |

## 10. Smallest next steps

1. Restore and inspect the original MAP prompt/deployment-log files and historical utility repository sources; preserve provenance and do not bulk-copy code.
2. Correct the dashboard README and Connection Registry so CMGIO and MAP have separate rows and accurate maturity states.
3. Verify the Vercel-to-Supabase project binding without exposing keys; confirm which database the deployed CMGIO workspace actually uses.
4. Keep social account connection and publishing disabled until F-29's tenant-bound OAuth/RLS controls and negative tests pass.
5. Define the MAP-owned schema and contracts for strategy, creative variants, experiment arms, budget/spend approvals, platform accounts, publish receipts, attribution events, QC/provenance, cost, and rollback before implementation.
6. Build a dedicated MAP route/workspace only after the source package and domain ownership are approved. Define explicit handoffs to CMGIO (trend/audience intelligence) and VisionWeaver (approved creative assets); do not count either system as MAP.

**Next forensic domain:** `SYS-AGENCYFLOW-001` AgencyFlow. Continue with the independent CRM, lead/contact, communications, social-account, service-delivery, and agent-family recovery. Keep all 18 governed identities unchanged.

## Audit limitations

This was a deep source/runtime-bounded audit of MAP-related current GitHub source, the two Supabase projects, the listed Edge Functions, RLS policies, Vercel deployment metadata, and the accessible historical recovery records. It was not a full content inspection of all 24 repositories, a full runtime exercise of every service, a provider OAuth smoke test, an external ad-account test, or production certification.


### Governance authority gap — preserve the 18-system registry without inferring approval

The current [Separate System Identity and Linkage Rule](https://github.com/estibancreations-svg/Master-System-Buildout/blob/60f4787561dd29671f79bb47687d234fae8eca35/00-CENTRAL-HUB/Directives/SEPARATE-SYSTEM-IDENTITY-AND-LINKAGE-RULE.md) names only four “Current Architect-Confirmed Separate Systems” (Master Dashboard, VisionWeaver, LandWeaver, and CEO Dashboard); it does not list MAP. The current canonical System Registry nevertheless includes MAP as `SYS-ADS-001` among the 18 governed identities, and the user-directed audit explicitly requires all 18 identities to remain separately governed. This audit preserves `SYS-ADS-001` and makes no identity change, but does not infer a new Architect approval from registry presence alone. Reconcile the directive's confirmation list with the current 18-system registry through the Architect approval process.

The historical [PR #10 reconciliation](https://github.com/estibancreations-svg/Master-System-Buildout/pull/10) describes Thumbnail-Generator and ViralTube-Architect as internal MAP components. The source repositories are not accessible through the current GitHub connection, and the current audit did not re-verify their contents or provenance. Retain that statement as historical classification evidence only until the original code and the Architect-approved component relationship are revalidated.
