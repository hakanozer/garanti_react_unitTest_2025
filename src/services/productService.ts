import { IProducts } from "../models/IProducts"
import { config } from "./api"

export const allProduct = () => {
    return config.get<IProducts>('products?page=1&per_page=10')
}