# forgepass-api

**The backend engine behind ForgePass — contribution indexing, Trust Score computation, and the public API**

This repository is the off-chain backbone of ForgePass. It ingests contributor activity from GitHub, Horizon (Stellar's API), and ecosystem platforms; computes Trust Scores; writes verified credentials to the on-chain contracts; and serves all passport data through a free, open API that any Stellar project can consume.

> Part of the [ForgePass](https://github.com/forgepass-xyz) open-source ecosystem.

---

## What This Service Does

ForgePass separates trust from speed. The Soroban contracts store what needs to be permanent and verifiable. This API handles everything that needs to be fast.

### Core Responsibilities

**Contribution Ingestion**
Pulls and indexes contributor activity from multiple sources:
- GitHub (OAuth-authenticated) — pull requests, code reviews, and commit history against Stellar ecosystem repositories
- Stellar Horizon API — on-chain account history, DEX trades, Aquarius LP positions, transaction volume
- GrantFox — bounty completions and escrow payouts
- Trustless Work — milestone completions recorded on-chain
- SCF — grant application history and delivery status

**Scoring Engine**
Runs the open Trust Score algorithm against each contributor's aggregated signals. The algorithm is versioned and fully documented — every weight and calculation is auditable. No black box.

**On-chain Writing**
After scoring, calls the [`forgepass-contracts`](../forgepass-contracts) Soroban contracts to anchor updated Trust Scores and write new verified credentials to the contributor's Builder Passport.

**Public API**
Exposes a REST and GraphQL API — free and open to any Stellar project. Returns passport data, Trust Scores, contributor graphs, and badge records at API speed using PostgreSQL as the read layer.

**Sybil Resistance**
Enforces verification gates during onboarding: Stellar account age checks, minimum XLM balance thresholds, and GitHub verification requirements to make it meaningfully harder to game contributor reputation.

---

## API Overview

The public API is versioned and freely accessible. No authentication required for read operations.

```
GET  /v1/passport/:stellarAddress     — Full passport for a contributor
GET  /v1/score/:stellarAddress        — Trust Score and signal breakdown
GET  /v1/badges/:stellarAddress       — Achievement badges earned
GET  /v1/graph/:stellarAddress        — Contributor graph (collaborators, shared projects)
GET  /v1/contributors                 — Paginated contributor index with filtering
```

Full API reference: [forgepass-docs](../forgepass-docs)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | NestJS (Node.js / TypeScript) |
| Database | PostgreSQL |
| Blockchain | Stellar SDK (JS) + Horizon API |
| Smart Contracts | Soroban SDK (writes to `forgepass-contracts`) |
| Auth | GitHub OAuth 2.0 |
| CI | GitHub Actions (automated contribution indexing on repo events) |
| AI (opt-in) | Anthropic API — generates human-readable contributor summaries |

---

## Development Setup

> Requires Node.js 18+, PostgreSQL, and a Stellar Horizon endpoint (testnet or mainnet).

```bash
# Clone the repo
git clone https://github.com/forgepass-xyz/forgepass-api
cd forgepass-api

# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env

# Run database migrations
npm run migrate

# Start the development server
npm run start:dev
```

See [forgepass-docs](../forgepass-docs) for environment variable reference and testnet configuration.

---

## Relationship to Other Repos

- Reads from and writes to **[`forgepass-contracts`](../forgepass-contracts)** (Soroban).
- Serves data consumed by **[`forgepass-app`](../forgepass-app)** (the contributor dashboard).
- Powers the **[`forgepass-sdk`](../forgepass-sdk)** — third-party projects use the SDK to call this API.

---

## Contributing

Issues are labelled `good-first-issue` for accessible entry points. TypeScript and NestJS familiarity is helpful but not required for many issues.

All code is **MIT licensed**.