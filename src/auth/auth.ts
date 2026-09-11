import apiClient from '../api/client'
import { demoUsers } from '../data/mockData'
import { Role, User } from '../types'

export const USE_MOCK = true
const localUsers = (): User[] => JSON.parse(localStorage.getItem('app_users') || '[]')
export function getUsers(): User[] { return demoUsers.concat(localUsers()) }
function localLogin(email: string, password: string): boolean {
  const user = getUsers().filter((item) => item.email === email && item.password === password)[0]
  if (!user) return false
  localStorage.setItem('auth_token', JSON.stringify({ id: user.id, email: user.email, role: user.role, organizationId: user.organizationId }))
  return true
}
export async function login(email: string, password: string): Promise<boolean> {
  if (USE_MOCK) return localLogin(email, password)
  // Inferred endpoint; verify request and response shape against the backend.
  const response = await apiClient.post('/api/v1/auth/login', { email, password })
  localStorage.setItem('auth_token', JSON.stringify(response.data))
  return true
}
export function logout(): void { localStorage.removeItem('auth_token') }
export function isAuthenticated(): boolean { return !!localStorage.getItem('auth_token') }
export function currentUser(): { id: string; email: string; role: Role; organizationId: string } | null { try { return JSON.parse(localStorage.getItem('auth_token') || 'null') } catch (error) { return null } }
export function currentRole(): Role | null { const user = currentUser(); return user ? user.role : null }
