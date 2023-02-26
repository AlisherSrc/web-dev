export interface Category{
  id: number,
  name: string,
  itemsId: number[]
}

export const categories = [
  {
    id: 1,
    name:"Tech",
    itemsId: [1,4,6,5,10]
  },
  {
    id: 2,
    name:"For canteen",
    itemsId: [3,10]
  },
  {
    id:3,
    name:"Furniture",
    itemsId: [2,11,12,13,14,15]
  },
  {
    id:4,
    name:"Hygiene",
    itemsId: [8]
  },
  {
    id:5,
    name:"Lens devices",
    itemsId: [7]
  }
]
