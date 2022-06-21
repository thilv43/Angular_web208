export type IProduct = {
    _id: number,//nếu không dùng nodejs thì dùng number
    name:string,
    price:number,
    price_sale:number,
    desc:string,
    img:string,
    author:string,
    status:number

}
export type ProductCreate = {
  _id?: number,//nếu không dùng nodejs thì dùng number
  name?:string,
  price?:number,
  price_sale?:number,
  desc?:string,
  img?:string,
  author?:string,
  status?:number
}
export type ProductCart = {
  id: string,
  name: string,
  price: number,
  price_sale: number,
  value: number
}
export type Category = {
  id: string,
  name: string
}
export type Products = {
  id: string,
  name: string,
  price: number,
  price_sale: number,
  img: string,
  desc: string,
  author: string
}

export type Users ={
  _id: string,
  name: string,
  email: string,
  password: string
}
