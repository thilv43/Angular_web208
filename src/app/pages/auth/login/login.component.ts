import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { FormGroup, FormControl } from '@angular/forms';
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
    private router: Router
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit(): void {
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
