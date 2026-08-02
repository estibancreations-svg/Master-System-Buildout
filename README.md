# Master-System-Buildout

A comprehensive enterprise system architecture and governance framework.

## Directory Structure

- **00-CENTRAL-HUB** - Central system of record for directives, conversation intake, Memory Gems, registries, indexes, repository mapping, and continuity control
- **00-GOVERNANCE** - Enterprise governance policies and operational rules
- **01-ARCHITECTURE** - System architecture documentation and design specifications
- **02-SYSTEM-SPECIFICATIONS** - Detailed specifications for core systems and agents
- **03-AI-PROMPTS** - AI agent prompts and system instructions
- **04-DATABASE-DESIGN** - Database schemas and data architecture
- **05-AUTOMATION** - Workflow automation, APIs, integrations, validators, and agent implementation
- **06-DEPLOYMENT** - Deployment configurations and infrastructure
- **07-DOCUMENTATION** - User guides, training, and administrative documentation
- **08-CHAT-LOGS** - Verbatim conversation archives organized by LLM and email identity
- **09-MEMORY-GEMS** - Existing top-level Memory Gem area; relationship to Central Hub Memory Gems remains subject to repository reconciliation
- **99-ARCHIVE** - Historical records and archived materials

## Repository Routing Rule

Use the live functional structure above. Do not create a competing top-level `06-AGENTS-AND-AUTOMATION` directory.

Conversation Capture Agent materials are routed as follows:

- Governing directive: `00-CENTRAL-HUB/Directives/`
- System specification: `02-SYSTEM-SPECIFICATIONS/Conversation-Capture-Agent/`
- Executable agent prompt: `03-AI-PROMPTS/Agent-Prompts/`
- Automation implementation: `05-AUTOMATION/Conversation-Capture-Agent/`
- Deployment configuration: `06-DEPLOYMENT/Conversation-Capture-Agent/`
- Operator documentation: `07-DOCUMENTATION/Conversation-Capture-Agent/`

See [`00-CENTRAL-HUB/REPOSITORY-STRUCTURE-RECONCILIATION.md`](00-CENTRAL-HUB/REPOSITORY-STRUCTURE-RECONCILIATION.md) for the controlling path correction and the unresolved relationship among Central Hub Memory Gems, `08-CHAT-LOGS`, and `09-MEMORY-GEMS`.

## Active Conversation Records

- [Amazon Partnership Strategy — Active Reconstructed Memory Gem](00-CENTRAL-HUB/INBOX/01-08-2026_CHATGPT-ESTIBANCREATIONS-AMAZON-PARTNERSHIP-STRATEGY_ACTIVE-RECONSTRUCTED-MEMORY-GEM.md)
- [Amazon Partnership Strategy — Reconstruction Exception Disclosure](00-CENTRAL-HUB/INBOX/Reconstruction-Exceptions/01-08-2026_AMAZON-PARTNERSHIP-STRATEGY_RECONSTRUCTION-EXCEPTION.md)

## Getting Started

Navigate to each directory to find detailed documentation for each system component.
