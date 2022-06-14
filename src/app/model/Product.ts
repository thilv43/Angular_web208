export interface IProduct {
    id: number, name: string,price: number, age: number, gender: number, img: string, status: number, author: string, desc: string
}
export type ProductCreate = {
  name: string,
  status?: number
}
