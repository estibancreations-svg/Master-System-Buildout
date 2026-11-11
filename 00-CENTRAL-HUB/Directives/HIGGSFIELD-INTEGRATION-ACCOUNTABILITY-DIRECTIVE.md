# HIGGSFIELD INTEGRATION ACCOUNTABILITY DIRECTIVE

**Directive ID:** `DIR-HIGGSFIELD-001`  
**Status:** `ACTIVE_CANON`  
**Effective Date:** `2026-09-18`  
**Authority:** The Architect

## Purpose

Govern integration boundaries between VisionWeaver manuscript-to-film workflows and the `estibancreations-svg/Higgsfield-Integration-Layer` runtime so approvals, provenance, recovery, and credit controls remain explicit and auditable.

## Boundary Rules

1. VisionWeaver owns manuscript intake, storyboard approval, production approval, and distribution approval decisions.
2. Higgsfield Integration Layer owns provider-facing generation calls, job tracking, lease/rate controls, and credit telemetry.
3. Provider success does not bypass approval gates.
4. Failed and partial jobs must be retained as evidence and recovery inputs.
5. Credits and budget controls must be checked before each provider-boundary generation phase.

## Required Stage Gates

The manuscript-to-film package must enforce six gates:

1. Manuscript Intake Approval
2. Storyboard Approval
3. Production Plan + Budget Approval
4. Locked Image/Scene Generation Approval
5. Post-Production Approval
6. Distribution Approval

## Provenance + Recovery Requirements

For each stage, record:

- source manuscript/version identifier
- operator or approver identity
- prompt/spec version used
- upstream provider job ids and status
- retry/recovery path for failed or timed-out jobs
- credit/budget decision receipts

## Runtime Truth Rule

This repository contains governance/specification artifacts for the workflow package. Runtime status can only be promoted to verified with authenticated end-to-end evidence from connected environments.
