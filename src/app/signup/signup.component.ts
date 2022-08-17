import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  num1: number = Math.floor(Math.random() * 100);;
  num2: number = Math.floor(Math.random() * 100);;
  sum: number = this.num1 + this.num2;

  name: string = "";
  number: string = "";
  gender: string = "";
  email: string = "";
  password: string = "";
  message: string = "";
  answer: number = 0;

  regexEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor() { }

  register() {
    if (!this.name) {
      this.message = "Name is required";
      return;
    } else if (!this.number) {
      this.message = "Phone Number is required";
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
      if (this.answer == this.sum) {
        this.name = "";
        this.number = "";
        this.gender = "";
        this.email = "";
        this.password = "";
        this.message = "New user has been registered Successfully";
        this.answer = 0;
      } else {
        window.alert("Invalid Captcha!!!");
      }
    }
  }

  clear() {
    this.message = "";
  }
}
