# REGISTRIES INDEX

- [Conversation Registry](CONVERSATION-REGISTRY.md)
- [Artifact Registry](ARTIFACT-REGISTRY.md)
- [System Registry](SYSTEM-REGISTRY.md)
- [Capture Ledger](CAPTURE-LEDGER.md)
- [Work Tracker](WORK-TRACKER.md)
- [Fragment Recovery Registry](FRAGMENT-RECOVERY-REGISTRY.md)

## Fragment Recovery Governance

- **Directive:** [Fragmented Data Recovery and Provenance Directive](../Directives/FRAGMENTED-DATA-RECOVERY-AND-PROVENANCE-DIRECTIVE.md)
- **Separate System Identity Rule:** [Separate System Identity and Linkage Rule](../Directives/SEPARATE-SYSTEM-IDENTITY-AND-LINKAGE-RULE.md)
- **Recovery Baseline:** [08-08-2026 Master Systems Buildout Fragmented Data Recovery Baseline](../INBOX/Fragment-Recovery/08-08-2026_MASTER-SYSTEMS-BUILDOUT_FRAGMENTED-DATA-RECOVERY-BASELINE.md)
- **Cross-Source Sweep:** [08-08-2026 Cross-Source Evidence Sweep 001](../INBOX/Fragment-Recovery/08-08-2026_CROSS-SOURCE-EVIDENCE-SWEEP-001.md)
- **Architect Identity Correction:** [08-08-2026 Architect System Identity Correction 001](../INBOX/Fragment-Recovery/08-08-2026_ARCHITECT-SYSTEM-IDENTITY-CORRECTION-001.md)
- **Operating Rule:** Preserve incomplete fragments, classify integrity, link provenance, reconstruct only with disclosure, upgrade records only when stronger evidence supports the upgrade, and never collapse separately named linked systems without explicit Architect direction.
- **Integrity Classes:** `F0` authoritative exact source; `F1` exact within boundary; `F2` partial/reference fragment; `F3` authorized reconstruction; `F4` inferred/unverified lead; `F5` superseded/historical evidence.
- **Current Source Access Note:** GitHub repositories were inventoried in Sweep 001. The Architect now reports Drive access granted and separate Drive packages for Master Dashboard, VisionWeaver, LandWeaver, and CEO Dashboard, but the runtime still prevented Drive retrieval during the current execution. These packages remain `ARCHITECT-REPORTED / RETRIEVAL PENDING`, not absent.

## Current Checkpoint

- **Conversation:** `CONV-28072026-001` — `CHATGPT-ESTIBANCREATIONS-MD-FILES-FOR-GITHUB`
- **Capture:** `CAP-31072026-001`
- **Status:** `CHECKPOINT / ONGOING`
- **Message Count:** `24`
- **Manifest:** [31-07-2026 Memory Gem Manifest](../Memory-Gems/31-07-2026_CHATGPT-ESTIBANCREATIONS-MD-FILES-FOR-GITHUB_MEMORY-GEM-MANIFEST.md)
- **Integrity:** `VERIFIED_WITHIN_CAPTURE_BOUNDARY`
- **Known Correction:** `00-CENTRAL-HUB/Directives/MASTER-MEMORY-GEM-CAPTURE-DIRECTIVE.md` was not found in the live repository; the uploaded directive governed this execution.

## Separate System Identity — Current Ruling

The Architect has confirmed that linked systems remain separate systems.

| System ID | System | Current Evidence State |
|---|---|---|
| `SYS-DASH-001` | Master Dashboard | Separate system; repository evidence verified; separate Drive package reported / retrieval pending |
| `SYS-VISION-001` | VisionWeaver | Separate system; substantial cross-hosted repository evidence + exact conversation evidence; separate Drive package reported / retrieval pending |
| `SYS-LAND-001` | LandWeaver | Separate system; exact conversation evidence; separate Drive package reported / retrieval pending |
| `SYS-CEO-001` | Master CEO Dashboard / CEO Dashboard | Separate system; repository design evidence verified; separate Drive package reported / retrieval pending |

VisionWeaver material found in `estibancreations-svg/Master-dashboard-` is classified as cross-hosted evidence. It does not make VisionWeaver a subsystem or alias of Master Dashboard.

## Cross-Source Recovery Upgrade

- **VisionWeaver:** now has repository-backed F1/F2 implementation and rebuild evidence, including substantial architecture/reconstruction manifests and application code. It is independently registered as `SYS-VISION-001`.
- **Master Dashboard:** remains independently registered as `SYS-DASH-001`; shared repository location does not merge identity with VisionWeaver.
- **LandWeaver:** independently registered as `SYS-LAND-001`; Drive retrieval and implementation evidence remain pending.
- **Master CEO Dashboard:** `SYS-CEO-001` has strengthened F1/F2 repository design evidence, including three architecture/page-sketch images plus explicit schema/C-Suite/CEO-AI authority links. This is not yet proof of full application implementation.
- **Historical/Shell Lead:** `estibancreations-svg/-HisMajesty0225-CEO-Dashboard` reports size `0` and is retained only as F4/F5 shell/historical evidence unless future content appears.

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
