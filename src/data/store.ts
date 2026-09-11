import { organizationService, projectService, taskService } from '../api/services'
import { organizations, projects, tasks } from './mockData'
import { Organization, Project, Task } from '../types'

export const USE_MOCK = true
function load<T>(key: string, seed: T[]): T[] { const value = localStorage.getItem(key); if (value) return JSON.parse(value); localStorage.setItem(key, JSON.stringify(seed)); return seed }
function create<T>(key: string, seed: T[], input: any): T { const all: any[] = load(key, seed); const item = Object.assign({}, input, { id: `new-${Date.now()}`, createdAt: new Date().toISOString() }); all.unshift(item); localStorage.setItem(key, JSON.stringify(all)); return item }
export async function getOrganizations(): Promise<Organization[]> { if (USE_MOCK) return load('organizations', organizations); return (await organizationService.list()).content }
export async function createOrganization(input: Omit<Organization, 'id' | 'createdAt'>): Promise<Organization> { if (USE_MOCK) return create('organizations', organizations, input); return organizationService.create(input) }
export async function getProjects(): Promise<Project[]> { if (USE_MOCK) return load('projects', projects); return (await projectService.list()).content }
export async function createProject(input: Omit<Project, 'id' | 'createdAt'>): Promise<Project> { if (USE_MOCK) return create('projects', projects, input); return projectService.create(input) }
export async function getTasks(): Promise<Task[]> { if (USE_MOCK) return load('tasks', tasks); return (await taskService.list()).content }
export async function createTask(input: Omit<Task, 'id' | 'createdAt'>): Promise<Task> { if (USE_MOCK) return create('tasks', tasks, input); return taskService.create(input) }
