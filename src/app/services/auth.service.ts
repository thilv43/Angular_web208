import { environment } from './../../environments/environment';
import { TypeLoginRequest, TypeLoginResponse, TypeSignupRequest, TypeSignupRespone } from './../model/Auth';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(data: TypeLoginRequest): Observable<TypeLoginResponse> {
    return this.http.post<TypeLoginResponse>(environment.login, data)
  }
  signup(data: TypeSignupRequest): Observable<TypeSignupRespone> {
    return this.http.post<TypeSignupRespone>(environment.signup, data)
  }
}
