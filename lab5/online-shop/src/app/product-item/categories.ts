export interface Category{
  id: number,
  name: string,
  itemsId: number[]
}

export const categories = [
  {
    id: 1,
    name:"Tech",
    itemsId: [1,4,6,10]
  },
  {
    id: 2,
    name:"Canteen devices",
    itemsId: []
  },
  {
    id:3,
    name:"Furniture",
    itemsId: []
  },
  {
    id:4,
    name:"Hygiene",
    itemsId: []
  },
  {
    id:5,
    name:"Lens devices",
    itemsId: []
  }
]
