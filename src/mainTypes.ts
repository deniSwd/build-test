export type PopUpType = {
  id: number
  jsxData: JSX.Element
}
export type AddJsxFunc = (id: number) => JSX.Element

export type WorkType = {
  id: string
  title: string
  category: string
  image: string
  description: string
}
export type WorksType = Array<WorkType>

