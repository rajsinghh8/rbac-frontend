export function required(value: string): string { return value.trim() ? '' : 'This field is required' }
export function email(value: string): string { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? '' : 'Enter a valid email address' }
export function password(value: string): string { return value.length >= 6 ? '' : 'Use at least 6 characters' }
