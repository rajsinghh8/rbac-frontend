# osa

osa is a role-aware workspace for managing organizations, people, projects, and tasks. It provides local mock data persistence for a complete frontend workflow.

## Tech stack
React + TypeScript, Vite, Tailwind CSS, React Router, axios.

## Getting started
```
npm install --legacy-peer-deps
cp .env.example .env
npm run dev
```
Then open http://localhost:35689

## Environment variables
See .env.example. VITE_API_URL is optional — every entity runs on local mock data (USE_MOCK = true in src/data/store.ts) until it's set and each entity's flag is flipped to false.

## Project structure
src/api — shared axios client and token interceptor.
src/auth — local mock authentication helpers.
src/components — shared layout and display components.
src/data — typed seed data and localStorage CRUD store.
src/pages — routed workspace screens and smoke tests.
src/routes — browser router and access guards.
src/types — shared domain types.
src/validation — reusable form validators.
