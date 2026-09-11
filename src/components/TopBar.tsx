import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import { currentUser, logout } from '../auth/auth'
class TopBarView extends React.Component<RouteComponentProps> {
  render() { const user = currentUser(); return <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-5"><div><p className="text-xs font-medium text-muted">Organization workspace</p><p className="text-sm font-semibold text-ink">{user ? user.role.replace('_', ' ') : 'Guest'}</p></div><div className="flex items-center gap-3"><button onClick={() => this.props.history.push('/profile')} className="rounded-full bg-accent px-3 py-2 text-sm font-semibold text-primary" aria-label="Open profile" title="Open profile">{user ? user.email.charAt(0).toUpperCase() : '?'}</button><button onClick={() => { if (window.confirm('Log out of this workspace?')) { logout(); this.props.history.push('/login') } }} className="text-muted hover:text-danger" aria-label="Log out"><LogOut size={19} /></button></div></header> }
}
export const TopBar = withRouter(TopBarView)
