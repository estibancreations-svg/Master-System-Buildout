# Master-System-Buildout

A comprehensive enterprise system architecture and governance framework.

## Directory Structure

- **00-CENTRAL-HUB** - Central system of record for directives, conversation intake, Memory Gems, registries, indexes, repository mapping, and continuity control
- **00-GOVERNANCE** - Enterprise governance policies and operational rules
- **01-ARCHITECTURE** - System architecture documentation and design specifications
- **02-SYSTEM-SPECIFICATIONS** - Detailed specifications for core systems and agents
- **03-AI-PROMPTS** - AI agent prompts and system instructions
- **04-DATABASE-DESIGN** - Database schemas and data architecture
- **05-AUTOMATION** - Workflow automation, APIs, integrations, validators, and agent implementation
- **06-DEPLOYMENT** - Deployment configurations and infrastructure
- **07-DOCUMENTATION** - User guides, training, and administrative documentation
- **08-CHAT-LOGS** - Verbatim conversation archives organized by LLM and email identity
- **09-MEMORY-GEMS** - Existing top-level Memory Gem area; relationship to Central Hub Memory Gems remains subject to repository reconciliation
- **99-ARCHIVE** - Historical records and archived materials

## Repository Routing Rule

Use the live functional structure above. Do not create a competing top-level `06-AGENTS-AND-AUTOMATION` directory.

Conversation Capture Agent materials are routed as follows:

- Governing directive: `00-CENTRAL-HUB/Directives/`
- System specification: `02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/`
- Executable agent prompt: `03-AI-PROMPTS/Agent-Prompts/`
- Automation implementation: `05-AUTOMATION/Conversation-Capture-Agent/`
- Deployment configuration: `06-DEPLOYMENT/Conversation-Capture-Agent/`
- Operator documentation: `07-DOCUMENTATION/Conversation-Capture-Agent/`

See [`00-CENTRAL-HUB/REPOSITORY-STRUCTURE-RECONCILIATION.md`](00-CENTRAL-HUB/REPOSITORY-STRUCTURE-RECONCILIATION.md) for the controlling path correction and the unresolved relationship among Central Hub Memory Gems, `08-CHAT-LOGS`, and `09-MEMORY-GEMS`.

## Related Repositories (from the 2026-09-17 GitHub buildout)

- [The-Arc](https://github.com/estibancreations-svg/The-Arc) — original sci-fi franchise, indexed from Drive
- [52-Books-in-52-Weeks](https://github.com/estibancreations-svg/52-Books-in-52-Weeks) — semi-fiction book-a-week project, outline stage
- [OSIRIS](https://github.com/estibancreations-svg/OSIRIS) — integration plan for the open-source OSIRIS intelligence platform into the (not-yet-located) logistics THELMA system
- [Crossroads-of-Identity](https://github.com/estibancreations-svg/Crossroads-of-Identity)
- [This-Is-Your-Life](https://github.com/estibancreations-svg/This-Is-Your-Life)
- [MASTER_CEO_DASHBOARD](https://github.com/estibancreations-svg/MASTER_CEO_DASHBOARD)
- [Higgsfield-Integration-Layer](https://github.com/estibancreations-svg/Higgsfield-Integration-Layer) — provider-bound image/video generation integration runtime for VisionWeaver manuscript-to-film workflows

## Higgsfield / VisionWeaver Buildout Status

- **Implemented in this repository:** governance directive, six-stage manuscript-to-film specification package, orchestrator prompt, six automation specification YAMLs, deployment specification YAMLs, operator docs, quick-start docs, and package validator.
- **Specification-only in this repository:** deployment/runtime definitions and integration boundaries for `Higgsfield-Integration-Layer`.
- **Pending runtime verification:** authenticated end-to-end manuscript intake through distribution in connected deployment environments with live credentials.

## Active Conversation Records

- [Amazon Partnership Strategy — Active Reconstructed Memory Gem](00-CENTRAL-HUB/INBOX/01-08-2026_CHATGPT-ESTIBANCREATIONS-AMAZON-PARTNERSHIP-STRATEGY_ACTIVE-RECONSTRUCTED-MEMORY-GEM.md)
- [Amazon Partnership Strategy — Reconstruction Exception Disclosure](00-CENTRAL-HUB/INBOX/Reconstruction-Exceptions/01-08-2026_AMAZON-PARTNERSHIP-STRATEGY_RECONSTRUCTION-EXCEPTION.md)
- [Claude — GitHub Repo Audit and Project Setup (In-Progress, 2026-09-17)](08-CHAT-LOGS/Claude/Estibancreations/Claude-Estibancreations-((Master_Systems_Buildout))-GitHub_Repo_Audit_and_Project_Setup.md) — first Claude entry in `08-CHAT-LOGS`; covers the audit of Crossroads of Identity, This Is Your Life, 52 Books in 52 Weeks, The Tub, CEO Master Dashboard, OSIRIS, StarTrek, and TalentLMS, plus the TalentLMS vs. Docebo research and build-priority decisions.
- [Claude — The Arc and 52 Books Buildout (In-Progress, 2026-09-17)](08-CHAT-LOGS/Claude/Estibancreations/Claude-Estibancreations-((Master_Systems_Buildout))-The_Arc_and_52_Books_Buildout.md) — clarifies The Arc vs. StarTrek, builds The-Arc and 52-Books-in-52-Weeks repos, and records the memory cleanup.
- [OSIRIS Integration Plan](https://github.com/estibancreations-svg/OSIRIS/blob/main/09-source-conversations/2026-09-17_OSIRIS-Integration-Planning-Conversation.md) — full OSIRIS-into-logistics-THELMA planning conversation; confirms `-THELMA-AI` is the production coordinator, not the logistics system, and the logistics THELMA target is still unlocated.

## Getting Started

Navigate to each directory to find detailed documentation for each system component.

## Consolidation Checkpoint — 2026-08-12

All pull requests across the four governed `estibancreations-svg` repositories were audited and settled on 2026-08-12. HisMajesty/Drive recovery, Dashboard/Weaver specifications, VisionWeaver v6, CEO Dashboard code, LandWeaver attachment, and provenance/publishing architecture are now on canonical `main` branches.

Start system rework from the [Repository Migration, PR & System Alignment Closeout](07-DOCUMENTATION/Status-Reports/2026-08-12_REPOSITORY-MIGRATION-PR-AND-SYSTEM-ALIGNMENT-CLOSEOUT.md).

The CEO Dashboard Vercel deployment error remains deliberately deferred and is not represented as resolved.
