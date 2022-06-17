import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import {IProduct} from "../../../model/Product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products!: IProduct[]
  constructor(
    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.listProduct()
  }
  listProduct(){
    this.productService.getProduct().subscribe((data) => {
      this.products = data;
    })
  }

}
