# AgencyFlow recovery audit — November 23, 2026

## Scope and evidence boundary

This pass audits `SYS-AGENCYFLOW-001` as the next independent governed domain. It compares the canonical registry with the current `standalone-crm` and `Leadstack-Clone` main branches and reviews CRM routes, schema/migrations, RLS tests, Edge Functions, auth/provider boundaries, agent-control code, CI placement, deployment claims, backup/recovery evidence and failure modes.

The 18 governed identities remain unchanged. This review distinguishes source-defined, implemented, connected, runtime-verified and production-certified states. Tree and blob-hash comparison does not prove runtime state.

Reference commits:

- `Master-System-Buildout` main: `7204f088526e90f07b023af4a7f72f3509a8d05c`.
- `standalone-crm` main/tree: `2be8547a622531fba60e127c0374dea684837082`.
- `Leadstack-Clone` main/tree: `13c4f44d0da5bbaa458ae67698b257a70de4af21`.
- `MASTER_CEO_DASHBOARD` registry evidence: `5a5d039fb84107db2ecda56489d8193f13cde785`.

## State assessment

| Layer | State | Evidence |
| --- | --- | --- |
| Defined | **Yes, but identity-conflicted** | Registry defines AgencyFlow as CRM, leads, clients, communications, social accounts/posting, services, workflows and operational agents. Standalone CRM and Leadstack define nearly the same capability family under T.H.E.L.M.A. CRM and Leadstack names. |
| Implemented | **Partial to substantial CRM foundation** | Standalone CRM contains agency/workspace routes, contacts, companies, deals, tasks, inbox/mail, marketing, calendar, payments, templates, auth, migrations, Edge Functions and RLS tests. Leadstack implements scoped contacts/companies/deals/tasks operations and an MCP tool surface. |
| Connected | **Partial** | Leadstack has a concrete user-JWT/publishable-key adapter to the standalone CRM. Provider delivery, OAuth-per-app, messaging delivery, social publishing and durable MCP audit remain explicitly incomplete. |
| Runtime-verified | **Historical only** | Repository documents cite October 13/17 Vercel and Supabase test evidence. No November 23 authenticated runtime, database-policy, Edge Function or deployment verification was performed in this pass. |
| Production-certified | **No** | Documentation says the public deployment uses the test Supabase project with mock records; no separate production database or completed restore drill is evidenced. CI templates are not active under `.github/workflows`. |

## Material findings

### F-30 — AgencyFlow capability ownership conflicts with T.H.E.L.M.A. CRM and Leadstack identity

**Severity: Critical — system identity, ownership and recovery integrity.**

The canonical registry keeps `SYS-AGENCYFLOW-001` separate and marks it `RECOVERY_REQUIRED`, with no certified dedicated workspace. Meanwhile:

