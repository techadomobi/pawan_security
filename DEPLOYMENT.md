# Deployment Guide

## Runtime Requirements

- Node.js `>=20.19.0` (recommended: `22.12.0`, see `.nvmrc`)
- pnpm `10.x`

## Install

```bash
pnpm install
```

## Validate Before Deploy

```bash
pnpm run deploy:check
```

This runs:
- Node version check
- full workspace typecheck
- workspace builds

## Deploy Frontend (Pawan Security)

Build command:

```bash
pnpm run build:web
```

Output directory:
- `artifacts/pawan-security/dist`

Use this folder as the static publish directory on your hosting provider.

## Deploy API Server

Build command:

```bash
pnpm run build:api
```

Start command:

```bash
pnpm run start:api
```

Required environment variables:
- `PORT` (required by `artifacts/api-server/src/index.ts`)

## Notes

- Root `preinstall` enforces pnpm and removes lockfiles from other package managers.
- If your machine is on Node 18, frontend builds will fail because Vite 7 requires Node 20.19+ or 22+.
