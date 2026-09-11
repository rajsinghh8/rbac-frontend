import apiClient from '../api/client'
import { organizations, projects, tasks } from './mockData'
import { Organization, Project, Task } from '../types'

export const USE_MOCK = true
function load<T>(key: string, seed: T[]): T[] { const value = localStorage.getItem(key); if (value) return JSON.parse(value); localStorage.setItem(key, JSON.stringify(seed)); return seed }
function create<T>(key: string, seed: T[], input: any): T { const all: any[] = load(key, seed); const item = Object.assign({}, input, { id: `new-${Date.now()}`, createdAt: new Date().toISOString() }); all.unshift(item); localStorage.setItem(key, JSON.stringify(all)); return item }
export async function getOrganizations(): Promise<Organization[]> { if (USE_MOCK) return load('organizations', organizations); /* Inferred endpoint; verify contract. */ return (await apiClient.get('/organization-service/api/v1/organizations')).data.content }
export async function createOrganization(input: Omit<Organization, 'id' | 'createdAt'>): Promise<Organization> { if (USE_MOCK) return create('organizations', organizations, input); /* Inferred endpoint; verify contract. */ return (await apiClient.post('/organization-service/api/v1/organizations', input)).data }
export async function getProjects(): Promise<Project[]> { if (USE_MOCK) return load('projects', projects); /* Inferred endpoint; verify contract. */ return (await apiClient.get('/project-service/api/v1/projects')).data.content }
export async function createProject(input: Omit<Project, 'id' | 'createdAt'>): Promise<Project> { if (USE_MOCK) return create('projects', projects, input); /* Inferred endpoint; verify contract. */ return (await apiClient.post('/project-service/api/v1/projects', input)).data }
export async function getTasks(): Promise<Task[]> { if (USE_MOCK) return load('tasks', tasks); /* Inferred endpoint; verify contract. */ return (await apiClient.get('/api/v1/tasks')).data.content }
export async function createTask(input: Omit<Task, 'id' | 'createdAt'>): Promise<Task> { if (USE_MOCK) return create('tasks', tasks, input); /* Inferred endpoint; verify contract. */ return (await apiClient.post('/api/v1/tasks', input)).data }
