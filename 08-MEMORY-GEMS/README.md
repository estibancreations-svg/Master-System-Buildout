# Master Systems Buildout — Memory Gem Archive

## Purpose

This directory preserves the complete conversation feeds that produced the Master Systems Buildout.

A Memory Gem is an exact mirrored archival copy of a conversation from its first available message through its final prompted output.

It is not a summary, extraction, synopsis, outline, cleaned transcript, or collection of selected decisions.

## Exact-Mirror Standard

Every Memory Gem must preserve:

1. Every user message.
2. Every assistant response.
3. The original chronological order.
4. Repeated statements and corrections.
5. Disagreements, revisions, and superseded ideas.
6. The complete development path of the conversation.
7. The final prompted output available in the feed.

Nothing may be trimmed, summarized, condensed, shortened, reorganized, rewritten, corrected, cleaned up, sorted by topic, or omitted because it appears repetitive.

## Separation of Records

Memory Gems and structured system documents are different artifacts.

- **Memory Gem:** Complete, unmodified conversation archive.
- **System Reference:** Organized explanation of a system.
- **Specification:** Requirements for implementation.
- **Operational Document:** Rules and procedures for running the system.

Structured documentation may be developed from a Memory Gem, but it must never replace the complete conversation archive.

## File Naming Standard

Use the following format:

`YYYY-MM-DD__CONVERSATION-TITLE__MEMORY-GEM.md`

When the original start date is unavailable:

`UNDATED__CONVERSATION-TITLE__MEMORY-GEM.md`

Titles should be converted to uppercase kebab case while retaining meaningful project names and document numbers.

## Required File Header

Each Memory Gem should begin with:

```markdown
# MEMORY GEM — [Original Conversation Title]

- **Project:** Master Systems Buildout
- **Record Type:** Exact Conversation Mirror
- **Conversation Start:** [Date or Unknown]
- **Conversation End:** [Date or Active]
- **Archive Status:** Complete / Partial — Source Access Limited
- **Editing Standard:** No summarization, rewriting, correction, condensation, or omission

---
```

The header identifies the archive. The conversation beneath it must remain exact.

## Archive Status Rules

A file may be marked **Complete** only when the full conversation is available from inception through the last prompted output.

When only excerpts or project-context notes are available, the file must be marked:

`Partial — Source Access Limited`

Partial records must never be represented as complete mirrored Memory Gems.

## Current Build Directive

The conversations associated with the Master Systems Buildout are to be added here individually as complete Markdown archives. After the archive is established, their system decisions may be mapped into the governance, architecture, specifications, prompts, database, automation, deployment, and documentation directories.

## Repository Relationship

The intended evidence chain is:

`Complete Conversation Feed → Exact Memory Gem → Structured System Reference → Specification → Buildout → Validation → Deployment`

The Memory Gem archive is the source-history layer of the repository.
