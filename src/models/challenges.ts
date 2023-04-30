export enum ChallengeStage {
  NotStarted = 'NotStarted',
  InProgress = 'InProgress',
  Completed = 'Completed'
}

export interface IExamples {
  id: number
  input: string
  output: string
}

export interface ITestcase {
  id: number
  input: string
  output: string
}

export interface IChallenge {
  id: number
  title: string
  description: string[]
  notes?: string[]
  examples: IExamples[]
  codeStart: string[]
  codeEnd: string[]
  testFunction: string[]
  testcase: ITestcase[]
  answer: string
  tested: boolean
}
