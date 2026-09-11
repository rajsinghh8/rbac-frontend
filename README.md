# Rbac Frontend

A responsive role-aware workspace for viewing organizations, projects, and tasks. It includes local mock authentication and localStorage-backed create flows for demos.

## Tech stack
React + TypeScript, Vite, Tailwind CSS, React Router, axios.

## Getting started
```
npm install --legacy-peer-deps
cp .env.example .env
npm run dev
```
Then open http://localhost:57653

## Environment variables
See .env.example. VITE_API_URL is optional — every entity runs on local mock data (USE_MOCK = true in src/data/store.ts) until it's set and each entity's flag is flipped to false.

## Project structure
src/api — shared axios client.
src/auth — mock authentication helpers.
src/components — application shell navigation.
src/data — typed seed data and localStorage CRUD gate.
src/pages — route-level screens.
src/types — shared entity types.
src/validation — reusable form validation.
