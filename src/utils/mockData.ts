import { IComment } from "../models/IComment";
import { IProducts } from "../models/IProducts";

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

export const productMockData:IProducts = {
  "meta": {
    "status": 200,
    "message": "OK",
    "pagination": {
      "page": 1,
      "per_page": 10,
      "total_items": 70,
      "total_pages": 7
    }
  },
  "data": [
    {
      "id": 1,
      "title": "Essence Mascara Lash Princess",
      "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      "category": "beauty",
      "price": 9.99,
      "discountPercentage": 7.17,
      "rating": 4.94,
      "stock": 5,
      "tags": [
        "beauty",
        "mascara"
      ],
      "brand": "Essence",
      "sku": "RCH45Q1A",
      "minimumOrderQuantity": 24,
      "images": [
        "https://jsonbulut.com/assets/img/products/1/1.jpg",
        "https://jsonbulut.com/assets/img/products/1/2.jpg",
        "https://jsonbulut.com/assets/img/products/1/3.jpg"
      ]
    }
  ]
}