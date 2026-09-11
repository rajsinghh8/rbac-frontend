# osa — Routes & Navigation

## How to run
cd /home/ryzen/frontend_generator_backend-test/frontend_runs/run_29f9708a_20260911_100748/project
npm install --legacy-peer-deps && npm run dev
Then open http://localhost:35689

## Routes

| Route | Page file | Description |
|-------|-----------|-------------|
| / | redirects | Redirects to the main screen |
| /login | src/pages/Login.tsx | Public sign-in screen |
| /forgot-password | src/pages/Status.tsx | Password assistance screen |
| /unauthorized | src/pages/Status.tsx | Access-denied screen |
| /dashboard | src/pages/Dashboard.tsx | Role-aware workspace overview |
| /organizations | src/pages/Organizations.tsx | Super-admin organization list |
| /organizations/new | src/pages/EntityForm.tsx | Create organization form |
| /organizations/:id | src/pages/Detail.tsx | Organization detail |
| /organizations/:id/edit | src/pages/EntityForm.tsx | Edit organization form |
| /users | src/pages/Users.tsx | Organization member directory |
| /users/:id | src/pages/Detail.tsx | User detail |
| /projects | src/pages/Projects.tsx | Accessible projects list |
| /projects/new | src/pages/EntityForm.tsx | Create project form |
| /projects/:id | src/pages/Detail.tsx | Project detail |
| /projects/:id/edit | src/pages/EntityForm.tsx | Edit project form |
| /tasks | src/pages/Tasks.tsx | Accessible task list |
| /tasks/new | src/pages/EntityForm.tsx | Create task form |
| /tasks/:id | src/pages/Detail.tsx | Task detail |
| /tasks/:id/edit | src/pages/EntityForm.tsx | Edit or delete task form |
| * | src/pages/Status.tsx | Not found screen |

## Navigation map
- Login -> Dashboard (valid sign-in submission)
- Login -> ForgotPassword (Forgot password link)
- Dashboard -> Projects, Tasks, Organizations (metric cards and list actions)
- Sidebar -> Dashboard, Organizations, People, Projects, Tasks (role-filtered NavLinks)
- Organizations -> OrganizationDetail (table row)
- Organizations -> OrganizationCreate (New organization)
- OrganizationDetail -> OrganizationEdit (Edit button)
- Users -> UserDetail (member row)
- Projects -> ProjectDetail (project card)
- Projects -> ProjectCreate (New project)
- ProjectDetail -> ProjectEdit (Edit button)
- Tasks -> TaskDetail (table row)
- Tasks -> TaskCreate (New task)
- TaskDetail -> TaskEdit (Edit button)
- TaskEdit -> Tasks (confirmed deletion)
- Any protected page -> Login (missing session or logout)
- Any page -> NotFound (unknown URL)

## Shared components
- src/components/Sidebar.tsx — role-filtered sidebar navigation and logout action.
- src/components/TopBar.tsx — workspace search, notifications, and user summary.
- src/components/UI.tsx — page headers, badges, loading/empty states, and button style.

## Design tokens
primary, primary-hover, canvas, surface, muted, ink, secondary, line, success, warning, danger, info.
