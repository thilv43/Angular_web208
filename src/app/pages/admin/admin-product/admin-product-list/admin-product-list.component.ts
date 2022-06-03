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
    this.productService.getProducts().subscribe((data) =>{
      this.products = data;
    })
  }
  onDelete(id: string| number){
    //comfrim
    const confirmDelete = confirm("Bạn có chắc chắn muốn xóa không");
    //kiểm tra dữ liệu
    if(confirmDelete && id){
      this.productService.deleteProduct(id).subscribe((data) => {
        //câp nhập lại danh
        this.onGetList();
      })
    }

  }

}
