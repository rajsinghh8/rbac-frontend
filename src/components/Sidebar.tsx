import React from 'react'
import { NavLink } from 'react-router-dom'
import { Building2, CheckSquare, FolderKanban, LayoutDashboard, Users } from 'lucide-react'
import { currentRole } from '../auth/auth'

export class Sidebar extends React.Component {
  render() {
    const role = currentRole()
    const items = [
      { to: '/dashboard', label: 'Overview', icon: LayoutDashboard, roles: ['SUPER_ADMIN', 'ORG_ADMIN', 'MANAGER', 'MEMBER', 'VIEWER'] },
      { to: '/organizations', label: 'Organizations', icon: Building2, roles: ['SUPER_ADMIN'] },
      { to: '/users', label: 'People', icon: Users, roles: ['SUPER_ADMIN', 'ORG_ADMIN'] },
      { to: '/projects', label: 'Projects', icon: FolderKanban, roles: ['SUPER_ADMIN', 'ORG_ADMIN', 'MANAGER', 'MEMBER', 'VIEWER'] },
      { to: '/tasks', label: 'Tasks', icon: CheckSquare, roles: ['SUPER_ADMIN', 'ORG_ADMIN', 'MANAGER', 'MEMBER', 'VIEWER'] },
    ]
    return <aside className="hidden w-60 shrink-0 border-r border-border bg-slate-950 p-4 text-slate-300 md:block"><div className="mb-10 px-3 text-xl font-bold text-white">Axis<span className="text-blue-400">RBAC</span></div><div className="space-y-1">{items.filter((item) => item.roles.indexOf(role || 'VIEWER') >= 0).map((item) => { const Icon = item.icon; return <NavLink key={item.to} to={item.to} activeClassName="bg-blue-600 text-white" className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium hover:bg-slate-800"><Icon size={18} />{item.label}</NavLink> })}</div></aside>
  }
}
