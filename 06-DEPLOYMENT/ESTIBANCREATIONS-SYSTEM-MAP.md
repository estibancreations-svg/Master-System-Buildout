# Estibancreations Canonical System Map

This repository is the enterprise planning and governance source for the Estibancreations system family.

## Authority

- Architect: Estibancreations
- Canonical GitHub: estibancreations-svg
- Verified operational email: estibancreations@gmail.com
- Final authority: the Architect approves deployments, OAuth/provider changes, migrations, publishing, and destructive actions.

## Platform Map

| System | Repository / Source | Runtime target | Current state |
|---|---|---|---|
| CEO Dashboard | estibancreations-svg/MASTER_CEO_DASHBOARD | Vercel master-ceo-dashboard.vercel.app | Live deployment verified; Supabase OTP blocks unprovisioned email |
| VisionWeaver | MASTER_CEO_DASHBOARD production source and release docs | Shared Vercel/Supabase path | Source present; authenticated workflow still needs smoke test |
| THELMA AI | This repository governance/training material plus dashboard references | n8n or controlled serverless runtime | Staged; separate runtime not verified |
| GrantOS | This repository specifications and system library | Supabase + future app runtime | Staged; runtime mapping required |
| LandWeaver | This repository specifications and dashboard registry references | Supabase + future app runtime | Staged; runtime mapping required |

## Connected Accounts

- GitHub: Estiban Creations / estibancreations-svg
- Vercel: Estibancreations team estibancreations101
- Supabase: Estibancreations' Org, project Master Dashboard
- Lovable: Estiban's Lovable workspace, published Estiban Command Nexus
- Figma: connected account currently named Steven Henry / seniorestibancreations@gmail.com; treat as a provider account alias, not a different Architect. Account-level Figma rename/email changes require explicit action in Figma.

## Required Next Gates

- Provision the intended executive email in Supabase Auth or use the existing provisioned account.
- Configure and verify Google OAuth.
- Configure and verify Apple OAuth.
- Attach and catalog Figma source files.
- Assign real deployment targets to THELMA, GrantOS, and LandWeaver.
- Run authenticated end-to-end smoke tests before declaring each system live.

_Last verified: 2026-08-30._