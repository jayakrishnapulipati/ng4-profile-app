import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title = 'app';

  constructor(private router:Router) {

  }

  login() {
    this.router.navigate(['main'])
  }
}
