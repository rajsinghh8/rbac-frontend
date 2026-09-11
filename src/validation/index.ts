export const required = (value: string, label = 'This field') => value.trim() ? '' : `${label} is required.`
export const email = (value: string) => /^\S+@\S+\.\S+$/.test(value) ? '' : 'Enter a valid email address.'
export const password = (value: string) => value.length >= 6 ? '' : 'Use at least 6 characters.'
