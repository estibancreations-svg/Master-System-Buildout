# API Integration for Developers

## VisionWeaver integration surface

VisionWeaver should treat Higgsfield as a staged orchestration backend:

1. submit manuscript intake request
2. poll or subscribe to parsing completion
3. upload reference assets and bind them to entities
4. request storyboard generation
5. request production planning and budget summary
6. dispatch approved clip-generation jobs
7. hand accepted clips into post-production orchestration
8. trigger distribution/export packaging

## Backend expectations

The backend must expose:

- authenticated manuscript upload endpoint
- generation job endpoints with idempotency support
- approval mutation endpoints
- audit retrieval endpoints
- budget and credit summary endpoints
- recovery/resume endpoints

## Data contracts

All client-visible records should include workflow ID, stage ID, approval state, and parent artifact references so the UI can present truthful status.
