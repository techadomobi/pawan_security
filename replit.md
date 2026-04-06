# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Pawan Security Solution (`artifacts/pawan-security`)
- **Type**: React + Vite frontend-only web app
- **Preview path**: `/` (root)
- **Port**: 25222
- **Description**: Multi-page CCTV security company website clone with light theme and rich animations
- **Pages**: Home, About, Services, Gallery, Contact
- **Tech**: React, Vite, Framer Motion, Tailwind CSS, wouter routing
- **Key content**: Pawan Security Solution brand, Delhi CCTV services, contact info

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally
- `pnpm --filter @workspace/pawan-security run dev` — run security website locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
