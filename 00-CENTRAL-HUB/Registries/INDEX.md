# REGISTRIES INDEX

- [Conversation Registry](CONVERSATION-REGISTRY.md)
- [Artifact Registry](ARTIFACT-REGISTRY.md)
- [System Registry](SYSTEM-REGISTRY.md)
- [Capture Ledger](CAPTURE-LEDGER.md)
- [Work Tracker](WORK-TRACKER.md)
- [Fragment Recovery Registry](FRAGMENT-RECOVERY-REGISTRY.md)

## Fragment Recovery Governance

- **Directive:** [Fragmented Data Recovery and Provenance Directive](../Directives/FRAGMENTED-DATA-RECOVERY-AND-PROVENANCE-DIRECTIVE.md)
- **Recovery Baseline:** [08-08-2026 Master Systems Buildout Fragmented Data Recovery Baseline](../INBOX/Fragment-Recovery/08-08-2026_MASTER-SYSTEMS-BUILDOUT_FRAGMENTED-DATA-RECOVERY-BASELINE.md)
- **Operating Rule:** Preserve incomplete fragments, classify integrity, link provenance, reconstruct only with disclosure, and upgrade records only when stronger evidence supports the upgrade.
- **Integrity Classes:** `F0` authoritative exact source; `F1` exact within boundary; `F2` partial/reference fragment; `F3` authorized reconstruction; `F4` inferred/unverified lead; `F5` superseded/historical evidence.

## Current Checkpoint

- **Conversation:** `CONV-28072026-001` — `CHATGPT-ESTIBANCREATIONS-MD-FILES-FOR-GITHUB`
- **Capture:** `CAP-31072026-001`
- **Status:** `CHECKPOINT / ONGOING`
- **Message Count:** `24`
- **Manifest:** [31-07-2026 Memory Gem Manifest](../Memory-Gems/31-07-2026_CHATGPT-ESTIBANCREATIONS-MD-FILES-FOR-GITHUB_MEMORY-GEM-MANIFEST.md)
- **Integrity:** `VERIFIED_WITHIN_CAPTURE_BOUNDARY`
- **Known Correction:** `00-CENTRAL-HUB/Directives/MASTER-MEMORY-GEM-CAPTURE-DIRECTIVE.md` was not found in the live repository; the uploaded directive governed this execution.

## Authorized Reconstructed Conversation — Zillow Integration for Marketing

- **Conversation:** `CONV-07082026-001` — `ChatGPT-ESTIBANCrEATIONS-Zillow Integration for Marketing`
- **Capture:** `CAP-07082026-001`
- **Status:** `CHECKPOINT / ACTIVE / RECONSTRUCTED`
- **Recovered Events:** `32`
- **Exact Platform Message Count:** `NOT CERTIFIED`
- **Record:** [Active Reconstructed Memory Gem](../INBOX/07-08-2026_CHATGPT-ESTIBANCrEATIONS-Zillow-Integration-for-Marketing_ACTIVE-RECONSTRUCTED-MEMORY-GEM.md)
- **Exception:** [Reconstruction Exception](../INBOX/Reconstruction-Exceptions/07-08-2026_ZILLOW-INTEGRATION-FOR-MARKETING_RECONSTRUCTION-EXCEPTION.md)
- **Prior Source Block:** [Source Validation Block](../INBOX/07-08-2026_CHATGPT-ESTIBANCrEATIONS-Zillow-Integration-for-Marketing_SOURCE-VALIDATION-BLOCK.md)
- **Submitted `.txt` Classification:** `F2 — PARTIAL SOURCE / REFERENCE FRAGMENT`; preserved as a useful project reference, but not the complete conversation.
- **Integrity:** `RECONSTRUCTED FROM PROJECT MEMORY + ACTIVE MODEL CONTEXT + GITHUB HISTORY / NOT VERBATIM CERTIFIED`
- **Title Correction:** Active title is `Zillow Integration for Marketing`; prior July directive used `Zillow Property Marketing Integration` and remains preserved as provenance.
- **Accretion Rule:** Add future Zillow fragments to the evidence chain; compare them against current continuity; do not discard or silently overwrite earlier fragments.
- **Next Action:** Compare against a complete platform export or additional source fragments if available; do not relabel as verbatim-certified without successful comparison.
