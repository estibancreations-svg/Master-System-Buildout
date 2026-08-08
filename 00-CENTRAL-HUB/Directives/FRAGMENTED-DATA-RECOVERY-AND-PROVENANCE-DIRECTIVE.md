# FRAGMENTED DATA RECOVERY AND PROVENANCE DIRECTIVE

**Directive ID:** DIR-FRAGMENT-RECOVERY-001  
**Version:** 1.0  
**Status:** ACTIVE / ARCHITECT AUTHORIZED  
**Repository:** `estibancreations-svg/Master-System-Buildout`  
**Branch Authority:** `main` after approved merge  
**Applies To:** conversations, source files, Memory Gems, reconstructed continuity records, system specifications, directives, prompts, build packages, architecture records, implementation evidence, and project-history fragments.

---

# PURPOSE

The Master Systems Buildout has been developed across many conversations, systems, partial exports, uploaded files, repository commits, prompts, build packages, and working sessions. Not every fragment contains a complete conversation or complete system state.

This directive establishes a controlled way to keep working with that fragmented evidence without discarding useful material and without falsely calling incomplete or reconstructed material exact.

The operating principle is:

```text
PRESERVE THE FRAGMENT
        ↓
CLASSIFY ITS INTEGRITY
        ↓
LINK IT TO THE CORRECT CONTINUITY RECORD
        ↓
RECONSTRUCT ONLY WITH DISCLOSURE
        ↓
KEEP SEARCHING FOR STRONGER SOURCES
        ↓
COMPARE AND ACCRETE NEW EVIDENCE
        ↓
UPGRADE THE RECORD WHEN JUSTIFIED
```

Fragments are not failures. They are evidence units whose provenance and limitations must remain visible.

---

# ARCHITECT AUTHORIZATION

The Architect authorized the repository to use incomplete source material as reference points and to reconstruct available continuity from project memory, active model context, repository history, existing files, prior captures, and later-discovered evidence.

This authorization does **not** permit reconstructed material to be labeled verbatim, exact, lossless, or platform-export certified when it is not.

---

# TWO OPERATING MODES

## MODE A — EXACT CAPTURE

Use the existing master conversation capture directive when a complete authoritative source exists.

Target integrity:

```text
EXACT / LOSSLESS / VERIFIED WITHIN CAPTURE BOUNDARY
```

Exact source always outranks reconstructed source.

## MODE B — FRAGMENT RECOVERY

Use this directive when one or more useful fragments exist but no complete authoritative source is available.

Examples:

- A `.txt` file containing only part of a conversation.
- A DOCX that omitted messages.
- A prior Memory Gem that covers only an earlier visible boundary.
- A GitHub directive that proves work occurred but does not contain the conversation itself.
- A project-memory summary of earlier work.
- A repository commit proving a system or artifact existed.
- A conversation record that is exact within one boundary but known to have later uncaptured continuation.
- A build package that documents system maturity but has not yet been reconciled into registries.

Target integrity:

```text
RECONSTRUCTED / PARTIAL / REFERENCE-BASED / NOT VERBATIM CERTIFIED
```

---

# FRAGMENT INTEGRITY CLASSES

Every fragment or recovered record must carry one of these classes.

| Class | Name | Meaning |
|---|---|---|
| F0 | AUTHORITATIVE EXACT SOURCE | Complete authoritative export or directly verified exact source. |
| F1 | EXACT WITHIN KNOWN BOUNDARY | Exact for the captured visible range, but the larger conversation or project may continue. |
| F2 | PARTIAL SOURCE / REFERENCE FRAGMENT | Authentic source material, but incomplete for the whole record. |
| F3 | AUTHORIZED RECONSTRUCTION | Reconstructed from memory, context, files, commits, and other evidence; not verbatim-certified. |
| F4 | INFERRED / UNVERIFIED LEAD | Useful clue that requires corroboration before being treated as established history. |
| F5 | SUPERSEDED / HISTORICAL EVIDENCE | Older or flawed record retained because it documents prior state, process, or correction. |

A single continuity record may link multiple classes at once.

---

# PROVENANCE RULE

Never silently replace a weaker fragment with a stronger one.

Instead:

1. Preserve the original fragment.
2. Add the stronger source as a new evidence unit.
3. Compare them.
4. Record conflicts and corrections.
5. Update the continuity record.
6. Retain the earlier fragment for provenance.
7. Upgrade integrity only to the level justified by the strongest verified evidence.

Example:

```text
Incomplete TXT (F2)
+ GitHub history (F2/F5)
+ Project memory (F3)
= Reconstructed continuity record (F3)

Later complete export (F0)
+ comparison against prior record
= Exact canonical record (F0), while F2/F3/F5 evidence remains preserved
```

---

# FRAGMENT ACCRETION RULE

The repository must be able to grow a record over time.

A newly discovered fragment does not need to complete the entire conversation or system to be useful.

