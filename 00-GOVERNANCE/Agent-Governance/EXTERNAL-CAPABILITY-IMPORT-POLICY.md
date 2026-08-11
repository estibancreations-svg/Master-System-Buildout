# External Capability Import & Provenance Policy

**Status:** Governing policy  
**Owner:** CEO Command / T.H.E.L.M.A.  
**Effective:** 2026-08-11

## Purpose

Estiban Creations may learn from, adapt, combine, or incorporate outside open-source ideas, agent definitions, workflows, runbooks, schemas, tools, and architectural patterns. We will do so transparently and deliberately.

The objective is not to conceal where an idea came from. The objective is to preserve attribution, understand the original work, document what we changed, and create an Estiban-native implementation governed by our own architecture, security model, Air Gap, quality controls, and operating requirements.

## Non-Negotiable Rule

Every externally learned capability entering the system MUST retain a provenance trail sufficient to answer four questions:

1. **Where did we learn this?**
2. **What exactly did the upstream source provide?**
3. **What did we change, reject, extend, or combine?**
4. **What is the resulting Estiban-native capability and why does it exist?**

## Intake Classification

Every external capability is assigned one status:

- **ADOPT** — useful substantially as designed; still wrapped in Estiban governance.
- **ADAPT** — strong concept but requires material changes for our architecture, security, workflows, or goals.
- **REFERENCE** — retained as research or inspiration but not implemented.
- **DUPLICATE** — overlaps an existing internal capability; useful only for comparison or validation.
- **REJECT** — unsuitable, unsafe, incompatible, weak, or legally unusable.
- **FUTURE** — relevant but intentionally deferred.

## Required Provenance Record

Each imported or adapted capability must record:

```yaml
source:
  repository: owner/repository
  source_url: https://github.com/owner/repository
  upstream_file: path/to/file
  upstream_blob_sha: optional
  upstream_commit_or_tag: optional
  license: license identifier
  reviewed_on: YYYY-MM-DD

assessment:
  status: ADOPT|ADAPT|REFERENCE|DUPLICATE|REJECT|FUTURE
  useful_elements: []
  concerns: []

estiban:
  capability_id: stable internal ID
  local_name: internal capability name
  local_owner: executive/system owner
  changes_made: []
  added_controls: []
  rejected_elements: []
  local_files: []
```

## Attribution Standard

Where license or substantial derivation requires attribution, preserve the required copyright and license notices.

Even where attribution is not legally required, retain internal provenance whenever an external source materially influenced design. Internal provenance is part of the enterprise audit trail.

## Estibanization Standard

No external agent prompt is considered production-ready merely because it exists in a respected repository.

Before activation it must be converted into the Estiban Canonical Agent Contract, including at minimum:

- stable agent/capability ID
- division and executive owner
- mission and non-mission boundaries
- allowed inputs and outputs
- authority and tool permissions
- memory scope
- prohibited data/actions
- Air Gap packet contract
- runtime/cost limits
- retry and fallback behavior
- quality evaluator
- evidence requirements
- escalation target
- provenance record

## Security and Quality Review

External code, generated code, scripts, installation commands, model-generated transformation logic, and automation examples are untrusted until reviewed.

External examples MUST NOT bypass:

- least-privilege controls
- sandboxing
- secrets isolation
- prompt-injection defenses
- schema validation
- Quality Control Agency gates
- cost/credit limits
- immutable audit logging
- human approval where the governing runbook requires it

## Change Ownership

After adaptation, the Estiban-native capability is maintained according to our versioning and governance standards. Upstream changes are advisory inputs, not automatic replacements.

The system must be able to show a comparison between:

`UPSTREAM ORIGINAL -> ESTIBAN ADAPTATION -> CURRENT ESTIBAN VERSION`

## Upstream Monitoring

The Ecosystem Discovery & Learning Engine may monitor upstream repositories for releases, commits, new agent roles, new runbooks, security fixes, deprecations, and materially useful architectural changes.

Updates enter the same intake process. No upstream change auto-promotes into production without evaluation.

## Initial Source

The first formal source governed by this policy is:

- Repository: `msitarzewski/agency-agents`
- License: MIT
- Reviewed: 2026-08-11
- Primary concepts selected for adaptation: NEXUS orchestration doctrine, dynamic runbook rosters, structured handoffs, multi-agent systems architecture, Agents Orchestrator, Reality Checker/evidence QA, autonomous optimization/FinOps patterns, security specialists, AI data remediation concepts, Book Co-Author, Narratologist, Narrative Designer concepts, Visual Storyteller, video optimization, short-video production, podcast operations, and multi-platform publishing.

## Governing Principle

**Credit the source. Understand the source. Improve the source for our needs. Preserve the record. Build the Estiban version.**
