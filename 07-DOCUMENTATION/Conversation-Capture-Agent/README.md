# Conversation Capture and Architect Accountability Agent

**Status:** Manual Pilot  
**Version:** 1.1  
**Repository:** `estibancreations-svg/Master-System-Buildout`

## Purpose

This folder contains operator-facing documentation for the Conversation Capture and Architect Accountability Agent. The system preserves complete source-backed conversations, validates them, applies the Architect Accountability Gate, deploys approved records to GitHub, fetches them back, and updates Central Hub tracking.

## Canonical components

- [Master governing directive](../../00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md)
- [Agent system specification](../../02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT-SPECIFICATION.md)
- [Executable agent prompt](../../03-AI-PROMPTS/Agent-Prompts/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT.md)
- [Repository routing reconciliation](../../00-CENTRAL-HUB/REPOSITORY-STRUCTURE-RECONCILIATION.md)

## Live routing rules

- Canonical Memory Gems: `00-CENTRAL-HUB/Memory-Gems/`
- Raw source transcripts: `00-CENTRAL-HUB/INBOX/Source-Transcripts/`
- Intake records: `00-CENTRAL-HUB/INBOX/`
- Registries: `00-CENTRAL-HUB/Registries/`
- Future validator and automation code: `05-AUTOMATION/Conversation-Capture-Agent/`
- Future deployment files: `06-DEPLOYMENT/Conversation-Capture-Agent/`
- Operator documentation: `07-DOCUMENTATION/Conversation-Capture-Agent/`

Do not create or use `06-AGENTS-AND-AUTOMATION/`.

Do not write to `09-MEMORY-GEMS/` until The Architect approves its final role.

Use `08-CHAT-LOGS/` only when `Archive Mirror: YES` is explicitly supplied.

## Current maturity

```text
Master Directive: INSTALLED — VERSION 1.1
Agent Specification: INSTALLED — VERSION 1.1
Executable Prompt: INSTALLED — VERSION 1.1
Manual Pilot: READY
Deterministic Validator Code: NOT BUILT
GitHub Action: NOT BUILT
Production Bot: NOT BUILT
Deployment Package: NOT BUILT
Operator Documentation: IN PROGRESS
Quality Control Certification: NOT COMPLETED
```

## Operating command

```text
@GitHub

Execute the canonical directive stored at:

00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md

Creation Mode: NEW CONVERSATION RECORD
Status: CHECKPOINT
Archive Mirror: NO
Email Username: [NAME BEFORE @]
Conversation Title: [EXACT FEED TITLE]
Source Transcript: [COMPLETE ATTACHED OR PASTED SOURCE]
Source Claimed Complete: [YES / NO]
First Intended Message: [IDENTIFIER OR OPENING WORDS]
Last Intended Message: [IDENTIFIER OR OPENING WORDS]

Run every phase in order.
Do not skip validation or Architect Accountability Review.
Do not use model memory as the transcript source.
Do not deploy materially improvable work.
Return real GitHub paths and commit SHAs.
```

## Documentation records

- [Version 1.1 update report](01-08-2026_PROMPT-SYSTEM-v1.1-UPDATE-REPORT.md)
- [Version 1.1 package manifest](PROMPT-PACKAGE-v1.1-MANIFEST.txt)
