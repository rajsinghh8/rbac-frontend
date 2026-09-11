import { apiClient } from '../api/client'
import { mockOrganizations, mockProjects, mockTasks } from './mockData'
import type { Organization, Project, Task } from '../types'

export const USE_MOCK = true
const load = <T,>(key: string, seed: T[]): T[] => {
  const raw = localStorage.getItem(key)
  if (raw) return JSON.parse(raw) as T[]
  localStorage.setItem(key, JSON.stringify(seed))
  return seed
}
const save = <T,>(key: string, records: T[]) => localStorage.setItem(key, JSON.stringify(records))
const makeId = () => `${Date.now()}-${Math.random().toString(16).slice(2)}`

const localOrganizations = () => load('organizations', mockOrganizations)
export async function getOrganizations(): Promise<Organization[]> { if (USE_MOCK) return localOrganizations(); return (await apiClient.get('/api/v1/organizations')).data }
export async function getOrganization(id: string): Promise<Organization | undefined> { return (await getOrganizations()).find((organization) => organization.id === id) }
export async function createOrganization(input: Omit<Organization, 'id' | 'createdAt'>): Promise<Organization> { const item = { ...input, id: makeId(), createdAt: new Date().toISOString() }; if (!USE_MOCK) return (await apiClient.post('/api/v1/organizations', input)).data; const records = localOrganizations(); records.unshift(item); save('organizations', records); return item }
export async function updateOrganization(id: string, input: Partial<Organization>): Promise<Organization> { const records = localOrganizations(); const item = records.find((record) => record.id === id); if (!item) throw new Error('Organization not found'); Object.assign(item, input); save('organizations', records); return item }

const localProjects = () => load('projects', mockProjects)
export async function getProjects(): Promise<Project[]> { if (USE_MOCK) return localProjects(); return (await apiClient.get('/api/v1/projects')).data }
export async function getProject(id: string): Promise<Project | undefined> { return (await getProjects()).find((project) => project.id === id) }
export async function createProject(input: Omit<Project, 'id' | 'createdAt'>): Promise<Project> { const item = { ...input, id: makeId(), createdAt: new Date().toISOString() }; if (!USE_MOCK) return (await apiClient.post('/api/v1/projects', input)).data; const records = localProjects(); records.unshift(item); save('projects', records); return item }
export async function updateProject(id: string, input: Partial<Project>): Promise<Project> { const records = localProjects(); const item = records.find((record) => record.id === id); if (!item) throw new Error('Project not found'); Object.assign(item, input); save('projects', records); return item }

const localTasks = () => load('tasks', mockTasks)
export async function getTasks(): Promise<Task[]> { if (USE_MOCK) return localTasks(); return (await apiClient.get('/api/v1/tasks')).data }
export async function getTask(id: string): Promise<Task | undefined> { return (await getTasks()).find((task) => task.id === id) }
export async function createTask(input: Omit<Task, 'id' | 'createdAt'>): Promise<Task> { const item = { ...input, id: makeId(), createdAt: new Date().toISOString() }; if (!USE_MOCK) return (await apiClient.post('/api/v1/tasks', input)).data; const records = localTasks(); records.unshift(item); save('tasks', records); return item }
export async function updateTask(id: string, input: Partial<Task>): Promise<Task> { const records = localTasks(); const item = records.find((record) => record.id === id); if (!item) throw new Error('Task not found'); Object.assign(item, input); save('tasks', records); return item }
export async function deleteTask(id: string): Promise<void> { if (!USE_MOCK) { await apiClient.delete(`/api/v1/tasks/${id}`); return }; save('tasks', localTasks().filter((task) => task.id !== id)) }
