import { apiClient } from '../api/client'
import { demoUsers } from '../data/mockData'
import type { Role, User } from '../types'

export const USE_MOCK = true
export interface Session { id: string; name: string; email: string; role: Role; organizationId: string }

const localUsers = (): User[] => JSON.parse(localStorage.getItem('app_users') || '[]')
export const getUsers = (): User[] => [...demoUsers, ...localUsers()]
const sessionFrom = (user: User): Session => ({ id: user.id, name: user.name, email: user.email, role: user.role, organizationId: user.organizationId })

async function localLogin(email: string, password: string): Promise<boolean> {
  const user = getUsers().find((candidate) => candidate.email === email && candidate.password === password)
  if (!user) return false
  localStorage.setItem('auth_token', JSON.stringify(sessionFrom(user)))
  return true
}

export async function login(email: string, password: string): Promise<boolean> {
  if (USE_MOCK) return localLogin(email, password)
  const response = await apiClient.post('/api/v1/auth/login', { email, password })
  localStorage.setItem('auth_token', JSON.stringify(response.data))
  return true
}

async function localSignup(name: string, email: string, password: string): Promise<User | null> {
  if (getUsers().some((user) => user.email === email)) return null
  const user: User = { id: `u-${Date.now()}`, name, email, password, role: 'MEMBER', organizationId: 'org1' }
  localStorage.setItem('app_users', JSON.stringify([...localUsers(), user]))
  localStorage.setItem('auth_token', JSON.stringify(sessionFrom(user)))
  return user
}

export async function signup(name: string, email: string, password: string): Promise<User | null> {
  if (USE_MOCK) return localSignup(name, email, password)
  const response = await apiClient.post('/api/v1/auth/signup', { name, email, password })
  localStorage.setItem('auth_token', JSON.stringify(response.data))
  return response.data
}

export async function logout(): Promise<void> {
  if (!USE_MOCK) await apiClient.post('/api/v1/auth/logout')
  localStorage.removeItem('auth_token')
}
export const currentUser = (): Session | null => { const value = localStorage.getItem('auth_token'); return value ? JSON.parse(value) as Session : null }
export const currentRole = (): Role | null => currentUser()?.role || null
export const isAuthenticated = (): boolean => Boolean(currentUser())
