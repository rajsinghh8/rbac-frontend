export type Role = 'SUPER_ADMIN' | 'ORG_ADMIN' | 'MANAGER' | 'MEMBER' | 'VIEWER'

export interface User { id: string; name: string; email: string; password?: string; role: Role; organizationId: string }
export interface Organization { id: string; name: string; plan: string; memberCount: number; projectCount: number; createdAt: string }
export interface Project { id: string; name: string; description: string; organizationId: string; status: 'Active' | 'Planning' | 'Complete'; memberIds: string[]; createdAt: string }
export interface Task { id: string; title: string; description: string; projectId: string; assigneeId: string; status: 'To do' | 'In progress' | 'Done'; dueDate: string; createdAt: string }
