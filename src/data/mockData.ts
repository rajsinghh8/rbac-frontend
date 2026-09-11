import type { Organization, Project, Task, User } from '../types'

export const demoUsers: User[] = [
  { id: 'u1', name: 'Avery Morgan', email: 'admin@osa.demo', password: 'password123', role: 'SUPER_ADMIN', organizationId: 'org1' },
  { id: 'u2', name: 'Jordan Lee', email: 'manager@osa.demo', password: 'password123', role: 'MANAGER', organizationId: 'org1' },
  { id: 'u3', name: 'Mina Patel', email: 'member@osa.demo', password: 'password123', role: 'MEMBER', organizationId: 'org1' },
  { id: 'u4', name: 'Casey Ward', email: 'viewer@osa.demo', password: 'password123', role: 'VIEWER', organizationId: 'org1' },
  { id: 'u5', name: 'Sofia Chen', email: 'admin@north.demo', password: 'password123', role: 'ORG_ADMIN', organizationId: 'org2' },
]

export const mockOrganizations: Organization[] = [
  { id: 'org1', name: 'Osa Studio', description: 'Product design and engineering.', createdAt: '2024-01-10' },
  { id: 'org2', name: 'Northstar Labs', description: 'Research and experimentation.', createdAt: '2024-02-18' },
  { id: 'org3', name: 'Harbor Collective', description: 'Customer experience team.', createdAt: '2024-03-03' },
]

export const mockProjects: Project[] = [
  { id: 'p1', name: 'Platform refresh', description: 'Improve the organization workspace.', organizationId: 'org1', status: 'Active', memberIds: ['u1', 'u2', 'u3'], createdAt: '2024-05-02' },
  { id: 'p2', name: 'Mobile onboarding', description: 'A clearer first-run experience.', organizationId: 'org1', status: 'Planning', memberIds: ['u2', 'u3'], createdAt: '2024-06-10' },
  { id: 'p3', name: 'Research archive', description: 'A central home for field notes.', organizationId: 'org2', status: 'Active', memberIds: ['u5'], createdAt: '2024-06-24' },
]

export const mockTasks: Task[] = [
  { id: 't1', title: 'Draft workspace navigation', description: 'Map the primary information architecture.', projectId: 'p1', assigneeId: 'u2', status: 'In progress', createdAt: '2024-06-12' },
  { id: 't2', title: 'Review permissions matrix', description: 'Validate visibility for each team role.', projectId: 'p1', assigneeId: 'u1', status: 'To do', createdAt: '2024-06-13' },
  { id: 't3', title: 'Prototype welcome flow', description: 'Build a clickable new user flow.', projectId: 'p2', assigneeId: 'u3', status: 'Done', createdAt: '2024-06-15' },
  { id: 't4', title: 'Tag interview notes', description: 'Organize observations by theme.', projectId: 'p3', assigneeId: 'u5', status: 'In progress', createdAt: '2024-06-20' },
]