For every new fragment:

1. Assign or link the correct Conversation ID, System ID, Artifact ID, or recovery subject.
2. Preserve the fragment in its original usable form when technically possible.
3. Record source filename, date found, source type, and known boundary.
4. Record what it proves.
5. Record what it does not prove.
6. Compare it against current continuity.
7. Add newly supported facts or exact text without erasing older provenance.
8. Record contradictions.
9. Update the Fragment Recovery Registry.
10. Update the next action to state what evidence would improve the record further.

---

# RECONSTRUCTION RULE

Reconstruction may use:

- Active model-visible conversation context.
- Shared project memory.
- GitHub repository history.
- Existing Memory Gems and manifests.
- Conversation, artifact, capture, work, system, and schema registries.
- User-supplied source files.
- User-supplied build reports and program updates.
- Existing system specifications and architecture documents.
- Earlier reconstruction records.

Reconstruction must not:

- Invent quotations when exact wording is unavailable.
- Label inferred events as exact messages.
- Hide conflicts between sources.
- Delete failed attempts.
- Upgrade integrity because a reconstruction is detailed.

Use labels such as:

```text
GITHUB VERIFIED
EXACT WITHIN VISIBLE BOUNDARY
USER-SUPPLIED REFERENCE
PROJECT MEMORY — NOT VERBATIM
RECONSTRUCTED EVENT
INFERRED — REQUIRES CORROBORATION
```

---

# CONTINUITY RECORD RULE

When exact source is unavailable, create or maintain a continuity record rather than forcing a false Memory Gem.

Preferred destinations:

```text
00-CENTRAL-HUB/INBOX/
00-CENTRAL-HUB/INBOX/Fragment-Recovery/
00-CENTRAL-HUB/INBOX/Reconstruction-Exceptions/
00-CENTRAL-HUB/INBOX/Source-Transcripts/
```

Exact governed Memory Gems remain under:

```text
00-CENTRAL-HUB/Memory-Gems/
```

Do not place reconstructed records in the exact Memory Gem area unless the filename and metadata make the non-exact integrity unmistakable and The Architect explicitly authorizes that routing.

---

# ZILLOW REFERENCE PRECEDENT

The submitted file named `Zillow Integration for Marketing.txt` is a valid preserved reference fragment but is not the complete conversation.

It must remain classified as:

```text
F2 — PARTIAL SOURCE / REFERENCE FRAGMENT
SOURCE MISMATCH FOR COMPLETE TRANSCRIPT PURPOSE
USEFUL FOR PROJECT CONTINUITY AND LATER COMPARISON
```

The existing Zillow reconstructed continuity record is F3 and remains the working continuity record until stronger sources are found.

The older Zillow checkpoint directive using the title `Zillow Property Marketing Integration` remains F5 historical evidence because it proves earlier repository activity and a prior naming error.

---

# REPOSITORY-WIDE APPLICATION

Apply this framework to all records already touched by the Master Systems Buildout process.

This includes:

- Conversation captures.
- Partial Memory Gems.
- Reconstruction exceptions.
- Uploaded transcript files.
- Central Hub records.
- Agent and prompt specifications.
- System architecture files.
- Division build packages.
- Quality Control designs.
- Enterprise Standards and Infrastructure documents.
- Dashboard and application repositories referenced by the System Registry.
- System Library and build-schema work.
- Any later files discovered from earlier fragmented project work.

The objective is not to pretend the project was developed in one linear sequence. The objective is to reconstruct the actual development graph from the evidence that exists.

---

# ACCOUNTABILITY GATE

For every recovery action, ask:

1. What source actually exists?
2. What does it prove?
3. What does it not prove?
4. Is this exact, partial, reconstructed, inferred, or historical?
5. Did the system preserve the original fragment?
6. Did it disclose reconstruction?
7. Did it identify contradictions?
8. Is there a stronger source somewhere else in the project?
9. What evidence would upgrade this record?
10. Is the current continuity good enough to keep working without falsely claiming completeness?

Required disposition:

```text
Recovery Integrity:
Original Fragment Preserved: YES / NO
Reconstruction Used: YES / NO
Conflicts Found: YES / NO
Can Work Continue: YES / NO
Upgrade Evidence Needed:
Final Disposition: ACCEPT AS REFERENCE / ACCEPT AS RECONSTRUCTED CONTINUITY / EXACT / BLOCKED
```

---

# DEFAULT FUTURE BEHAVIOR

When a new fragment is discovered:

```text
DO NOT DISCARD IT
DO NOT FORCE IT TO BE COMPLETE
DO NOT OVERWRITE THE CURRENT RECORD
DO NOT SILENTLY MERGE CONFLICTING TEXT
```

Instead:

```text
PRESERVE → CLASSIFY → LINK → COMPARE → ACCRETE → VERIFY → UPGRADE WHEN JUSTIFIED
```

This directive remains active until The Architect explicitly supersedes it.