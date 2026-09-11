import type { ReactNode } from 'react'

export function PageHeader({ title, subtitle, action }: { title: string; subtitle: string; action?: ReactNode }) { return <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><p className="mb-1 text-sm font-medium text-primary">Workspace</p><h1 className="text-3xl font-bold tracking-tight text-ink">{title}</h1><p className="mt-2 text-sm text-secondary">{subtitle}</p></div>{action}</div> }
export function Badge({ children }: { children: ReactNode }) { return <span className="inline-flex rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-primary">{children}</span> }
export function Loading() { return <div className="animate-pulse rounded-panel border border-line bg-surface p-6 text-sm text-secondary">Loading workspace data…</div> }
export function Empty({ children }: { children: ReactNode }) { return <div className="rounded-panel border border-dashed border-line bg-surface p-10 text-center text-sm text-secondary">{children}</div> }
export const primaryButton = 'rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-hover disabled:cursor-not-allowed disabled:opacity-50'
