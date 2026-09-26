# Higgsfield / VisionWeaver Operator Runbook

## Purpose

Operate the six-stage manuscript-to-film workflow with governed approvals and recovery paths.

## Execution model

- Stage 01–03: VisionWeaver intake/planning ownership
- Stage 04: Higgsfield Integration Layer generation ownership
- Stage 05–06: VisionWeaver + Publishing release ownership

## Operator checks before each run

1. Confirm upstream manuscript package and rights metadata.
2. Confirm prior stage approval receipt exists.
3. Confirm budget/credit policy for provider-bound stages.
4. Confirm expected environment variables are present in runtime environment.

## Recovery summary

- Intake/parse failures: retry Stage 01 with corrected package.
- Provider job failures: retry Stage 04 scene jobs using resumable queue.
- Post-production failures: rerender targeted outputs only.
- Distribution failures: retry idempotent release token path.

## Runtime status boundary

This repository records specification + governance package status. Runtime verification requires authenticated execution evidence from deployed environments.
