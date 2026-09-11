import { Organization, Project, Task, User } from '../types'

export const demoUsers: User[] = [
  { id: 'u1', name: 'Avery Stone', email: 'admin@example.com', password: 'password123', role: 'SUPER_ADMIN', organizationId: 'o1' },
  { id: 'u2', name: 'Morgan Lee', email: 'manager@example.com', password: 'password123', role: 'MANAGER', organizationId: 'o1' },
  { id: 'u3', name: 'Jordan Kim', email: 'member@example.com', password: 'password123', role: 'MEMBER', organizationId: 'o1' },
  { id: 'u4', name: 'Taylor West', email: 'viewer@example.com', password: 'password123', role: 'VIEWER', organizationId: 'o2' },
]
export const organizations: Organization[] = [
  { id: 'o1', name: 'Northstar Labs', plan: 'Enterprise', memberCount: 18, projectCount: 6, createdAt: '2024-01-12' },
  { id: 'o2', name: 'Orbit Studio', plan: 'Growth', memberCount: 9, projectCount: 3, createdAt: '2024-03-08' },
  { id: 'o3', name: 'Harbor Works', plan: 'Starter', memberCount: 5, projectCount: 2, createdAt: '2024-05-19' },
]
export const projects: Project[] = [
  { id: 'p1', name: 'Platform refresh', description: 'Modernize the customer workspace.', organizationId: 'o1', status: 'Active', memberIds: ['u1', 'u2', 'u3'], createdAt: '2024-05-01' },
  { id: 'p2', name: 'Mobile launch', description: 'Deliver the iOS and Android experience.', organizationId: 'o1', status: 'Planning', memberIds: ['u2', 'u3'], createdAt: '2024-06-12' },
  { id: 'p3', name: 'Orbit website', description: 'New marketing site and resource center.', organizationId: 'o2', status: 'Active', memberIds: ['u4'], createdAt: '2024-06-28' },
]
export const tasks: Task[] = [
  { id: 't1', title: 'Review access policy', description: 'Document project permission boundaries.', projectId: 'p1', assigneeId: 'u2', status: 'In progress', dueDate: '2024-08-24', createdAt: '2024-08-01' },
  { id: 't2', title: 'Build member directory', description: 'Add searchable organization members.', projectId: 'p1', assigneeId: 'u3', status: 'To do', dueDate: '2024-08-31', createdAt: '2024-08-03' },
  { id: 't3', title: 'Prepare release notes', description: 'Summarize launch improvements.', projectId: 'p2', assigneeId: 'u3', status: 'Done', dueDate: '2024-08-15', createdAt: '2024-07-22' },
]