- [Standalone CRM README](https://github.com/estibancreations-svg/standalone-crm/blob/2be8547a622531fba60e127c0374dea684837082/README.md), blob `5bfba4ff03b559c769f588622cbf6431a67400e7`, calls the product “T.H.E.L.M.A. CRM Complete” and describes agency/client CRM, marketing, communications, social planning, services and approval controls.
- [Standalone CRM build blueprint](https://github.com/estibancreations-svg/standalone-crm/blob/2be8547a622531fba60e127c0374dea684837082/docs/BUILD_BLUEPRINT.md), blob `d85f918899cc7d0aa5a141df7fee48fecdfa7967`, defines the same agency/workspace capability family.
- [Leadstack README](https://github.com/estibancreations-svg/Leadstack-Clone/blob/13c4f44d0da5bbaa458ae67698b257a70de4af21/README.md), blob `70f8e6801dbce0335ab4a3eab307ccd7e97255ba`, defines Leadstack as the CRM intelligence and automation layer above the standalone CRM.
- [Canonical registry](https://github.com/estibancreations-svg/Master-System-Buildout/blob/7204f088526e90f07b023af4a7f72f3509a8d05c/00-CENTRAL-HUB/Registries/SYSTEM-REGISTRY.md) still defines AgencyFlow independently.

This creates three overlapping names for one capability boundary and risks incorrectly counting implementation toward T.H.E.L.M.A. while leaving AgencyFlow perpetually unrecovered. It also obscures which system owns CRM data, agency workflows, operational agents and social/service delivery.

**Next verification/action:** approve one explicit ownership contract. Recommended recovery model: AgencyFlow owns the agency CRM/service-delivery product; Leadstack is its governed command/agent interface; T.H.E.L.M.A. remains the cross-system orchestration and approval authority. Record aliases/migration history without merging the 18 identities. Do not change the registry state from `RECOVERY_REQUIRED` until the ownership decision, canonical route, schema owner and runtime evidence are approved.

### F-31 — CRM and Leadstack implementation is real, but outbound/provider execution is incomplete

**Severity: High — capability and workflow truth.**

Standalone CRM source implements contacts, companies, deals, tasks, mail/inbox records, calendars, marketing planning, invoices/payments, templates, team/agency routes, auth and tenant-scoped database structures. Leadstack has a concrete RLS-preserving adapter for contacts, companies, deals and tasks:

- [Leadstack standalone CRM bridge](https://github.com/estibancreations-svg/Leadstack-Clone/blob/13c4f44d0da5bbaa458ae67698b257a70de4af21/docs/STANDALONE_CRM_BRIDGE.md), blob `cb419e3ffd5bbf72f2c4aaebd421f7e2fb440e03`.
- [Leadstack adapter](https://github.com/estibancreations-svg/Leadstack-Clone/blob/13c4f44d0da5bbaa458ae67698b257a70de4af21/src/adapters/standalone-crm.ts), blob `80d608fc9ce5b5214051aa7d4b8b2ab0cd10b7c5`.
- [Leadstack MCP server](https://github.com/estibancreations-svg/Leadstack-Clone/blob/13c4f44d0da5bbaa458ae67698b257a70de4af21/src/mcp/server.ts), blob `ede536ba7c1b495f1f4e01512b4b2f7e584bfffe`.

However, the standalone CRM blueprint explicitly leaves email/SMS/social delivery workers, OAuth-per-app, T.H.E.L.M.A. executor, website publisher, forms, reviews, workflows and API for a later stage. The integration guide says keys can be stored but CRM data is not sent outward. Leadstack's current MCP surface is internal CRM CRUD only. Its operating policy also says the persistent audit sink is still required before deployed MCP use.

**Next verification/action:** keep provider-facing actions disabled. Define durable audit storage, failure/retry/idempotency contracts and T.H.E.L.M.A. approval handoff before adding messaging, social publishing, payments or external workflows. Add runtime tests that prove a provider request produces a receipt, failure record and safe retry without cross-workspace access.

### F-32 — Release evidence is historical and CI protection is not active on the canonical path

**Severity: High — release integrity.**

The standalone CRM verification report cites October 13/17 Vercel/Supabase evidence and says CI workflow files remain under `ci/github-workflows/`, not `.github/workflows/`. The current tree confirms the templates remain outside the executable GitHub Actions path and contains no lockfile. The report also says the newer v2.1 preview was not merged or production-certified and had no fresh authenticated end-to-end run.

Evidence:

- [Verification report](https://github.com/estibancreations-svg/standalone-crm/blob/2be8547a622531fba60e127c0374dea684837082/docs/VERIFICATION_REPORT.md), blob `4a2d698f571b1b7be4545fbd2e948eb6aafc5f86`.
- [CI template](https://github.com/estibancreations-svg/standalone-crm/blob/2be8547a622531fba60e127c0374dea684837082/ci/github-workflows/ci.yml), blob `214ca50d179e1eed291c6c0248ad30293b653d02`.
- [Live smoke source](https://github.com/estibancreations-svg/standalone-crm/blob/2be8547a622531fba60e127c0374dea684837082/tests/e2e/live-smoke.mjs), blob `034c1fdad8c055848eb115b63bacc22667b25602`.

Source tests are valuable but do not establish current execution. Dependency resolution is not reproducible without a committed lockfile, and database isolation is not enforced on every pull request while the workflow remains inactive.

**Next verification/action:** install the workflow under `.github/workflows`, commit a lockfile, run app build plus migration/RLS suites on the exact candidate SHA, and capture current authenticated runtime evidence. Apply the repository release policy before any production claim.

### F-33 — Public CRM documentation points to test/mock infrastructure; production and recovery remain uncertified

**Severity: Critical before real client data or external provider activation.**

The README names a public Vercel deployment and Supabase project `standalone-crm-test`; it says test data is mock. The production backup/security runbook states that no separate production Supabase project or completed restore-drill evidence was found as of October 17.

Evidence:

- [Production backup/security runbook](https://github.com/estibancreations-svg/standalone-crm/blob/2be8547a622531fba60e127c0374dea684837082/docs/PRODUCTION_BACKUP_SECURITY_RUNBOOK.md), blob `e082f303e8068774ea7f2988a2d0d20d6b45d099`.
- [Integration map](https://github.com/estibancreations-svg/standalone-crm/blob/2be8547a622531fba60e127c0374dea684837082/docs/INTEGRATIONS.md), blob `a7259a4ac9edf352bbeb527ea0bdaeaeb3cabc87`.

The repository includes backup/provisioning scripts and RLS tests, but those artifacts are defined controls, not proof of a current production project, backup execution or successful restore.

**Next verification/action:** keep real client data out of the test project. Establish the approved tenancy model, production project binding, empty production seed state, backup schedule/retention and a documented restore drill. Re-run live RLS/policy and Edge Function checks in the actual target environment before certification.

### F-34 — Leadstack policy test permits external writes while the operating policy requires T.H.E.L.M.A. queueing

**Severity: High — authorization-policy contradiction.**

[Leadstack operating policy](https://github.com/estibancreations-svg/Leadstack-Clone/blob/13c4f44d0da5bbaa458ae67698b257a70de4af21/docs/OPERATING_POLICY.md), blob `bf27a454d34e27523c5824664cdfa95eaf8d9ec5`, says sending messages, publishing posts, connecting apps, charging cards, going live and deleting data always require a T.H.E.L.M.A. approval request. But [the generic authorization policy](https://github.com/estibancreations-svg/Leadstack-Clone/blob/13c4f44d0da5bbaa458ae67698b257a70de4af21/src/core/policy.ts), blob `6d9dfa6bfa013348c678e77b624803db41ce5664`, allows `external` writes for AAL2 callers with a write role. [The policy test](https://github.com/estibancreations-svg/Leadstack-Clone/blob/13c4f44d0da5bbaa458ae67698b257a70de4af21/tests/policy.test.ts), blob `5a6ae01a075a7a96bbb0eab4c38c3bf8e4fd30c2`, explicitly expects that allowance.

No current external MCP tool was found, so this is a latent pre-activation defect rather than proof of an unauthorized external action.

**Next verification/action:** encode the operating-policy distinction in code before adding external tools: external/irreversible operations must return a queued T.H.E.L.M.A. approval request rather than an execution authorization. Add negative tests proving human and agent AAL2 contexts cannot execute external effects directly.

## Hash and change comparison

The `standalone-crm` main tree remains `2be8547a622531fba60e127c0374dea684837082`, identical to the November 16 inventory reference. The `Leadstack-Clone` main tree remains `13c4f44d0da5bbaa458ae67698b257a70de4af21`, also identical to the inventory reference. The findings arise from deeper inspection of previously inventoried source, not new file changes.

## Recovery sequence

1. Approve the AgencyFlow/Leadstack/T.H.E.L.M.A. ownership contract while retaining all 18 identities.
2. Resolve F-34 before any external Leadstack tool is implemented.
3. Activate exact-SHA CI and lock dependencies.
4. Establish production database/deployment binding and restore evidence.
5. Only then implement provider workers and collect end-to-end receipts.
6. Keep AgencyFlow `RECOVERY_REQUIRED` until canonical ownership, route, runtime and production evidence pass.

**Next forensic domain:** `SYS-CLIMATE-001` ClimateTrack Pro, after the AgencyFlow ownership decision and critical pre-activation controls are tracked.

## Limitations

No live CRM login, database query, Edge Function invocation, provider action, deployment mutation, secret read or restore operation was performed. Historical deployment IDs and test counts are source claims until re-verified against current runtimes. No production certification is asserted.
