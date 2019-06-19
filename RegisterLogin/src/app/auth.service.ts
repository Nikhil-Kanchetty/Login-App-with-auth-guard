import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface formatData {
  message: String,
  success: boolean
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  private loginStatus: boolean = JSON.parse(localStorage.getItem("IsLoggedIn") || "false"); 

  adminCheck(userName, password){
    return this.http.post <formatData> ("http://localhost:1234", { userName, password } );
  }

  setLogin(value: boolean) {
    this.loginStatus = value;
    localStorage.setItem("IsLoggedIn", value.toString());
  }

  isLoggedIn()  {
    return  JSON.parse(localStorage.getItem("IsLoggedIn") || this.loginStatus.toString());
  }

}
 