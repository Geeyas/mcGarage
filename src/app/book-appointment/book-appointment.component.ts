import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  url: string = "http://localhost:3333/api";

  DayDAte = new Date();
  id: number = this.DayDAte.getTime();

  allData = [];
  data: string = '';

  name: string = "";
  number: string = "";
  email: string = "";
  appointment: string = ""
  date: string = "";
  time: string = "";

  errMsgName: string = "";
  errMsgNumber: string = "";
  errMsgApp: string = "";
  errMsgEmail: string = "";
  errMsgDate: string = "";
  errMsgTime: string = "";
  successMsg: string = "";

  regexEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexPhone: RegExp = /^\d{10}$/;

  constructor(private http: HttpClient) { }

  clear() {
    this.errMsgName = "";
    this.errMsgNumber = "";
    this.errMsgApp = "";
    this.errMsgEmail = "";
    this.errMsgDate = "";
    this.successMsg = "";
  }

  async validate(appointmentData: { name: string, number: string, email: string, appointment: string, date: string, time: string, id: number }) {

    const header = new HttpHeaders({ 'myHeader': 'Appointment Data' });

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
    } else if (!this.time) {
      this.errMsgTime = "Select Time";
      return;
    }
    else {
      //database table format
      const appointmentID = this.id;
      const fullName = this.name;
      const contactNum = this.number;
      const email = this.email;
      const appointment = this.appointment;
      const onDate = this.date;
      var onTime = this.time;
      await this.http.post(this.url, { appointmentID, fullName, contactNum, email, appointment, onDate, onTime }, { headers: header }).subscribe((response) => {
        console.log(response);
        this.name = "";
        this.number = "";
        this.email = "";
        this.appointment = ""
        this.date = "";
        this.time = "";
        this.errMsgName = "";
        this.errMsgNumber = "";
        this.errMsgApp = "";
        this.errMsgEmail = "";
        this.errMsgDate = "";
        this.successMsg = "Booked Successfully";
        this.fetchData();
      }), (err) => {
        this.successMsg = "Error in Booking Appointment";
      };
      this.successMsg = "Booking...";
    }
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
      // console.log(response);
    })
  }
}
