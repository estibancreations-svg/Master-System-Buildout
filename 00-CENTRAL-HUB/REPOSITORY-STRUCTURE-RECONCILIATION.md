# REPOSITORY STRUCTURE RECONCILIATION

**Status:** ACTIVE CORRECTION  
**Date:** 31-07-2026  
**Repository:** `estibancreations-svg/Master-System-Buildout`  
**Branch:** `main`

## Purpose

Correct path-routing guidance that referenced a proposed top-level folder named:

```text
06-AGENTS-AND-AUTOMATION/
```

That folder is not part of the live repository structure. The live repository uses numbered functional areas already established at the root.

## Controlling Live Structure

Use these locations for Conversation Capture Agent work:

| Work Type | Canonical Location |
|---|---|
| Central governing directive | `00-CENTRAL-HUB/Directives/` |
| Agent and system specification | `02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/` |
| Executable agent prompt | `03-AI-PROMPTS/Agent-Prompts/` |
| Automation and validator implementation | `05-AUTOMATION/Conversation-Capture-Agent/` |
| Deployment configuration | `06-DEPLOYMENT/Conversation-Capture-Agent/` |
| Operator and user documentation | `07-DOCUMENTATION/Conversation-Capture-Agent/` |
| Verbatim chat-log records | `08-CHAT-LOGS/` |
| Existing top-level Memory Gem area | `09-MEMORY-GEMS/` |
| Central Hub Memory Gems and intake | `00-CENTRAL-HUB/Memory-Gems/` and `00-CENTRAL-HUB/INBOX/` |

## Canonical Files Established

### Master Directive

```text
00-CENTRAL-HUB/Directives/MASTER-CONVERSATION-CAPTURE-ACCOUNTABILITY-AND-GITHUB-DEPLOYMENT-DIRECTIVE.md
```

### Agent Specification

```text
02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT-SPECIFICATION.md
```

### Agent Prompt

```text
03-AI-PROMPTS/Agent-Prompts/CONVERSATION-CAPTURE-AND-ARCHITECT-ACCOUNTABILITY-AGENT.md
```

## Correction Rule

When any prior outline, prompt, or repository map conflicts with the live root structure above:

1. Use the live root structure.
2. Do not create a competing top-level folder.
3. Record the conflict.
4. Route each artifact by function.
5. Preserve the old record for history, but do not treat the conflicting path as canonical.

## Unresolved Repository Question

The repository currently contains more than one conversation-record area:

```text
00-CENTRAL-HUB/Memory-Gems/
08-CHAT-LOGS/
09-MEMORY-GEMS/
```

Until The Architect approves a final consolidation rule:

- `00-CENTRAL-HUB/Memory-Gems/` remains the canonical destination for Central Hub-governed Memory Gem capture.
- `08-CHAT-LOGS/` remains the established verbatim chat-log archive organized by LLM and email identity.
- `09-MEMORY-GEMS/` must not be silently repurposed or removed.
- Future automation must not duplicate the same canonical record across all three locations.

## Accountability Record

```text
Architect Intent Match: PASS
Request-to-Output Match: PASS
Repository Compliance: PASS
Unsupported Folder Removed From Routing: YES
Material Improvement Applied: YES
Final Disposition: CORRECTION APPLIED
```
