export interface IImage {
  src: string
  alt: string
}

export interface IUser {
  id: number
  first_name: string
  last_name: string
  image: IImage
  points: number
  attempts: number
  completed: number
}
