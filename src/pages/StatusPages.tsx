import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
class StatusView extends React.Component<RouteComponentProps & { title: string; message: string; target: string; label: string }> { render() { return <main className="flex min-h-screen items-center justify-center bg-canvas p-6 text-center"><div><h1 className="text-3xl font-bold">{this.props.title}</h1><p className="mt-3 text-muted">{this.props.message}</p><button onClick={() => this.props.history.push(this.props.target)} className="mt-6 rounded-lg bg-primary px-4 py-2 text-white">{this.props.label}</button></div></main> } }
const RoutedStatus = withRouter(StatusView)
export class NotFound extends React.Component { render() { return <RoutedStatus title="404 — Not found" message="The page you requested could not be found." target="/" label="Go home" /> } }
export class AccessDenied extends React.Component { render() { return <RoutedStatus title="Access denied" message="Your role does not have permission to view this workspace." target="/dashboard" label="Back to dashboard" /> } }
export class ForgotPassword extends React.Component { render() { return <RoutedStatus title="Password recovery" message="Contact an organization administrator to reset your password." target="/login" label="Back to sign in" /> } }
