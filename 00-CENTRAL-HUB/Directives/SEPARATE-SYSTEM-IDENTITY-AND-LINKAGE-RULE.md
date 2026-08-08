# SEPARATE SYSTEM IDENTITY AND LINKAGE RULE

**Authority:** The Architect  
**Status:** CANONICAL / ACTIVE  
**Effective Date:** 08-08-2026  
**Applies To:** All systems governed by Master Systems Buildout

## Architect Ruling

Every named system is treated as a separate governed system unless The Architect explicitly directs otherwise.

A relationship, link, dependency, integration, shared repository reference, shared data source, shared workflow, shared interface, or shared conversation does **not** merge system identity.

## Mandatory Rule

For every separate system, maintain its own:

- System ID
- system name and scope
- source/evidence chain
- specification package
- schema reconciliation
- dependencies and integrations
- implementation status
- repository mapping
- Google Drive / storage references when available
- quality-control and Architect-accountability record
- lifecycle, supersession, and recovery state

## Linkage Semantics

System linkage means one or more of the following only:

- dependency
- integration
- data exchange
- orchestration
- interface relationship
- governance relationship
- shared infrastructure
- shared evidence location

Linkage never means that one linked system is automatically a subsystem, alias, implementation identity, or replacement for another.

## Current Architect-Confirmed Separate Systems

The following are separate systems and must be governed independently:

1. Master Dashboard — `SYS-DASH-001`
2. VisionWeaver — `SYS-VISION-001`
3. LandWeaver — `SYS-LAND-001`
4. Master CEO Dashboard / CEO Dashboard — `SYS-CEO-001`

Each may integrate with or reference the others, but their identities remain separate.

## Shared-Repository / Cross-Hosted Evidence Rule

If evidence for one system is found inside another system's repository, storage folder, conversation, or document package:

1. preserve the evidence where found;
2. classify it as cross-hosted or shared-location evidence;
3. link it to the correct system record;
4. do not reinterpret repository location as proof of system identity;
5. do not move or delete evidence solely to make the storage layout appear cleaner;
6. reconcile the correct canonical location later with full provenance.

## Drive Evidence Rule

The Architect reports that Dashboard, VisionWeaver, LandWeaver, and CEO Dashboard materials have been uploaded to Google Drive.

Until the Drive connector successfully retrieves those files, record them as:

`ARCHITECT-REPORTED DRIVE EVIDENCE / RETRIEVAL PENDING`

Do not downgrade the report to absent evidence, and do not upgrade it to file-verified evidence until the files are actually retrieved and inspected.

## Recovery Correction

Cross-Source Evidence Sweep 001 raised an identity-boundary question for VisionWeaver and Master Dashboard. This ruling resolves that question:

- Master Dashboard is a separate system.
- VisionWeaver is a separate system.
- LandWeaver is a separate system.
- CEO Dashboard is a separate system.

Sweep 001 remains preserved as historical evidence of the prior uncertainty; this directive supersedes only the unresolved identity interpretation, not the underlying evidence collected during that sweep.

## Enforcement

Any future system record, specification, repository mapping, recovery report, dashboard, agent, workflow, or architecture document that collapses separately named linked systems without explicit Architect approval fails the Architect Accountability Gate and must be corrected before deployment.
