import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, ProductCreate } from '../model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //khai báo http để có đối tượng HttpClient tương tác các phương thức của API
  constructor(private http:HttpClient) {}
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(environment.products)
  }
  getProduct(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.products}/${id}`);
  }
  deleteProduct(id: string| number): Observable<any>{
    return this.http.delete(`${environment.products}/${id}`);
  }
  createProduct(data: ProductCreate): Observable<IProduct>{
    return this.http.post<IProduct>(`${environment.products}`, data);
  }
}
