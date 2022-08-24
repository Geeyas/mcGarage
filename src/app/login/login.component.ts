import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  message: string = "";
  password: string = "";

  adminUsername: string = "admin";
  adminPassword: string = "admin";
  constructor(private router: Router) { }

  login() {
    if (!this.username) {
      this.message = "Email must be entered";
      return;
    } else if (!this.password) {
      this.message = "Password must be entered";
      return;
    } else {

      if (this.username === this.adminUsername && this.password === this.adminPassword) {
        this.router.navigate(['/admin']);
      } else {
        this.username = "";
        this.password = "";
        this.message = "Logged in Successfully";
      }
    }
  }

  clear() {
    this.message = "";
  }
}
