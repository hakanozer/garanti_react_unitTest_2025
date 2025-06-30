import { config } from "./api"

export const getOneComment = (id:number) => {
    return config.get("comments/"+id)
}