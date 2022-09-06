import { HttpClient } from '@angular/common/http';
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
  url: string = "http://localhost:3333/api/signup";


  adminUsername: string = "admin";
  adminPassword: string = "admin";
  constructor(private router: Router, private http: HttpClient) { }

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

  // FUNCTION gets fired when the google signin button is pressed and the values are fetched from the database to the console
  getData() {
    this.http.get(this.url).subscribe((response) => {
      console.log(response);
    }, (err) => {
      this.message = "Error in Logging in";
    })
  }

  clear() {
    this.message = "";
  }
}
