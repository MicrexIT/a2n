import { Status, type IProjectEdit } from "../../../types"

export function createEmptyProject(): IProjectEdit {
    return {
        id: 0,
        description: "",
        picture: "",
        status: Status.DRAFT,
        title: "new project",
        where: ""
    }
}