import apiClient from './client'
import { Organization, Project, Role, Task, User } from '../types'

export interface Page<T> {
  content: T[]
  totalElements?: number
  totalPages?: number
  number?: number
  size?: number
}

export type OrganizationRequest = Omit<Organization, 'id' | 'createdAt'>
export type ProjectRequest = Omit<Project, 'id' | 'createdAt'>
export type TaskCreateRequest = Omit<Task, 'id' | 'createdAt'>
export type TaskUpdateRequest = Partial<TaskCreateRequest>
export interface ProjectMemberRequest { userId: string; role?: Role }
export interface ProjectMemberResponse { userId: string; projectId?: string; role?: Role }
export interface RegisterRequest { name: string; email: string; password: string; organizationId?: string }
export interface LoginRequest { email: string; password: string }
export interface RefreshRequest { refreshToken: string }
export interface AuthResponse { accessToken?: string; refreshToken?: string; token?: string; [key: string]: unknown }
export type UserResponse = User
export interface RoleUpdateRequest { role: Role }

export const organizationService = {
  // Inferred from static backend analysis; verify against the real backend.
  create: async (body: OrganizationRequest): Promise<Organization> => (await apiClient.post<Organization>('/organization-service/api/v1/organizations', body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  list: async (): Promise<Page<Organization>> => (await apiClient.get<Page<Organization>>('/organization-service/api/v1/organizations')).data,
  // Inferred from static backend analysis; verify against the real backend.
  getById: async (id: string): Promise<Organization> => (await apiClient.get<Organization>(`/organization-service/api/v1/organizations/${id}`)).data,
  // Inferred from static backend analysis; verify against the real backend.
  update: async (id: string, body: OrganizationRequest): Promise<Organization> => (await apiClient.put<Organization>(`/organization-service/api/v1/organizations/${id}`, body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  remove: async (id: string): Promise<void> => { await apiClient.delete(`/organization-service/api/v1/organizations/${id}`) },
  // Inferred from static backend analysis; verify against the real backend.
  getUsers: async (id: string): Promise<string> => (await apiClient.get<string>(`/organization-service/api/v1/organizations/${id}/users`)).data,
  // Inferred from static backend analysis; verify against the real backend.
  updateUserRole: async (id: string, userId: string, role?: Role): Promise<void> => { await apiClient.patch(`/organization-service/api/v1/organizations/${id}/users/${userId}/role`, undefined, { params: role ? { role } : undefined }) },
}

export const projectService = {
  // Inferred from static backend analysis; verify against the real backend.
  create: async (body: ProjectRequest): Promise<Project> => (await apiClient.post<Project>('/project-service/api/v1/projects', body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  list: async (): Promise<Page<Project>> => (await apiClient.get<Page<Project>>('/project-service/api/v1/projects')).data,
  // Inferred from static backend analysis; verify against the real backend.
  getById: async (id: string): Promise<Project> => (await apiClient.get<Project>(`/project-service/api/v1/projects/${id}`)).data,
  // Inferred from static backend analysis; verify against the real backend.
  update: async (id: string, body: ProjectRequest): Promise<Project> => (await apiClient.put<Project>(`/project-service/api/v1/projects/${id}`, body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  remove: async (id: string): Promise<void> => { await apiClient.delete(`/project-service/api/v1/projects/${id}`) },
  // Inferred from static backend analysis; verify against the real backend.
  addMember: async (id: string, body: ProjectMemberRequest): Promise<ProjectMemberResponse> => (await apiClient.post<ProjectMemberResponse>(`/project-service/api/v1/projects/${id}/members`, body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  removeMember: async (id: string, userId: string): Promise<void> => { await apiClient.delete(`/project-service/api/v1/projects/${id}/members/${userId}`) },
}

export const taskService = {
  // Inferred from static backend analysis; verify against the real backend.
  create: async (body: TaskCreateRequest): Promise<Task> => (await apiClient.post<Task>('/api/v1/tasks', body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  list: async (): Promise<Page<Task>> => (await apiClient.get<Page<Task>>('/api/v1/tasks')).data,
  // Inferred from static backend analysis; verify against the real backend.
  getById: async (id: string): Promise<Task> => (await apiClient.get<Task>(`/api/v1/tasks/${id}`)).data,
  // Inferred from static backend analysis; verify against the real backend.
  update: async (id: string, body: TaskUpdateRequest): Promise<Task> => (await apiClient.put<Task>(`/api/v1/tasks/${id}`, body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  remove: async (id: string): Promise<void> => { await apiClient.delete(`/api/v1/tasks/${id}`) },
}

export const authService = {
  // Inferred from static backend analysis; verify against the real backend.
  register: async (body: RegisterRequest): Promise<UserResponse> => (await apiClient.post<UserResponse>('/api/v1/auth/register', body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  login: async (body: LoginRequest): Promise<AuthResponse> => (await apiClient.post<AuthResponse>('/api/v1/auth/login', body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  refresh: async (body: RefreshRequest): Promise<AuthResponse> => (await apiClient.post<AuthResponse>('/api/v1/auth/refresh', body)).data,
  // Inferred from static backend analysis; verify against the real backend.
  logout: async (body: RefreshRequest): Promise<void> => { await apiClient.post('/api/v1/auth/logout', body) },
}

export const userService = {
  // Inferred from static backend analysis; verify against the real backend.
  list: async (): Promise<Page<UserResponse>> => (await apiClient.get<Page<UserResponse>>('/api/v1/users')).data,
  // Inferred from static backend analysis; verify against the real backend.
  getMe: async (): Promise<UserResponse> => (await apiClient.get<UserResponse>('/api/v1/users/me')).data,
  // Inferred from static backend analysis; verify against the real backend.
  getById: async (id: string): Promise<UserResponse> => (await apiClient.get<UserResponse>(`/api/v1/users/${id}`)).data,
  // Inferred from static backend analysis; verify against the real backend.
  updateRole: async (id: string, body: RoleUpdateRequest): Promise<UserResponse> => (await apiClient.patch<UserResponse>(`/api/v1/users/${id}/role`, body)).data,
}
