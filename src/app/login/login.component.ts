import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  messageErr: string = "";
  messageSucc: string = "";
  password: string = "";
  url: string = "http://localhost:3333/api/signup";

  allData: any = [];
  length: number = 0;
  index: number = null;

  email = [];
  passwrd = [];

  adminUsername: string = "mcgarage6060@gmail.com";
  adminPassword: string = "admin";
  constructor(private router: Router, private http: HttpClient) { }

  async ngOnInit() {
    await this.http.get(this.url).subscribe((response) => {
      this.allData = response;

      this.allData.forEach((data) => {
        this.email.push(data.email);
        this.passwrd.push(data.passwrd);
      })
    }, (err) => {
      this.messageErr = "Error in Logging in";
    })


  }
  getdata() {

  }
  login() {
    if (!this.username) {
      this.messageErr = "Email must be entered";
      return;
    } else if (!this.password) {
      this.messageErr = "Password must be entered";
      return;
    } else {
      if (this.email.includes(this.username) && this.passwrd.includes(this.password)) {
        if (this.username == this.adminUsername && this.password == this.adminPassword) {
          this.messageSucc = "Login Successfull";
          setTimeout(() => {
            this.router.navigate(['/admin']);
          }, 1500)
        } else {
          this.messageSucc = "Login Successfull";
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 1500)
        }
      } else {
        this.username = "";
        this.password = "";
        this.messageErr = "Logged Failed";
      }
    }
  }

  // FUNCTION gets fired when the google signin button is pressed and the values are fetched from the database to the console
  getData() {
    this.http.get(this.url).subscribe((response) => {
      console.log(response);
    }, (err) => {
      this.messageErr = "Error in Logging in";
    })
  }

  clear() {
    this.messageErr = "";
    this.messageSucc = "";
  }
}
