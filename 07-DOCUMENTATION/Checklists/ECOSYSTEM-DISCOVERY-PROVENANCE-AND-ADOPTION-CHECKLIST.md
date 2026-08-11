# Ecosystem Discovery, Provenance & Adoption Checklist

**Purpose:** Permanent operating checklist for finding useful external repositories, learning from them, giving proper credit, deciding what belongs in Estiban Creations, and safely converting the best material into governed internal capability.

**Status:** ACTIVE / PINNED WORKING CHECKLIST  
**Owner:** CEO Command + T.H.E.L.M.A.  
**Initial trigger:** Review of `msitarzewski/agency-agents` on 2026-08-11

---

## A. Discovery — Find What We Do Not Know Yet

- [ ] Define the system/problem being researched.
- [ ] Identify synonyms, adjacent disciplines, and likely GitHub topic names.
- [ ] Search GitHub repositories by problem, capability, architecture, protocol, and tool name.
- [ ] Search GitHub code for implementation patterns, not only repository descriptions.
- [ ] Search recent commits/releases for active projects.
- [ ] Search issues/discussions for failure modes, complaints, and missing features.
- [ ] Search package registries and official project documentation when applicable.
- [ ] Search adjacent ecosystems (agent frameworks, workflow engines, RAG, evals, observability, publishing, media, finance, security, grants, etc.).
- [ ] Look for maintained reference implementations and production examples.
- [ ] Look specifically for capabilities not represented in our current registry.
- [ ] Record promising sources in `EXTERNAL-CAPABILITY-SOURCES.json`.

## B. Repository Health Check

For every candidate repository:

- [ ] License identified and compatible with intended use.
- [ ] Maintainer/organization identified.
- [ ] Last meaningful update reviewed.
- [ ] Release/tag history reviewed.
- [ ] Open issue quality reviewed.
- [ ] Security policy/advisories reviewed if relevant.
- [ ] Test/CI presence reviewed.
- [ ] Documentation quality reviewed.
- [ ] Architecture/design docs reviewed.
- [ ] Dependency risk reviewed.
- [ ] Bus factor / maintenance concentration noted.
- [ ] Evidence of real production use noted where available.
- [ ] No popularity metric (stars/forks) treated as proof of quality by itself.

## C. Capability Extraction

- [ ] Identify the useful idea separately from the source implementation.
- [ ] Identify assumptions the upstream project makes.
- [ ] Identify what is generic versus ecosystem-specific.
- [ ] Identify what conflicts with our Air Gap, Zero Trust, governance, or quality standards.
- [ ] Identify useful schemas, runbooks, protocols, test methods, and failure handling.
- [ ] Identify agent roles we do not yet have.
- [ ] Identify tooling/integration opportunities.
- [ ] Identify unsafe patterns that must NOT be copied.
- [ ] Record the upstream file/path/commit/blob when available.

## D. Classification

Choose exactly one initial disposition:

- [ ] ADOPT
- [ ] ADAPT
- [ ] REFERENCE
- [ ] DUPLICATE
- [ ] REJECT
- [ ] FUTURE

Then record:

- [ ] Why.
- [ ] Internal owner.
- [ ] Local destination.
- [ ] Required controls.
- [ ] Expected benefit.
- [ ] Cost/risk to integrate.

## E. Attribution & Provenance

- [ ] Preserve source repository.
- [ ] Preserve source URL.
- [ ] Preserve original file path(s).
- [ ] Preserve source commit/tag/blob SHA when useful.
- [ ] Preserve license.
- [ ] Preserve required copyright notice.
- [ ] Record review date.
- [ ] Record what we learned.
- [ ] Record what we changed.
- [ ] Record what we explicitly rejected.
- [ ] Link all local derived/adapted files.

**Required test:** Can a future reviewer reconstruct `SOURCE -> DECISION -> ESTIBAN VERSION` without guessing?

## F. Estibanization

- [ ] Convert agent/persona material into the Canonical Agent Contract.
- [ ] Assign stable internal capability ID.
- [ ] Assign executive/system owner.
- [ ] Define mission and non-mission.
- [ ] Define inputs/outputs.
- [ ] Define authority.
- [ ] Define allowed tools.
- [ ] Define prohibited tools/data.
- [ ] Define memory read/write scope.
- [ ] Define Air Gap packet contract.
- [ ] Define cost budget.
- [ ] Define retry cap.
- [ ] Define timeout.
- [ ] Define fallback/degraded mode.
- [ ] Define evaluator.
- [ ] Define evidence required.
- [ ] Define escalation target.
- [ ] Define model/provider portability requirements.

