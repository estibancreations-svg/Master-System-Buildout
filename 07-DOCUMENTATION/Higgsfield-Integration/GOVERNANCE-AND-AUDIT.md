# Governance and Audit

## What gets logged

The subsystem logs:

- generation calls
- prompts and parameters
- credit charges and adjustments
- approvals and rejections
- modification requests
- rollback events
- export and posting receipts

## How to investigate a run

Use the workflow ID to retrieve:

- manuscript record
- storyboard versions
- production plan
- clip modification history
- final exports
- distribution receipts

## Accountability rule

The system must always be able to answer who changed what, when, why, and from which parent artifact the current asset was derived.

## Recovery rule

Interrupted or incomplete generations remain in the audit trail as preserved fragments until a new approved version supersedes them.
