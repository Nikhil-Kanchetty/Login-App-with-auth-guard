import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  userName: String = "";
  password: String = "";
  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit() { }

  loginUser(event) {
    event.preventDefault();
    
    this.Auth.adminCheck(this.userName, this.password).subscribe( data => {

      if(data.success){
        this.router.navigate(['admin']);
        this.Auth.setLogin(true);
      } else {
        this.router.navigate(['login']);
        this.Auth.setLogin(false);
        window.alert('Login failed ! \n' + data.message);
      }
      
    });
  }
} 
          