# Estiban Creations hosting decision and migration map

Date: November 22, 2026 (America/Chicago)  
Status: Owner selected Render. Documentation and access verification precede implementation and cutover.

## Decision

Render replaces Vercel as the application host. Keep the existing Supabase projects for PostgreSQL, Auth and Storage, with project bindings and system identities preserved. Render can host the dashboard and its Node API in the same service. GitHub remains the source of record, and the exact-commit release gate remains mandatory. The first cutover is the Master CEO Dashboard, including its attached GrantOS workspace. Migrate other confirmed active hosted apps in waves. Keep historical and reference repositories in GitHub.

Railway was the alternative single replacement for Vercel. Cloudflare Pages was an optional standby for static UI. Netlify was a frontend alternative with a documented team-wide usage-limit pause. The owner selected Render as the only new hosting provider. If one provider for hosting and data becomes a separate goal, DigitalOcean with self-hosted Supabase preserves more of the current backend model. AWS and Google Cloud/Firebase can supply comparable components with more auth, storage and permissions migration work. Those options are outside this cutover.

References: [Render web services](https://render.com/docs/web-services) · [Render pricing](https://render.com/pricing) · [Supabase redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls) · [Self-hosted Supabase restore](https://supabase.com/docs/guides/self-hosting/restore-from-platform)

## GrantOS and production evidence

The verified sample contains 27 failed Vercel preview checks across nine GrantOS commit SHAs (three linked projects per SHA), one intervening commit with three successful previews, and a separately observed production availability block. These checks show two documented failure episodes around a temporary recovery. The sample establishes a lower bound on checks, with no claim about total historical incidents.

| Episode or checkpoint | Evidence and effect |
| --- | --- |
| Episode 1 · October 23 through November 9 observations | The [enterprise forensic map](2026-10-23-enterprise-system-map.md) records the GrantOS preview as blocked under team configuration (F-02) and three failing exact-head Vercel checks (F-16). [GrantOS PR #66](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/pull/66) documents further team configuration/collaboration blocks and an explicit project access error for the Git author on one preview. The blocked previews prevented preview certification. |
| November 13 recovery checkpoint | GitHub shows all three Vercel contexts succeeded on [`5ac98cf98e88`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/5ac98cf98e8872c74af95e3c981ed4be574a161d). This restored preview builds for that commit. An authenticated GrantOS production workflow was still unverified. |
| Episode 2 · November 22 account/billing block | The [GrantOS and Enterprise Watch recorded run](https://chatgpt.com/c/6adfe89e-71e8-83e9-827c-61dc44c0dc9b) completed its federal research and reported all three previews as “Account is blocked.” The earlier production verification report recorded HTTP 402 `resource_creation_blocked` when attempting a fresh deployment. A direct production request on November 22 Central returned HTTP 402 `DEPLOYMENT_DISABLED` while the Vercel API reported the build READY. The public production endpoint was unavailable. A billing support acknowledgment was located privately. Payment reconciliation, precise outage duration and restoration remain unverified. [Project domain](https://master-ceo-dashboard.vercel.app) · [Vercel error definition](https://vercel.com/docs/errors/deployment_disabled) |
| Independent application gate | The [GrantOS PR #66 review](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/pull/66) records TypeScript passing and 44/47 invariant assertions passing on the documented November 7 head. Three existing VisionWeaver assertions failed. The later automation also reported invariant failures. Those failures require their own fix and are outside the Vercel check count. The Federal Updates view remains uncertified on production. |

### Exact-commit check sample

Each row counts the latest verified status of the three Vercel contexts on one SHA, with repeats on the same SHA excluded. GitHub check results and the production HTTP result are different measures.

| Dashboard commit | Result | Provider evidence |
| --- | --- | --- |
| [`1431abd3661a`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/1431abd3661a2825821d9b9e8d55aba317a2d74a/tree/docs/render-migration-2026-11-22) | 3 failed | [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview/2RgdhZVhfptuqpLZF1UAjyjgMeo7), [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard/3JCVq4YtgWadGCK8QXFEHsHX2i2u), [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard/7DaQaT4Gav5bMs6cDKCSsbE2vPCr) |
| [`c1a1871ec157`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/c1a1871ec157ad8e9a8d9bded01b68a5fa5438bf/tree/docs/render-migration-2026-11-22) | 3 failed | [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview/GZUkL7JWsB39TwxN3Kw2yEHkrMsi), [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard/5DFb5BUxLrwamEDiGkrFoH4ezwzo), [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard/2dTav4jk8u3hUbSarVYPYkyJkPG3) |
| [`666bf843879c`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/666bf843879cbb0f5202f588c0b14311eb368397/tree/docs/render-migration-2026-11-22) | 3 failed | [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview/5sds3tkcjLcZ3f8XHjYF61RxBx89), [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard/6856hbfLuhuj16dacJ3XBAhzXu4B), [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard/HWgm9x6uUNMmdhJ3evBiY4jByxBR) |
| [`902b95145a4d`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/902b95145a4d3187ca2c0840eb41113353b8193b/tree/docs/render-migration-2026-11-22) | 3 failed | [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard/2p9uSJWnq1ezjwZL8RMwDF1jDjYh), [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview/CTd8hAsxeCEre1DJG5ZeZm8yDQaC), [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard/Gtq8D3p7c3WEQKMm5pkqxD1Nsnxq) |
| [`1a67e9622634`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/1a67e9622634871933f9681d4d3bacac52fb2e2e/tree/docs/render-migration-2026-11-22) | 3 failed | [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard/GeQh6wPZoWdHdXLFAPgcUwJLDuk5), [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard/Bhmby1uuVUNHdGikirQBxcpiXSnB), [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview/CNu9S55GBxG4ndNvEA3UAXwPvdz2) |
| [`373d70122fce`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/373d70122fce2d92d3110992d560b9eef0eb4c25/tree/docs/render-migration-2026-11-22) | 3 failed | [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard/D7UaPG3rjmXcS72c1hY1KQjvV9uS), [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview/F8FdL5t6aBgmWnSQCbZAV4cruvrn), [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard/9Ygfh5tXPFtfLAX28oV4CKS2KTtd) |
| [`2eb2cb197540`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/2eb2cb197540e7c81321b2d9eac6021227206e82/tree/docs/render-migration-2026-11-22) | 3 failed | [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard/ALVaGvuKdH6BwCN9MKdndwiWpQNc), [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard/47sc5EJgPDWMYC3Rjga35qrwJ7dT), [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview/BU6hsSuo6t3iyNfDCV7NRL7tFRK4) |
| [`5ac98cf98e88`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/5ac98cf98e8872c74af95e3c981ed4be574a161d/tree/docs/render-migration-2026-11-22) | 3 successful | [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard/Bom55MzJWCX5F2ftYVSTDqUir1xf), [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview/8rj3jcCKQSZjzySGVQ3u2cVvXQ9E), [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard/3fRbMTsU25LNDgB9dB6dSNg1LdZR) |
| [`ec97820469d5`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/ec97820469d592aa337e060d78556d7ce10ba6a8/tree/docs/render-migration-2026-11-22) | 3 failed | [standalone-crm-preview](https://vercel.com/knowledge/why-is-my-account-deployment-blocked), [estibancreations-ceo-dashboard](https://vercel.com/knowledge/why-is-my-account-deployment-blocked), [master-ceo-dashboard](https://vercel.com/knowledge/why-is-my-account-deployment-blocked) |
| [`5f7223eafc46`](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/commit/5f7223eafc469892693274b5e4da54801684d387/tree/docs/render-migration-2026-11-22) | 3 failed | [standalone-crm-preview](https://vercel.com/knowledge/why-is-my-account-deployment-blocked), [estibancreations-ceo-dashboard](https://vercel.com/knowledge/why-is-my-account-deployment-blocked), [master-ceo-dashboard](https://vercel.com/knowledge/why-is-my-account-deployment-blocked) |

## Repository mapping

The connected GitHub account exposed 27 repositories on the check date. This inventory includes source, historical, creative and reference repositories. A Render service is assigned only to a confirmed runtime. Legacy provider links in existing repository history remain evidence until replacement URLs are verified.

| Repository | Placement | Next verification |
| --- | --- | --- |
| [MASTER_CEO_DASHBOARD](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/tree/docs/render-migration-2026-11-22) | Wave 1 · first cutover | Render Node web service for React/Vite and same-origin VisionWeaver continuity/assembly routes. Keep the existing Supabase database, Auth and Storage. Match the deployed project binding before changing redirects. Pilot GrantOS research and app workflows independently. |
| [Master-System-Buildout](https://github.com/estibancreations-svg/Master-System-Buildout/tree/docs/render-migration-2026-11-22) | Governance · no service | Maintain the enterprise deployment map, evidence ledger and rollback ownership. Preserve the separately governed system identities. |
| [Master-dashboard-](https://github.com/estibancreations-svg/Master-dashboard-/tree/docs/render-migration-2026-11-22) | Discovery · reconcile lineage | README identifies a VisionWeaver Command lineage. Resolve its canonical owner and runtime before proposing a duplicate Render service. |
| [-HisMajesty0225-CEO-Dashboard](https://github.com/estibancreations-svg/-HisMajesty0225-CEO-Dashboard/tree/docs/render-migration-2026-11-22) | Historical · no service | Preserve the old CEO Dashboard lineage. The active migration target is MASTER_CEO_DASHBOARD. |
| [-THELMA-AI](https://github.com/estibancreations-svg/-THELMA-AI/tree/docs/render-migration-2026-11-22) | Discovery · enterprise THELMA | Keep enterprise orchestration distinct from logistics. Confirm the actual execution entry point and permission boundaries before proposing a service or worker. |
| [reunion-os](https://github.com/estibancreations-svg/reunion-os/tree/docs/render-migration-2026-11-22) | Wave 2 · Render candidate | Validate application build and start commands, existing database binding and event flows. Move its documented Vercel application hosting while retaining its data boundary. |
| [VisionWeaver](https://github.com/estibancreations-svg/VisionWeaver/tree/docs/render-migration-2026-11-22) | Wave 2 · Render candidate | Identify the approved production lineage and execution entry points. Validate an actual media workflow and schedule separately from the executive dashboard. |
| [content-that-builds](https://github.com/estibancreations-svg/content-that-builds/tree/docs/render-migration-2026-11-22) | Content · no service identified | Preserve the workbook and content repository. Confirm a separately approved public runtime before provisioning. |
| [This-Is-Your-Life](https://github.com/estibancreations-svg/This-Is-Your-Life/tree/docs/render-migration-2026-11-22) | Creative canon · no service | Preserve anthology indexes and production handoffs. Move any future app through its owning app repository. |
| [Crossroads-of-Identity](https://github.com/estibancreations-svg/Crossroads-of-Identity/tree/docs/render-migration-2026-11-22) | Creative canon · no service | Preserve book and adaptation work. Route runtime deployment through the approved product application. |
| [Higgsfield-Integration-Layer](https://github.com/estibancreations-svg/Higgsfield-Integration-Layer/tree/docs/render-migration-2026-11-22) | Discovery · provider integration | Confirm active callers, provider approval, credential scope, job execution and storage binding. Create a runtime only if a standalone execution surface is required. |
| [The-Arc](https://github.com/estibancreations-svg/The-Arc/tree/docs/render-migration-2026-11-22) | Creative canon · no service | Preserve franchise records and asset references. Use the owning application for any approved runtime. |
| [52-Books-in-52-Weeks](https://github.com/estibancreations-svg/52-Books-in-52-Weeks/tree/docs/render-migration-2026-11-22) | Publishing · no service identified | Preserve publishing workflow and source. Confirm an approved public app separately. |
| [OSIRIS](https://github.com/estibancreations-svg/OSIRIS/tree/docs/render-migration-2026-11-22) | Discovery · integration candidate | Verify the pinned upstream runtime, consumer attachment and scheduler before choosing a Render worker or service. |
| [THELMA-Global-Link-Logistics](https://github.com/estibancreations-svg/THELMA-Global-Link-Logistics/tree/docs/render-migration-2026-11-22) | Wave 2 discovery · separate logistics product | Recover and verify the complete runnable backend and approval flows before provisioning. Preserve its independent data and execution boundary. |
| [motive-next-deployment](https://github.com/estibancreations-svg/motive-next-deployment/tree/docs/render-migration-2026-11-22) | Discovery · recovered Netlify bundle | Determine current owner and production status. Move a confirmed active site to Render after a smoke test. |
| [-Five-Stations-Learning-Serie](https://github.com/estibancreations-svg/-Five-Stations-Learning-Serie/tree/docs/render-migration-2026-11-22) | Creative production · no service identified | Preserve the children's series and Avatar State contracts. Verify any companion app ownership independently. |
| [DESIGN_STUDIO](https://github.com/estibancreations-svg/DESIGN_STUDIO/tree/docs/render-migration-2026-11-22) | Wave 2 · Render candidate | Confirm the standalone and embedded release boundaries, supported asset flows, environment variables and appropriate storage before cutover. |
| [VisionWeaver-Prime](https://github.com/estibancreations-svg/VisionWeaver-Prime/tree/docs/render-migration-2026-11-22) | Wave 2 · Render candidate | Verify the separate frontend and Supabase project, deploy a preview and exercise auth, storage and tenant isolation before moving traffic. |
| [standalone-crm](https://github.com/estibancreations-svg/standalone-crm/tree/docs/render-migration-2026-11-22) | Wave 2 · Render candidate | Run its Next.js application on a Render Node service. Keep the correct Supabase binding and verify migrations, tenant/RLS checks and owner workflows. |
| [crm-tour-deck-build-temp](https://github.com/estibancreations-svg/crm-tour-deck-build-temp/tree/docs/render-migration-2026-11-22) | Temporary presentation · no service | Preserve as build provenance. A permanent public presentation requires a separately identified owner and destination. |
| [Leadstack-Clone](https://github.com/estibancreations-svg/Leadstack-Clone/tree/docs/render-migration-2026-11-22) | Discovery · separate CRM lineage | Verify the current runtime and CRM integration contract before provisioning. Keep access through approved interfaces and preserve the standalone scope. |
| [Archive-HisMajesty0225-Shenry60](https://github.com/estibancreations-svg/Archive-HisMajesty0225-Shenry60/tree/docs/render-migration-2026-11-22) | Archive · no service | Preserve private provenance and inventory. The archive does not confer access to external-account repositories. |
| [Paypal_Portal](https://github.com/estibancreations-svg/Paypal_Portal/tree/docs/render-migration-2026-11-22) | Existing Render service | Render inventory already shows this repository on a main-tracking Node web service. Confirm actual health and ownership before any future changes. |
| [csuite-command](https://github.com/estibancreations-svg/csuite-command/tree/docs/render-migration-2026-11-22) | Wave 2 · Render candidate | Confirm production runtime and build configuration, then verify each connected system boundary and the exact release SHA. |
| [ChatGPT--EstibanCreations](https://github.com/estibancreations-svg/ChatGPT--EstibanCreations/tree/docs/render-migration-2026-11-22) | Reference archive · no service | Preserve the index of conversations and evidence. Link deployment decisions and changes from the owning runtime repository. |
| [VisionWeaver-Research-and-Construct-Outlines-](https://github.com/estibancreations-svg/VisionWeaver-Research-and-Construct-Outlines-/tree/docs/render-migration-2026-11-22) | Discovery · research and build lineage | Reconcile the repo with the referenced C-Suite and VisionWeaver app before choosing a runtime. Preserve distinct research and product sources. |

## Legacy provider inventory

Vercel listed 11 projects in the connected team. These API fields describe project and build records. Endpoint health and authenticated workflow checks remain separate. Each repository link above opens the documentation branch.

| Vercel project | API live flag | Latest build | Migration treatment |
| --- | --- | --- | --- |
| [csuite-command](https://vercel.com/estibancreations101/csuite-command) | false | READY (production) | C-Suite wave 2 candidate. |
| [master-ceo-dashboard](https://vercel.com/estibancreations101/master-ceo-dashboard) | false | READY | Dashboard production hostname and first migration target. |
| [estibancreations-ceo-dashboard](https://vercel.com/estibancreations101/estibancreations-ceo-dashboard) | Unavailable | READY | Reconcile active dashboard URLs before provisioning a duplicate. |
| [standalone-crm-preview](https://vercel.com/estibancreations101/standalone-crm-preview) | Unavailable | READY | GrantOS PR preview context. Map separately from CRM production. |
| [master-system-buildout-lzaa](https://vercel.com/estibancreations101/master-system-buildout-lzaa) | false | READY (production) | Confirm legacy runtime and callers first. |
| [visionweaver-prime](https://vercel.com/estibancreations101/visionweaver-prime) | false | READY (production) | Prime wave 2 candidate with separate data binding. |
| [standalone-crm](https://vercel.com/estibancreations101/standalone-crm) | false | ERROR | Standalone CRM wave 2 candidate. |
| [visionweaver-design-studio](https://vercel.com/estibancreations101/visionweaver-design-studio) | false | READY (production) | Design Studio wave 2 candidate. |
| [reunion-os](https://vercel.com/estibancreations101/reunion-os) | false | READY (production) | Reunion OS wave 2 candidate. |
| [thelma-global-link-logistics](https://vercel.com/estibancreations101/thelma-global-link-logistics) | false | ERROR (production) | Verify runnable logistics source and its separate boundary. |
| [master-dashboard](https://vercel.com/estibancreations101/master-dashboard) | false | READY (production) | Reconcile dashboard/VisionWeaver lineage before assignment. |

## Render preparation and sequence

1. Verify the target Render account by the owner email and existing GitHub-bound PayPal service. The connected API displays the workspace as **My Workspace** and lists `Paypal_Portal` there. Confirm it is the intended production workspace before provisioning because the owner referred to it as EstibanCreations-svg.
2. In Render, confirm repository access for only the approved migration wave. The working PayPal repository linkage establishes access to that repository. Test the dashboard repo's grant separately. Record source branch, SHA, build/start commands, runtime, health endpoint, secrets by name, current Supabase binding and DNS owner per service. Two healthy Supabase projects have dashboard-like names; resolve the actual binding from existing deployment configuration before copying or editing settings.
3. For the dashboard pilot, adapt the two [VisionWeaver handlers](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/tree/main/api) to Node, serve the built Vite app and keep the API same-origin. Confirm route rewrites, request and timeout behavior, native FFmpeg, auth callback redirects and protected data paths. Keep runtime credentials in Render secret settings and keep Supabase service keys out of the frontend.
4. Deploy a staging candidate and record the exact SHA. Run the GitHub Quality Gate, authenticated dashboard and GrantOS checks, repeatable research/update-feed checks, a real continuity run and an assembly run, and project-bound auth/storage checks. Obtain comparable preview evidence before changing the existing provider-specific required check. Leave the federal research schedule intact during documentation and staging.
5. Get owner approval for paid capacity, production DNS and retirement in the order needed. Cut production traffic only after the candidate meets the release policy. Confirm live HTTP, authenticated behavior and rollback target on the owner-controlled hostname. Record the Render service, deploy and evidence per repository. Retain Vercel deployment history and configuration until the owner authorizes retirement.

## Migration execution evidence · 2026-11-22T21:35:36-06:00

Render accepted the authorized Starter service for the CEO Dashboard. The staging pilot confirmed GitHub-to-Render deploys for five app repositories. The exact checks and remaining scope are listed below. Existing PayPal Portal health was checked separately. The legacy production DNS, auth scope, and release gates still require cutover evidence.

| Repository | State at verification |
| --- | --- |
| [Master-dashboard-](https://github.com/estibancreations-svg/Master-dashboard-/tree/docs/render-migration-2026-11-22) | Runtime ownership pending |
| [Master-System-Buildout](https://github.com/estibancreations-svg/Master-System-Buildout/tree/docs/render-migration-2026-11-22) | Governance repository. Migration evidence indexed |
| [MASTER_CEO_DASHBOARD](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/tree/docs/render-migration-2026-11-22) | Staging smoke checks passed |
| [-HisMajesty0225-CEO-Dashboard](https://github.com/estibancreations-svg/-HisMajesty0225-CEO-Dashboard/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [-THELMA-AI](https://github.com/estibancreations-svg/-THELMA-AI/tree/docs/render-migration-2026-11-22) | Enterprise orchestration runtime pending |
| [reunion-os](https://github.com/estibancreations-svg/reunion-os/tree/docs/render-migration-2026-11-22) | Demo staging smoke checks passed |
| [VisionWeaver](https://github.com/estibancreations-svg/VisionWeaver/tree/docs/render-migration-2026-11-22) | Runtime ownership pending |
| [content-that-builds](https://github.com/estibancreations-svg/content-that-builds/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [This-Is-Your-Life](https://github.com/estibancreations-svg/This-Is-Your-Life/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [Crossroads-of-Identity](https://github.com/estibancreations-svg/Crossroads-of-Identity/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [Higgsfield-Integration-Layer](https://github.com/estibancreations-svg/Higgsfield-Integration-Layer/tree/docs/render-migration-2026-11-22) | Provider integration runtime pending |
| [The-Arc](https://github.com/estibancreations-svg/The-Arc/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [52-Books-in-52-Weeks](https://github.com/estibancreations-svg/52-Books-in-52-Weeks/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [OSIRIS](https://github.com/estibancreations-svg/OSIRIS/tree/docs/render-migration-2026-11-22) | Scheduling and runtime evidence pending |
| [THELMA-Global-Link-Logistics](https://github.com/estibancreations-svg/THELMA-Global-Link-Logistics/tree/docs/render-migration-2026-11-22) | Runtime transfer blocked by source readiness |
| [motive-next-deployment](https://github.com/estibancreations-svg/motive-next-deployment/tree/docs/render-migration-2026-11-22) | Legacy Netlify bundle. Ownership pending |
| [-Five-Stations-Learning-Serie](https://github.com/estibancreations-svg/-Five-Stations-Learning-Serie/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [DESIGN_STUDIO](https://github.com/estibancreations-svg/DESIGN_STUDIO/tree/docs/render-migration-2026-11-22) | Staging smoke checks passed |
| [VisionWeaver-Prime](https://github.com/estibancreations-svg/VisionWeaver-Prime/tree/docs/render-migration-2026-11-22) | Render plan ready. Approval pending |
| [standalone-crm](https://github.com/estibancreations-svg/standalone-crm/tree/docs/render-migration-2026-11-22) | Staging login loads. Supabase restore blocked |
| [crm-tour-deck-build-temp](https://github.com/estibancreations-svg/crm-tour-deck-build-temp/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [Leadstack-Clone](https://github.com/estibancreations-svg/Leadstack-Clone/tree/docs/render-migration-2026-11-22) | Runtime ownership pending |
| [Archive-HisMajesty0225-Shenry60](https://github.com/estibancreations-svg/Archive-HisMajesty0225-Shenry60/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [Paypal_Portal](https://github.com/estibancreations-svg/Paypal_Portal/tree/docs/render-migration-2026-11-22) | Existing Render service. Health verified |
| [csuite-command](https://github.com/estibancreations-svg/csuite-command/tree/docs/render-migration-2026-11-22) | Staging HTTP smoke checks passed |
| [ChatGPT--EstibanCreations](https://github.com/estibancreations-svg/ChatGPT--EstibanCreations/tree/docs/render-migration-2026-11-22) | Repository mapping verified. No standalone host assigned |
| [VisionWeaver-Research-and-Construct-Outlines-](https://github.com/estibancreations-svg/VisionWeaver-Research-and-Construct-Outlines-/tree/docs/render-migration-2026-11-22) | Consolidated source inventory. Independent runtime unconfirmed |

### MASTER_CEO_DASHBOARD

The [Render staging deploy](https://dashboard.render.com/web/srv-dc1qj3mc6qcc73bives0/deploys/dep-dc1qj46c6qcc73bivg30) is live on `a70a292a98e67d64ed576a96617c45394fd2adec`. [Staging](https://master-ceo-dashboard-staging.onrender.com) returned 200 for health, dashboard, GrantOS and VisionWeaver routes. Both FFmpeg APIs returned 200 and reported binary readiness. Unauthenticated POSTs returned 401. A local synthetic FFmpeg concat and frame extraction succeeded. The exact-commit [GitHub Quality Gate](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/actions/runs/45102714566) failed on three existing VisionWeaver invariants (44/47). Supabase project `Master Dashboard` matched the architecture record and all five checked GrantOS/Video tables. Auth redirect, signed-in workflow, live media jobs and production promotion are pending. [Implementation PR #68](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD/pull/68).

### DESIGN_STUDIO

The [fixed Render deploy](https://dashboard.render.com/web/srv-dc1qj2l6e07s73e3o73g/deploys/dep-dc1r80dg1s2s73e5n2d0) is live on `27442ea411507d9ceb7e86ace80ce7ce6a13cdc2`. [Design Studio](https://estiban-design-studio-staging.onrender.com/design-studio) and API config returned 200, config reported cloud enabled, and protected workspace/render requests returned 401 without authentication. The preceding build failed because its Vercel adapter test inherited production Supabase settings. The staging branch now injects an isolated unconfigured test app and the replacement build passed its checks. Authenticated authoring and production promotion are pending. [Implementation PR #1](https://github.com/estibancreations-svg/DESIGN_STUDIO/pull/1).

### reunion-os

[Render staging](https://estiban-reunion-os-staging.onrender.com) is live on `3bf654fb0ebb17a037754e16186df729038a7d8e`. Home and health returned 200. Health reported degraded with no database configured. Existing production database binding and authenticated event workflows need verification before promotion. [Implementation PR #3](https://github.com/estibancreations-svg/reunion-os/pull/3).

### standalone-crm

[Render staging](https://estiban-standalone-crm-staging.onrender.com/login) is live on `a2794f893d973fa40e14839b182e186b84c92f97`. Login returned 200 and API health returned 503 with Supabase unreachable. The legacy binding points to the inactive `standalone-crm-test` project. Supabase refused to restore it because the account already has two active free projects. The other databases were left in service. Auth, tenant isolation and the production gate are pending. [Implementation PR #13](https://github.com/estibancreations-svg/standalone-crm/pull/13).

### csuite-command

[Render staging](https://estiban-csuite-command-staging.onrender.com) is live on `15ea4082a940f7c1c7cd9a5dad077179ad8e04fe`. Home and the VisionWeaver health page returned 200, and the legacy health route redirected. The repository's current Supabase binding is absent from the connected project inventory. Authenticated workflows and deployment-time secret configuration remain pending. [Implementation PR #2](https://github.com/estibancreations-svg/csuite-command/pull/2).

### VisionWeaver-Prime

[Render planned one free static staging service](https://dashboard.render.com/blueprint/exs-dc1qj3ec6qcc73bivdg0/sync/exe-dc1qj3ec6qcc73bivdpg) with current security headers and auto-sync disabled. The plan references `323951e257a0f1dd6611bb0226f461f25c4bc2a2`. The plan is awaiting explicit approval, with GitHub preparation committed and no live deployment observed. [Implementation PR #3](https://github.com/estibancreations-svg/VisionWeaver-Prime/pull/3).

### Paypal_Portal

[Existing Render site](https://paypal-portal.onrender.com) returned 200 for home and `/api/health`, with health reporting `ok: true`. [Existing deploy](https://dashboard.render.com/web/srv-dbju1l0ae00c73f9fv1g/deploys/dep-dbju6l7b9u1s73f2u3o0) on `20c502f56ed40ae22ec5409c4fd3b200711d030c` was already live. No new payment operations were run.

### Supabase continuation

The active dashboard schema was matched through a read-only check. The connected Supabase API did not expose Auth redirect edits. Dashboard authentication is required to add the exact staging callback URLs, then verify an authorized user session. CRM restore was attempted and declined by Supabase's active Free project limit. C-Suite and Reunion OS need their intended data projects verified. Existing production Site URLs and data policies were left in place.
