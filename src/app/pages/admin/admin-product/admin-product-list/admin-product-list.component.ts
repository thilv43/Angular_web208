import { IProduct } from './../../../../model/Product';
import { Component, OnInit } from '@angular/core';
import { ProductService} from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-product-list',
  templateUrl: './admin-product-list.component.html',
  styleUrls: ['./admin-product-list.component.css']
})
export class AdminProductListComponent implements OnInit {
    products!: IProduct[];
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.onGetList()
  }
  onGetList(){
    this.productService.getProduct().subscribe((data) =>{
      this.products = data;
    })
  }
  onDelete(id: string | number){
      //confirm
      const confirmDelete = confirm("bạn có chắc chắn muốn xóa không");
      if(confirmDelete && id){
        this.productService.deleteProduct(id).subscribe((data) => {
          this.onGetList();
        })
      }
  }
  onUpdateStatus(produtId: number, newStatus: number){
      this.productService.updateProduct(`${produtId}`, {
  status: newStatus,
  name: ''
}).subscribe(data => {
        this.onGetList();
      })
  }

}
