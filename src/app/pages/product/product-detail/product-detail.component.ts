import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../../services/product.service';
import { IProduct } from './../../../model/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct
  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idFormUrl = this.activatedRoute.snapshot.params['id']
    this.productService.listProduct(idFormUrl).subscribe(data => {
      this.product = data
    })
  }

}
