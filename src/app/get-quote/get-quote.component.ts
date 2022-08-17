import { Component } from '@angular/core';

@Component({
  selector: 'app-get-quote',
  templateUrl: './get-quote.component.html',
  styleUrls: ['./get-quote.component.css']
})
export class GetQuoteComponent {

  name: string = "";
  email: string = "";
  phone: string = "";
  appointment: string = "";
  message: string = "";

  errMsg: string = "";
  successMsg: string = "";

  regexEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  constructor() { }

  clear() {
    this.errMsg = "";
    this.successMsg = "";
  }

  getQuote() {
    if (!this.name) {
      this.errMsg = "Name is required";
      return;
    } else if (!this.email) {
      this.errMsg = "Email is required";
      return;
    } else if (this.regexEmail.test(this.email) == false) {
      this.errMsg = "Email is not valid";
      return;
    } else if (!this.phone) {
      this.errMsg = "Phone is required";
      return;
    } else if (isNaN(parseInt(this.phone))) {
      this.errMsg = "Phone number isn't valid";
      return;
    } else if (!this.appointment) {
      this.errMsg = "Appointment is required";
      return;
    } else if (!this.message) {
      this.errMsg = "Message is required";
      return;
    } else {
      this.successMsg = "Your quote request has been sent successfully to your email. Thank you!"
      this.name = "";
      this.email = "";
      this.phone = "";
      this.appointment = "";
      this.message = "";
      this.errMsg = "";
    }

  }

}
