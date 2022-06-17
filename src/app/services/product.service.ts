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
  //kieur dữ liệu Obser lắng nghe API trả về kết quả
  getProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(environment.products)
  }
  listProduct(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.products}/${id}`);
  }
  deleteProduct(id: string| number): Observable<any>{
    return this.http.delete(`${environment.products}/${id}`);
  }
  //dũ liệu gửi di {name: string}  nhận về {id: number, name: string}
  createProduct(data: ProductCreate): Observable<IProduct>{
    return this.http.post<IProduct>(`${environment.products}`, data);
  }
  updateProduct(id: string, data: ProductCreate): Observable<IProduct>{
    return this.http.put<IProduct>(`${environment.products}/${id}`,data);
  }
}

