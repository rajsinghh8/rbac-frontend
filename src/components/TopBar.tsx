import { Bell, Search } from 'lucide-react'
import { currentUser } from '../auth/auth'

export function TopBar() {
  const user = currentUser()
  return <header className="flex h-20 items-center justify-between border-b border-line bg-surface px-8">
    <div className="relative hidden w-80 md:block"><Search className="absolute left-3 top-3 text-secondary" size={17} /><input className="w-full rounded-xl bg-muted py-2.5 pl-10 pr-4 text-sm outline-none ring-primary focus:ring-2" placeholder="Search your workspace" /></div>
    <div className="ml-auto flex items-center gap-4"><button className="rounded-xl p-2 text-secondary hover:bg-muted"><Bell size={19} /></button><div className="flex items-center gap-3"><div className="grid h-9 w-9 place-items-center rounded-full bg-indigo-100 font-semibold text-primary">{user?.name.slice(0, 1)}</div><div className="hidden sm:block"><p className="text-sm font-semibold text-ink">{user?.name}</p><p className="text-xs text-secondary">{user?.role.replace('_', ' ')}</p></div></div></div>
  </header>
}
