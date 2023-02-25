import { Item } from "../app-product-list/products"

export interface Category{
  id: number,
  name: string,
  items: Item[]
}

export const categories = [
  {
    id: 1,
    name:"Tech",
    items: []
  },
  {
    id: 2,
    name:"Canteen devices",
    items: []
  },
  {
    id:3,
    name:"Furniture",
    items: []
  },
  {
    id:4,
    name:"Hygiene",
    items: []
  },
  {
    id:5,
    name:"Lens devices",
    items: []
  }
]
