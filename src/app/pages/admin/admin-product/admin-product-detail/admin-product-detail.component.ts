import { LocalStorageService } from './../../../../services/local-storage.service';
import { ProductService } from './../../../../services/product.service';
import { IProduct } from './../../../../model/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-product-detail',
  templateUrl: './admin-product-detail.component.html',
  styleUrls: ['./admin-product-detail.component.css']
})
export class AdminProductDetailComponent implements OnInit {
  product!: IProduct;
  cartItemValue: number = 1
  constructor(
    private productService: ProductService,
    private activateRouter: ActivatedRoute,
    // private lsServicer: LocalStorageService
  ) {

  }

  ngOnInit(): void {
    const idFormUrl = this.activateRouter.snapshot.params['id'];
    this.productService.listProduct(idFormUrl).subscribe( (data) => {
      this.product = data;
    })

  }
  // onInputValueChange(event: any){
  //   this.cartItemValue = event.target.value;
  // }
  // onAddToCart(){
  //   //1. định nghĩa cấu trúc dữ liệu rồi thêm vào giỏ hàng
  //   const addItem = {
  //     id: this.product.id,
  //     name: this.product.name,
  //     value: +this.cartItemValue
  //   }
  //   //2. kiểm tra đã có sản phẩm trong giỏ hàng hay chưa
  //   //2.1 lấy ra toàn bộ sản phẩm trong giỏ hàng
  //   this.lsServicer.setItem(addItem);
  //   this.cartItemValue = 1
  // }

}
