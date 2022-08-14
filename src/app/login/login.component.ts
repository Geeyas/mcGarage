import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  message: string = "";
  password: string = "";
  constructor() { }

  login() {
    if (!this.username) {
      this.message = "Email must be entered";
      return;
    } else if (!this.password) {
      this.message = "Password must be entered";
      return;
    } else {
      this.username = "";
      this.password = "";
      this.message = "Logged in Successfully";
    }
  }

  clear() {
    this.message = "";
  }
}