## G. Validation Before Production

- [ ] Threat model completed where material.
- [ ] Prompt-injection exposure reviewed.
- [ ] Secrets access reviewed.
- [ ] Data/PII boundaries reviewed.
- [ ] Code examples reviewed for unsafe execution patterns.
- [ ] Eval suite created.
- [ ] Baseline recorded.
- [ ] Failure modes tested.
- [ ] Retry/circuit-breaker behavior tested.
- [ ] Cost ceiling tested.
- [ ] Observability/trace logging verified.
- [ ] Quality Control Agency verdict recorded.
- [ ] Human approval obtained when required.

## H. Upstream Learning Loop

For active sources:

- [ ] Check new releases.
- [ ] Check important commits.
- [ ] Check new agent/capability additions.
- [ ] Check security fixes.
- [ ] Check deprecations/breaking changes.
- [ ] Compare upstream changes against our current adaptation.
- [ ] Do NOT auto-merge external changes into production.
- [ ] Re-run classification for meaningful changes.
- [ ] Create advisement packet for T.H.E.L.M.A./CEO when material.

## I. Search Query Families — Reusable

Use combinations of:

### Multi-agent / orchestration
`multi agent orchestration`, `agent runtime`, `agent router`, `agent registry`, `agent handoff`, `agent evals`, `agent observability`, `AI agent governance`, `human in the loop agents`, `MCP orchestration`

### Quality / evaluation
`LLM eval framework`, `agent evaluation`, `AI QA`, `LLM observability`, `prompt regression`, `AI testing`, `evidence based agents`, `red team LLM`

### Memory / RAG
`RAG production`, `agent memory`, `long term memory agents`, `knowledge graph RAG`, `hybrid retrieval`, `vector database agent memory`, `context engineering`

### Security / Zero Trust
`AI agent security`, `prompt injection defense`, `LLM firewall`, `secrets agent runtime`, `sandbox LLM code`, `zero trust agents`, `AI supply chain security`

### Workflow / automation
`n8n agents`, `durable workflow agents`, `event driven agents`, `workflow orchestration AI`, `temporal agents`, `queue agent architecture`

### Publishing / books / media
`AI publishing workflow`, `book production automation`, `manuscript versioning`, `fiction continuity database`, `story bible`, `transmedia pipeline`, `audiobook automation`, `video repurposing`, `content atomization`, `digital publishing workflow`

### Marketing / growth
`marketing agents`, `AEO automation`, `AI search optimization`, `content distribution agent`, `campaign orchestration`, `creative testing automation`

### Finance / operations
`FinOps AI`, `LLM cost router`, `AI usage monitoring`, `agent budget control`, `financial operations automation`

### Grants / public sector
`grants.gov API`, `grant management open source`, `RFP automation`, `proposal automation`, `SAM.gov API`, `federal compliance automation`

## J. Future Backlog — Old Notes Reconciliation

This is intentionally large and tedious. Do not pretend otherwise.

- [ ] Inventory all prior chat logs.
- [ ] Inventory all prior `.md` specifications.
- [ ] Inventory Google Drive source material.
- [ ] Inventory GitHub historical notes and archived plans.
- [ ] Inventory Memory Gems.
- [ ] Extract every named system, agent, role, workflow, policy, idea, tool, integration, and unresolved decision.
- [ ] Normalize names without deleting historical aliases.
- [ ] Deduplicate concepts.
- [ ] Map each item to current architecture.
- [ ] Mark superseded material explicitly.
- [ ] Preserve provenance for every consolidation.
- [ ] Create unresolved-decision queue.
- [ ] Create missing-specification queue.
- [ ] Create implementation queue.
- [ ] Run Quality Control reconciliation after migration.

## K. Current Immediate Follow-Up

- [x] Agency Agents repository reviewed.
- [x] Provenance policy created.
- [x] External source registry seeded.
- [ ] Complete full repository-wide Agency Agents crosswalk.
- [ ] Search adjacent repositories and frameworks systematically.
- [ ] Build Ecosystem Discovery & Learning Engine implementation.
- [ ] Backfill prior external sources already used in the enterprise architecture.
- [ ] Reconcile all old notes against the new registries and mission framework.

---

## Governing Reminder

**We do not collect repositories. We collect validated capabilities and knowledge.**

**We do not erase sources. We preserve credit and provenance.**

**We do not copy blindly. We understand, test, adapt, govern, and make the resulting system ours.**
