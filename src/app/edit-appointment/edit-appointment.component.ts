import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  urlSearch: string = "http://localhost:3333/api/bookappointment/search/";
  urlUpdate: string = "http://localhost:3333/api/bookappointment/update/";

  isShowSearch: boolean = true;
  isShowEdit: boolean = false;
  errMsg: string = '';
  successMsg: string = '';

  nameSearch: string = '';
  // allData: any = [];

  appointmentID: string = '';
  name: string = '';
  number: string = '';
  email: string = '';
  appointment: string = '';
  date: string = '';
  time: string = '';
  successMsgApp = '';
  errMsgApp = '';
  regexEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexPhone: RegExp = /^\d{10}$/;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  fetch() {
    this.http.get(this.urlSearch + this.nameSearch).subscribe((res) => {
      this.isShowSearch = false;
      this.isShowEdit = true;
      // this.allData = res;
      // console.log(this.allData);
      this.appointmentID = res[0].appointmentID;
      this.name = res[0].fullName;
      this.number = res[0].contactNum;
      this.email = res[0].email;
      this.appointment = res[0].appointment;
      this.date = res[0].onDate;
      this.time = res[0].onTime;
    }, (err) => {
      this.errMsg = "Error in editing data";
    });
  }
  update() {
    if (!this.name) {
      this.errMsgApp = "Full name required";
      return;
    } else if (!this.number) {
      this.errMsgApp = "Contact number required";
      return;
    } else if (isNaN(parseInt(this.number))) {
      this.errMsgApp = "Contact number is not valid";
      return;
    } else if (this.regexPhone.test(this.number) == false) {
      this.errMsgApp = "Enter 10 digit number";
      return;
    } else if (!this.email) {
      this.errMsgApp = "Email address required";
      return;
    } else if (this.regexEmail.test(this.email) == false) {
      this.errMsgApp = "Email is not valid";
      return;
    } else if (this.appointment == "") {
      this.errMsgApp = "Select Appointment for";
      return;
    } else if (!this.date) {
      this.errMsgApp = "Select Date";
      return;
    } else if (!this.time) {
      this.errMsgApp = "Select Time";
      return;
    }
    else {
      var dateCheck = 'Date:' + this.date + ' | Time: ' + this.time;
      // localhost:3333/api/bookappointment/update
      this.http.put(this.urlUpdate, { fullName: this.name, contactNum: this.number, email: this.email, appointment: this.appointment, onDate: this.date, onTime: this.time, dateCheck: dateCheck }).subscribe(
        (res) => { this.successMsgApp = "Update successfully" },
        (err) => { this.errMsgApp = "Error In Updating data" });
    }
  }
  clear() {
    this.errMsg = '';
    this.successMsg = '';
    this.successMsgApp = '';
    this.errMsgApp = '';
  }
}
