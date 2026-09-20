export type Difficulty = 'Easy' | 'Medium' | 'Hard'

export interface Question {
  id: string
  text: string
  options: string[]
  correctOptionIndex: number
  explanation: string
}

export interface DilrSet {
  id: string
  title: string
  topicId: string
  difficulty: Difficulty
  timeLimitMinutes: number
  directions: string
  source?: string
  videoSolutionUrl?: string
  questions: Question[]
}

export interface Topic {
  id: string
  name: string
  icon: string
  description: string
}

export interface AttemptRecord {
  setId: string
  answers: Record<string, number>
  score: number
  total: number
  timeTakenSeconds: number
  completedAt: string
}
