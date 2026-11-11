# Higgsfield / VisionWeaver Quick Start

## What is implemented here

- Governance directive for Higgsfield integration accountability
- Six-stage manuscript-to-film specification package
- Orchestrator prompt and six automation specification files
- Deployment specification YAMLs and operator runbooks
- Validation script for required files, YAML format, registry references, and package links

## What this does not claim

- No claim of authenticated production deployment in this repository
- No claim that provider credentials are configured in live environments
- No claim that end-to-end runtime tests have completed in this session

## How to validate package integrity locally

From repository root:

```bash
python 05-AUTOMATION/Integrations/Higgsfield-VisionWeaver/validate_higgsfield_package.py
```

If validation passes, proceed to authenticated integration testing in connected runtime environments.
