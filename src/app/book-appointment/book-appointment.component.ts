import { Component } from '@angular/core'; @Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {

  name: string = "";
  number: string = "";
  email: string = "";
  appointment: string = ""
  date: string = "";

  errMsgName: string = "";
  errMsgNumber: string = "";
  errMsgApp: string = "";
  errMsgEmail: string = "";
  errMsgDate: string = "";
  successMsg: string = "";

  regexEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexPhone: RegExp = /^\d{10}$/;

  constructor() { }

  clear() {
    this.errMsgName = "";
    this.errMsgNumber = "";
    this.errMsgApp = "";
    this.errMsgEmail = "";
    this.errMsgDate = "";
    this.successMsg = "";
  }

  validate() {
    if (!this.name) {
      this.errMsgName = "Full name required";
      return;
    } else if (!this.number) {
      this.errMsgNumber = "Contact number required";
      return;
    } else if (isNaN(parseInt(this.number))) {
      this.errMsgNumber = "Contact number is not valid";
      return;
    } else if (this.regexPhone.test(this.number) == false) {
      this.errMsgNumber = "Enter 10 digit number";
      return;
    } else if (!this.email) {
      this.errMsgEmail = "Email address required";
      return;
    } else if (this.regexEmail.test(this.email) == false) {
      this.errMsgEmail = "Email is not valid";
      return;
    } else if (this.appointment == "") {
      this.errMsgApp = "Select Appointment for";
      return;
    } else if (!this.date) {
      this.errMsgDate = "Select Date";
      return;
    } else {
      this.name = "";
      this.number = "";
      this.email = "";
      this.appointment = ""
      this.date = "";
      this.errMsgName = "";
      this.errMsgNumber = "";
      this.errMsgApp = "";
      this.errMsgEmail = "";
      this.errMsgDate = "";
      this.successMsg = "Appointment Booked succsfully";

    }
  }
}
