# Rbac Frontend — Routes & Navigation

## How to run
cd /home/ryzen/frontend_generator_backend-test/frontend_runs/run_468cbd88_20260911_024022/project
npm install --legacy-peer-deps && npm run dev
Then open http://localhost:57653

## Routes

| Route | Page file | Description |
|-------|-----------|-------------|
| / | redirects | Redirects to the dashboard |
| /login | src/pages/Login.tsx | Public sign-in screen |
| /forgot-password | src/pages/StatusPages.tsx | Password recovery guidance |
| /dashboard | src/pages/Dashboard.tsx | Authenticated role-aware overview |
| /organizations | src/pages/Resources.tsx | Organization listing |
| /organizations/new | src/pages/Resources.tsx | Create organization form |
| /organizations/:id | src/pages/Resources.tsx | Organization details |
| /projects | src/pages/Resources.tsx | Project listing |
| /projects/new | src/pages/Resources.tsx | Create project form |
| /projects/:id | src/pages/Resources.tsx | Project details |
| /tasks | src/pages/Resources.tsx | Task listing |
| /tasks/new | src/pages/Resources.tsx | Create task form |
| /tasks/:id | src/pages/Resources.tsx | Task details |
| /access-denied | src/pages/StatusPages.tsx | Permission failure screen |
| * | src/pages/StatusPages.tsx | Not-found screen |

## Navigation map
- Login -> Dashboard (successful credentials)
- Login -> Forgot password (recovery action)
- Dashboard -> Organizations, Projects, Tasks (statistic cards)
- Dashboard -> Create Project and Create Task (quick actions)
- Sidebar -> Dashboard, Organizations, People, Projects, Tasks (role-filtered links)
- Organizations, Projects, Tasks -> Create form (Create button)
- Organizations, Projects, Tasks -> Detail (click table row)
- Create form -> Detail (successful local persistence)
- Detail -> List (Back button)
- Any page -> Login (logout)
- Any page -> NotFound (unknown URL)

## Shared components
- src/components/Sidebar.tsx — role-filtered sidebar navigation.
- src/components/TopBar.tsx — workspace identity and confirmed logout action.

## Design tokens
primary, primary-dark, surface, canvas, muted, border, ink, success, warning, danger, accent.
