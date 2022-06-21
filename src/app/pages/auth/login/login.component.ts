import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { FormGroup, FormControl ,Validators,AbstractControl,ValidationErrors} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('',[
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit(): void {
  }
  onValidateNameHasProduct(control: AbstractControl): ValidationErrors | null {
      const inputValue = control.value;
      if(!inputValue.includes('product')){
        return {hasProductError: true};
      }
      return null;
  }
  onSubmit(){
    const submitData = this.loginForm.value;
    this.authService.login(submitData).subscribe(data => {

      console.log(data);
      //1. nếu login thành công thì dữ liệu dẩy lên localstorage
      //setItem(key luu trong localstorage, chuỗi giá trị)
      localStorage.setItem('loggedInUser', JSON.stringify(data));
      //2. diều hướng về admin
      this.router.navigateByUrl('/admin/products');
    })
  }

}
