#!/usr/bin/env python3
from __future__ import annotations

import re
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[3]

REQUIRED_FILES = [
    "00-CENTRAL-HUB/Directives/HIGGSFIELD-INTEGRATION-ACCOUNTABILITY-DIRECTIVE.md",
    "02-SYSTEM-SPECIFICATIONS/Higgsfield-Manuscript-to-Film-Production/INDEX.md",
    "03-AI-PROMPTS/Agent-Prompts/VISIONWEAVER-HIGGSFIELD-MANUSCRIPT-TO-FILM-ORCHESTRATOR.md",
    "06-DEPLOYMENT/Cloud/Higgsfield-VisionWeaver/higgsfield-visionweaver-api.deployment.yaml",
    "06-DEPLOYMENT/Cloud/Higgsfield-VisionWeaver/higgsfield-visionweaver-workers.deployment.yaml",
]

STAGE_SPECS = [
    "05-AUTOMATION/Integrations/Higgsfield-VisionWeaver/STAGE-01-MANUSCRIPT-INTAKE.yaml",
    "05-AUTOMATION/Integrations/Higgsfield-VisionWeaver/STAGE-02-STORYBOARDING.yaml",
    "05-AUTOMATION/Integrations/Higgsfield-VisionWeaver/STAGE-03-PRODUCTION-PLANNING.yaml",
    "05-AUTOMATION/Integrations/Higgsfield-VisionWeaver/STAGE-04-MOVIE-CREATION.yaml",
    "05-AUTOMATION/Integrations/Higgsfield-VisionWeaver/STAGE-05-POST-PRODUCTION.yaml",
    "05-AUTOMATION/Integrations/Higgsfield-VisionWeaver/STAGE-06-DISTRIBUTION.yaml",
]

REGISTRY_FILES = [
    "00-CENTRAL-HUB/Registries/SYSTEM-REGISTRY.md",
    "00-CENTRAL-HUB/REPOSITORY-MAP.md",
    "00-CENTRAL-HUB/INDEX.md",
]


def check_files_exist() -> list[str]:
    errors: list[str] = []
    for rel in REQUIRED_FILES + STAGE_SPECS + REGISTRY_FILES:
        if not (ROOT / rel).exists():
            errors.append(f"Missing required file: {rel}")
    return errors


def check_stage_yaml() -> list[str]:
    errors: list[str] = []
    required_keys = {"stage", "name", "owner_system", "approval_gate", "provider_boundary", "recovery", "cost_control", "next_stage"}
    for rel in STAGE_SPECS:
        p = ROOT / rel
        data = yaml.safe_load(p.read_text(encoding="utf-8"))
        if not isinstance(data, dict):
            errors.append(f"YAML root must be mapping: {rel}")
            continue
        missing = required_keys - set(data.keys())
        if missing:
            errors.append(f"Missing keys {sorted(missing)} in {rel}")
    return errors


def check_registry_mentions() -> list[str]:
    errors: list[str] = []
    expected = [
        "Higgsfield-Integration-Layer",
        "Higgsfield-Manuscript-to-Film-Production",
        "VISIONWEAVER-HIGGSFIELD-MANUSCRIPT-TO-FILM-ORCHESTRATOR",
    ]
    combined = "\n".join((ROOT / rel).read_text(encoding="utf-8") for rel in REGISTRY_FILES)
    for token in expected:
        if token not in combined:
            errors.append(f"Missing registry/index reference token: {token}")
    return errors


def check_internal_links() -> list[str]:
    errors: list[str] = []
    md_files = [ROOT / "02-SYSTEM-SPECIFICATIONS/Higgsfield-Manuscript-to-Film-Production/INDEX.md"]
    link_pattern = re.compile(r"\[[^\]]+\]\(([^)]+)\)")
    for md in md_files:
        text = md.read_text(encoding="utf-8")
        for link in link_pattern.findall(text):
            if link.startswith("http") or link.startswith("#"):
                continue
            target = (md.parent / link).resolve()
            if not target.exists():
                errors.append(f"Broken internal link in {md.relative_to(ROOT)} -> {link}")
    return errors


def main() -> int:
    errors = []
    errors.extend(check_files_exist())
    errors.extend(check_stage_yaml())
    errors.extend(check_registry_mentions())
    errors.extend(check_internal_links())

    if errors:
        print("Higgsfield package validation FAILED")
        for err in errors:
            print(f"- {err}")
        return 1

    print("Higgsfield package validation PASSED")
    return 0


if __name__ == "__main__":
    sys.exit(main())
