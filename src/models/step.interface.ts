export interface ISubStep {
  id: number
  description: string
}

export interface IImage {
  src: string
  alt: string
}

export interface IStep {
  id: number
  title: string
  subtitle?: string
  subSteps: ISubStep[]
  image: IImage
}
