import { IComment } from "../models/IComment";

export const commentMockData: IComment = {
  meta: {
    status: 200,
    message: "OK"
  },
  data: {
    id: 1,
    post_id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: `laudantium enim quasi est quidem magnam voluptate ipsam eos
      tempora quo necessitatibus
      dolor quam autem quasi
      reiciendis et nam sapiente accusantium`
  }
}