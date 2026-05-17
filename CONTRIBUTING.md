# Contributing to ForgePass

## Getting Started
1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/forgepass-core`
3. Install dependencies: `npm install` from root
4. Copy environment variables: `cp apps/api/.env.example apps/api/.env`
5. Start all packages: `npm run dev`

## Branch Naming
- `feat/issue-number-short-description`
- `fix/issue-number-short-description`
- `chore/description`

## Commit Format
Conventional commits:
- `feat(api): add passport read endpoint`
- `fix(web): correct badge IPFS loading`
- `chore(docs): update integration guide`

## Running the Full Stack Locally
- PostgreSQL must be running locally
- apps/api runs on port 3001
- apps/web runs on port 3000
- docs runs on port 3002

## PR Requirements
- CI must be passing
- At least one review required
- Issue must be linked (Closes #NUMBER)
- No direct pushes to main

## Issue Labels
- `phase-0` through `phase-5` — development phase
- `good-first-issue` — accessible entry points
- `bug` — something is broken
- `feat` — new feature

## Packages
- `apps/api` — TypeScript, NestJS, PostgreSQL
- `apps/web` — TypeScript, Next.js, Tailwind CSS
- `docs` — MDX, documentation writing
