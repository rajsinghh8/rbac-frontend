import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import { currentUser } from '../auth/auth'
import { demoUsers } from '../data/mockData'

class StatusView extends React.Component<RouteComponentProps & { title: string; message: string; target: string; label: string }> { render() { return <main className="flex min-h-screen items-center justify-center bg-canvas p-6 text-center"><div><h1 className="text-3xl font-bold">{this.props.title}</h1><p className="mt-3 text-muted">{this.props.message}</p><button onClick={() => this.props.history.push(this.props.target)} className="mt-6 rounded-lg bg-primary px-4 py-2 text-white">{this.props.label}</button></div></main> } }
const RoutedStatus = withRouter(StatusView)
export class NotFound extends React.Component { render() { return <RoutedStatus title="404 — Not found" message="The page you requested could not be found." target="/" label="Go home" /> } }
export class AccessDenied extends React.Component { render() { return <RoutedStatus title="Access denied" message="Your role does not have permission to view this workspace." target="/dashboard" label="Back to dashboard" /> } }
export class ForgotPassword extends React.Component { render() { return <RoutedStatus title="Password recovery" message="Contact an organization administrator to reset your password." target="/login" label="Back to sign in" /> } }

export class People extends React.Component {
  render() {
    return <div>
      <div>
        <h1 className="text-3xl font-bold text-ink">People</h1>
        <p className="mt-2 text-muted">Members with access to this workspace.</p>
      </div>
      <div className="mt-6 overflow-hidden rounded-card border border-border bg-surface">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-muted">
            <tr>
              <th className="p-4">Member</th>
              <th className="p-4">Email</th>
              <th className="p-4">Role</th>
            </tr>
          </thead>
          <tbody>
            {demoUsers.map((user) => <tr key={user.id} className="border-t border-border">
              <td className="p-4 font-semibold text-ink">{user.name}</td>
              <td className="p-4 text-muted">{user.email}</td>
              <td className="p-4">{user.role.replace('_', ' ')}</td>
            </tr>)}
          </tbody>
        </table>
      </div>
    </div>
  }
}

export class Profile extends React.Component {
  render() {
    const user = currentUser()
    return <div className="max-w-2xl">
      <h1 className="text-3xl font-bold text-ink">Profile</h1>
      <p className="mt-2 text-muted">Your workspace account details.</p>
      <section className="mt-6 rounded-card border border-border bg-surface p-6">
        <dl className="space-y-5 text-sm">
          <div>
            <dt className="text-muted">Email</dt>
            <dd className="mt-1 font-semibold text-ink">{user ? user.email : 'Unavailable'}</dd>
          </div>
          <div>
            <dt className="text-muted">Role</dt>
            <dd className="mt-1 font-semibold text-ink">{user ? user.role.replace('_', ' ') : 'Unavailable'}</dd>
          </div>
          <div>
            <dt className="text-muted">Organization</dt>
            <dd className="mt-1 font-semibold text-ink">{user ? user.organizationId : 'Unavailable'}</dd>
          </div>
        </dl>
      </section>
    </div>
  }
}
