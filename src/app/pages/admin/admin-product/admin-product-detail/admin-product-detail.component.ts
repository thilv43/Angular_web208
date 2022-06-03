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
  product!: IProduct
  constructor(
    private productService: ProductService,
    private activateRouter: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    const idFormUrl = this.activateRouter.snapshot.params['id'];
    this.productService.getProduct(idFormUrl).subscribe( (data) => {
      this.product = data;
    })

  }

}
