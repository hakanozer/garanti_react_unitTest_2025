import { IComment } from "../models/IComment"
import { config } from "./api"

export const getOneComment = (id:number) => {
    return config.get<IComment>("comments/"+id)
}