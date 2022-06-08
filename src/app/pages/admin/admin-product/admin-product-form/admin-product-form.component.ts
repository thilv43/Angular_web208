import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  productId: string;

  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        this.onValidateNameHasProduct

      ]) //FormControl(giá trị mặc định)
    })
    this.productId = '';
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if(this.productId){
      this.productService.getProduct(+this.productId).subscribe(data => {
        this.productForm.patchValue({
          name: data.name
        })
      })
    }
  }



  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;
    if(!inputValue.includes('product')){
      return {hasProductError: true}
    }
    return null;
  }

  redirectToList(){
    this.router.navigateByUrl('/admin/products')
  }

  onSubmit(){
    console.log(this.productForm);
    //1. nhận giữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    if(this.productId !== '' && this.productId  !== undefined){
      this.productService.updateProduct(this.productId, data).subscribe(data => {
        this.redirectToList()
      })
    }
    //2. call API tạo mới
    this.productService.createProduct(data).subscribe(data => {
      //3. quay lại danh sách
      this.redirectToList();
    })
  }

}
