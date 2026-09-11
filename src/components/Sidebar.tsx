import { Building2, CheckSquare, FolderKanban, LayoutDashboard, LogOut, Users } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'
import { currentRole, logout } from '../auth/auth'
import type { Role } from '../types'

const items: { label: string; to: string; icon: typeof LayoutDashboard; roles?: Role[] }[] = [
  { label: 'Overview', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Organizations', to: '/organizations', icon: Building2, roles: ['SUPER_ADMIN'] },
  { label: 'People', to: '/users', icon: Users, roles: ['SUPER_ADMIN', 'ORG_ADMIN', 'MANAGER'] },
  { label: 'Projects', to: '/projects', icon: FolderKanban },
  { label: 'Tasks', to: '/tasks', icon: CheckSquare },
]

export function Sidebar() {
  const navigate = useNavigate()
  const role = currentRole()
  const available = items.filter((item) => !item.roles || (role && item.roles.includes(role)))

  return <aside className="flex w-64 shrink-0 flex-col bg-ink p-4 text-slate-300">
    <div className="mb-10 flex items-center gap-3 px-3 text-white"><span className="grid h-9 w-9 place-items-center rounded-xl bg-primary font-bold">O</span><span className="text-lg font-semibold">osa</span></div>
    <nav className="space-y-1">{available.map((item) => { const Icon = item.icon; return <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium ${isActive ? 'bg-primary text-white shadow-lg' : 'hover:bg-white/10 hover:text-white'}`}><Icon size={18} />{item.label}</NavLink> })}</nav>
    <button className="mt-auto flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium hover:bg-white/10 hover:text-white" onClick={async () => { if (confirm('Log out of osa?')) { await logout(); navigate('/login') } }}><LogOut size={18} />Log out</button>
  </aside>
}
