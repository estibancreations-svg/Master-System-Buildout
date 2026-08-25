# Quantico Reconstruction Workflow

**Effective:** 2026-08-24  
**Status:** ACTIVE CONTROL PROCESS

## Governing rule
No page, queue, table, deployment, agent, provider, or workflow is considered repaired because it exists or reports success. Every repair must pass its assigned machine-checkable and/or evidence gate before the next repair is promoted.

## Standard repair sequence

1. **Recover evidence** — canonical source, prior implementation, live runtime, database, provider, and historical lineage.
2. **State the capability contract** — what the capability must do, own, read, write, authorize, return, log, and recover from.
3. **Reconcile live implementation** — map source -> schema -> API/tool -> workflow -> UI -> evidence.
4. **Repair the lowest broken dependency first.**
5. **Run the capability gate.**
6. **Record release-bound evidence.**
7. **Only then move to the next numbered repair.**

## Mandatory evidence chain

`SOURCE -> CONTRACT -> IMPLEMENTATION -> AUTHORIZATION -> EXECUTION -> OUTPUT -> VALIDATION -> AUDIT -> FAILURE RECOVERY -> TEST -> RELEASE EVIDENCE`

## First five control repairs — 2026-08-24

### 1. Test architecture
Gate: repository exposes an executable test command, invariant tests, and a composite quality command.

### 2. CI/CD and promotion controls
Gate: GitHub Actions performs locked install, type check, tests, release-evidence guard, and production build; promotion policy separates preview/staging/production and requires rollback evidence.

### 3. QC evidence drift
Gate: QC claims are tied to exact release evidence and automatically treated as stale when relevant implementation/configuration changes.

### 4. Recovery/security finding drift
Gate: findings record observation/release/verification state; current remediation views exclude stale and superseded findings.

### 5. Schema reconciliation
Gate: recovery schema contains real reconciliation records mapping canonical system sections to live state, gaps, and next actions. Zero-row reconciliation is not acceptable.

## Question policy
Do not interrupt reconstruction for questions that can be resolved from canonical evidence, live systems, or recovery lineage. Ask the Architect only when a decision is genuinely non-derivable, mutually exclusive, financially consequential, legally consequential, or changes a canonical system boundary. Batch questions after the current numbered repair set is completed.

## Completion policy
A numbered repair is `DONE` only when its gate passes in the connected production/source-control environment. If a connected tool cannot perform the final enforcement step (for example account-level branch protection), mark that sub-control `EXTERNAL-ADMIN-REQUIRED` rather than pretending it is complete.
