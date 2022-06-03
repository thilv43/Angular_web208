import { ProductService } from 'src/app/services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-product-form',
  templateUrl: './admin-product-form.component.html',
  styleUrls: ['./admin-product-form.component.css']
})
export class AdminProductFormComponent implements OnInit {
  productForm: FormGroup;
  constructor(
    private productService: ProductService,
    private router: Router
    ) {
    this.productForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(50),
        this.onValidateNameHasProduct

      ]) //FormControl(giá trị mặc định)
    })
  }

  ngOnInit(): void {
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
    const inputValue = control.value;
    if(!inputValue.includes('product')){
      return {hasProductError: true}
    }
    return null;
  }
  onSubmit(){
    console.log(this.productForm);
    //1. nhận giữ liệu từ form => this.productForm.value
    const data = this.productForm.value;
    //2. call API tạo mới
    this.productService.createProduct(data).subscribe(data => {
      //3. quay lại danh sách
      this.router.navigate(['/admin','/products'])
    })
  }

}
