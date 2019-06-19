import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { delay } from 'q';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private Auth: AuthService) { }

  ngOnInit() { 
    setTimeout(() => {
      this.router.navigate(["/home"]);
      this.Auth.setLogin(false);
    }, 2000);
  }

}
