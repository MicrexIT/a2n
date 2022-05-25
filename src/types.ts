export interface IProject {
  id: number
  title: string
  created_at: Date
  description: string
  where: string
  picture: string
  status: Status
  type: ProjectType
}

export interface IProjectEdit {
  id?: number
  title: string
  description: string
  where: string
  picture: string
  status: Status
  type: ProjectType
}

export const enum Status { COMPLETED = "completed", ONGOING = "ongoing", DRAFT = "draft", PLANNED = "planned", CANCELED = "canceled" }
export const enum ProjectType { ONEOFF = "oneoff", RECURRING = "recurring" }
