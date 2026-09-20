import type { AttemptRecord } from '../types'

const STORAGE_KEY = 'dilr-prep-attempts'

export function getAttempts(): AttemptRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as AttemptRecord[]) : []
  } catch {
    return []
  }
}

export function getAttemptForSet(setId: string): AttemptRecord | undefined {
  return getAttempts()
    .filter((a) => a.setId === setId)
    .sort((a, b) => b.completedAt.localeCompare(a.completedAt))[0]
}

export function saveAttempt(record: AttemptRecord): void {
  try {
    const attempts = getAttempts()
    attempts.push(record)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts))
  } catch {
    // localStorage unavailable (private mode, quota, etc.) - skip persisting
  }
}
