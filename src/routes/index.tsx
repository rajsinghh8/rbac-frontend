import { Navigate, createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { isAuthenticated } from '../auth/auth'
import { Dashboard } from '../pages/Dashboard'
import { Detail } from '../pages/Detail'
import { EntityForm } from '../pages/EntityForm'
import { Login } from '../pages/Login'
import { Organizations } from '../pages/Organizations'
import { Projects } from '../pages/Projects'
import { ForgotPassword, NotFound, Unauthorized } from '../pages/Status'
import { Tasks } from '../pages/Tasks'
import { Users } from '../pages/Users'

function RequireAuth({ children }: { children: JSX.Element }) { return isAuthenticated() ? children : <Navigate to="/login" replace /> }
function RoleGate({ roles, children }: { roles: string[]; children: JSX.Element }) { const role = JSON.parse(localStorage.getItem('auth_token') || '{}').role; return roles.includes(role) ? children : <Navigate to="/unauthorized" replace /> }

export const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/unauthorized', element: <Unauthorized /> },
  { path: '/', element: <RequireAuth><App /></RequireAuth>, children: [
    { index: true, element: <Navigate to="/dashboard" replace /> },
    { path: 'dashboard', element: <Dashboard /> },
    { path: 'organizations', element: <RoleGate roles={['SUPER_ADMIN']}><Organizations /></RoleGate> },
    { path: 'organizations/new', element: <RoleGate roles={['SUPER_ADMIN']}><EntityForm kind="organization" /></RoleGate> },
    { path: 'organizations/:id', element: <Detail kind="organization" /> },
    { path: 'organizations/:id/edit', element: <RoleGate roles={['SUPER_ADMIN']}><EntityForm kind="organization" /></RoleGate> },
    { path: 'users', element: <Users /> },
    { path: 'users/:id', element: <Detail kind="user" /> },
    { path: 'projects', element: <Projects /> },
    { path: 'projects/new', element: <EntityForm kind="project" /> },
    { path: 'projects/:id', element: <Detail kind="project" /> },
    { path: 'projects/:id/edit', element: <EntityForm kind="project" /> },
    { path: 'tasks', element: <Tasks /> },
    { path: 'tasks/new', element: <EntityForm kind="task" /> },
    { path: 'tasks/:id', element: <Detail kind="task" /> },
    { path: 'tasks/:id/edit', element: <EntityForm kind="task" /> },
  ] },
  { path: '*', element: <NotFound /> },
])
