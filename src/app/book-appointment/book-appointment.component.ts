import { Component } from '@angular/core';
import { InjectableService, MyData } from '../appointment.service';


@Component({
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

  constructor(private api: InjectableService) { }

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
    } else if (!this.email) {
      this.errMsgEmail = "Email address required";
      return;
    } else if (this.appointment == "") {
      this.errMsgApp = "Select Appointment for";
      return;
    } else if (!this.date) {
      this.errMsgDate = "Select Date";
      return;
    } else {
      this.api.doAdd(new MyData(this.name, this.number, this.email, this.appointment, this.date)).subscribe(
        (data: MyData) => {
          //clearing all the input fields to get ready for next input after successful data entery
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
        }, (error) => {
          this.successMsg = error + "Problem in booking an appointment";
        });

    }
  }
}
