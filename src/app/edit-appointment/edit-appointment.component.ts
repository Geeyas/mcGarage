import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-appointment',
  templateUrl: './edit-appointment.component.html',
  styleUrls: ['./edit-appointment.component.css']
})
export class EditAppointmentComponent implements OnInit {

  errMsg: string = '';
  successMsg: string = '';

  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  validate() {

  }
  clear() {

  }

}
