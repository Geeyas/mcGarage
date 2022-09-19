import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  url: string = "http://localhost:3333/api/signup";

  DayDAte = new Date();
  id: number = this.DayDAte.getTime();

  allData: any = [];

  num1: number = Math.floor(Math.random() * 100);;
  num2: number = Math.floor(Math.random() * 100);;
  sum: number = this.num1 + this.num2;

  name: string = "";
  number: string = "";
  gender: string = "";
  email: string = "";
  password: string = "";
  message: string = "";
  Successmessage: string = "";
  answer: number = null;

  regexEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexPhone: RegExp = /^\d{10}$/;

  emailArr = [];

  constructor(private http: HttpClient, private router: Router) { }
  async ngOnInit() {
    this.http.get(this.url).subscribe((res) => {
      this.allData = res;
      console.log(this.allData);
    }, (err) => {
      console.log(err);
    });
  }

  async register() {
    if (!this.name) {
      this.message = "Name is required";
      return;
    } else if (!this.number) {
      this.message = "Phone Number is required";
      return;
    } else if (this.regexPhone.test(this.number) == false) {
      this.message = "Enter 10 digit number";
      return;
    } else if (isNaN(parseInt(this.number))) {
      this.message = "Phone Number is not valid!!";
      return;
    } else if (!this.gender) {
      this.message = "Gender is required";
      return;
    } else if (!this.email) {
      this.message = "Email is required";
      return;
    } else if (this.regexEmail.test(this.email) == false) {
      this.message = "Email is not valid";
      return;
    } else if (!this.password) {
      this.message = "Password is required";
      return;
    } else {
      for (let i = 0; i < this.allData.length; i++) {
        this.emailArr.push(this.allData[i].email);
        console.log(this.allData[i].email);
      }

      const header = new HttpHeaders({ 'myHeader': 'Sign-Up Data' });
      const signupID = this.id;
      const fullName = this.name;
      const contactNum = this.number;
      const gender = this.gender;
      const email = this.email;
      const password = this.password;
      const check = this.email + this.password;

      if (this.answer == this.sum) {
        if (this.emailArr.includes(this.email)) {
          this.Successmessage = "Email already Exist";
        } else {
          this.Successmessage = "Registering New User..."
          await this.http.post(this.url, { signupID, fullName, contactNum, gender, email, password, check }, { headers: header }).subscribe((response) => {
            this.name = "";
            this.number = "";
            this.gender = "";
            this.email = "";
            this.password = "";
            this.Successmessage = "New User has been Registered Successfully";
            this.answer = 0;
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 1500)
          })
        }
      } else {
        window.alert("Invalid Captcha!!!");
      }
    }
  }

  clear() {
    this.message = "";
    this.Successmessage = "";
  }

  private async fetchData() {
    await this.http.get(this.url).pipe(map((responseMap) => {
      const products = [];
      for (const key in responseMap) {
        if (responseMap.hasOwnProperty(key)) {
          products.push({ ...responseMap[key], id: key })
        }
      }
      this.allData = products;
      return products;
    })).subscribe((response) => {
      console.log(response);
    })
  }
}
