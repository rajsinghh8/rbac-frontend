import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { TopBar } from './components/TopBar'
import { isAuthenticated } from './auth/auth'
import { Login } from './pages/Login'
import { Dashboard } from './pages/Dashboard'
import { ResourceCreate, ResourceDetail, ResourceList } from './pages/Resources'
import { AccessDenied, ForgotPassword, NotFound, People, Profile } from './pages/StatusPages'

class Shell extends React.Component {
  render() {
    return (
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <TopBar />
          <main className="mx-auto max-w-7xl p-5 md:p-8">
            <Switch>
              <Route
                exact
                path="/dashboard"
                component={Dashboard}
              />
              <Route
                exact
                path="/users"
                component={People}
              />
              <Route
                exact
                path="/profile"
                component={Profile}
              />
              <Route
                exact
                path="/:kind(organizations|projects|tasks)"
                component={ResourceList}
              />
              <Route
                exact
                path="/:kind(organizations|projects|tasks)/new"
                component={ResourceCreate}
              />
              <Route
                exact
                path="/:kind(organizations|projects|tasks)/:id"
                component={ResourceDetail}
              />
              <Route component={NotFound} />
            </Switch>
          </main>
        </div>
      </div>
    )
  }
}
class GuardedShell extends React.Component { render() { return isAuthenticated() ? <Shell /> : <Redirect to="/login" /> } }
export default class App extends React.Component { render() { return <BrowserRouter><Switch><Route path="/login" component={Login} /><Route path="/forgot-password" component={ForgotPassword} /><Route path="/access-denied" component={AccessDenied} /><Route exact path="/" render={() => <Redirect to="/dashboard" />} /><Route path="/" component={GuardedShell} /></Switch></BrowserRouter> } }
