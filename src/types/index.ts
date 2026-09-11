export type Role = 'SUPER_ADMIN' | 'ORG_ADMIN' | 'MANAGER' | 'MEMBER' | 'VIEWER'
export type Status = 'Planning' | 'Active' | 'Complete' | 'To do' | 'In progress' | 'Done'

export interface User { id: string; name: string; email: string; password?: string; role: Role; organizationId: string }
export interface Organization { id: string; name: string; description: string; createdAt: string }
export interface Project { id: string; name: string; description: string; organizationId: string; status: 'Planning' | 'Active' | 'Complete'; memberIds: string[]; createdAt: string }
export interface Task { id: string; title: string; description: string; projectId: string; assigneeId: string; status: 'To do' | 'In progress' | 'Done'; createdAt: string }
