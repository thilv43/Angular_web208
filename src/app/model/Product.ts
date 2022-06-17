export type IProduct = {
    id: number,
    name:string,
    price:number,
    price_sale:number,
    desc:string,
    img:string,
    author:string,
    status:number

}
export type ProductCreate = {
  name: string,
  status?: number
}
