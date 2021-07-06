export type Topic = {
  id: number
  title: string
  description: string
  status: Status

  // TODO decide on IDS or full objects
  requirementIds: number[]
  requirements: Requirement[]
}

export type Requirement = {
  id: number
  title: string
  description: string
  status: Status
  order: number

  // TODO decide on IDS or full objects
  answerId: number
  answer: AnswerSet
  // TODO decide on IDS or full objects
  topicId: number
  topic: Topic
}

export type AnswerSet = {
  id: number
  notAvailable: string
  initial: string
  defined: string
  established: string
  qualityChecked: string
  optimized: string
}

export type Status = {
  slug: string
  display: string
}
