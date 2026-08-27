# Canonical Credential Decision — OpenAI

**Effective:** 2026-08-26  
**Authority:** CEO directive  
**Canonical credential name:** `OPENAI_API_ACCESS`

## Decision

All active Estiban Creations systems, runtimes, tools, workflows, provider registries, documentation, tests, Analyst Memory records, repair automation, and future integrations must use `OPENAI_API_ACCESS` for OpenAI server-side API access.

The prior KEY-based OpenAI credential name is retired and must not be reintroduced into active configuration. Historical applied migrations may retain the former literal only as immutable provenance; later convergence migrations supersede that historical configuration.

## Systems explicitly covered

- Master CEO Dashboard
- THELMA AI
- White Blood Cell / repair architecture
- THELMA Codex repair executor
- EC Integration Fabric connector registry
- Supabase Edge Functions and Vault fallback contracts
- provider/plugin registries
- Analyst Memory Bank and reconstruction findings
- GitHub Actions workflows
- provider activation and credential-installation documentation
- future OpenAI Agents SDK / Responses API / Codex integrations

## Current implementation evidence

- Production repository PR #38 canonicalized active runtime/source references.
- `thelma-ai` v4 reads `OPENAI_API_ACCESS`.
- THELMA Codex GitHub workflow expects `secrets.OPENAI_API_ACCESS`.
- Supabase connector and CEO integration registries require `OPENAI_API_ACCESS`.
- THELMA plugin entries `openai-models` and `codex-specialist` reference `OPENAI_API_ACCESS`.
- Analyst Memory contains an ACTIVE_CANON credential-governance record.
- A regression test rejects reintroduction of the retired name into active source, workflows, docs, scripts, or tests.

## Verification rule

Credential existence does not equal provider health. State progression remains:

`configured -> health checked -> synthetic transaction -> cost/audit verified -> rollback/revocation verified -> approved active`

Do not mark OpenAI HEALTHY or PRODUCTION until an authenticated request and its evidence footprint pass.
