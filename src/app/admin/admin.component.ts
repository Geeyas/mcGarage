import { Component, OnInit } from '@angular/core';
import { InjectableService, MyData } from '../appointment.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  allData: MyData[] = new Array();
  errorMessage: string = '';

  constructor(private api: InjectableService) { }

  ngOnInit(): void {
  }

  getData() {
    this.api.getAllData().subscribe(
      (d: any) => {
        this.allData = d;
      },
      (err: any) => {
        this.errorMessage = "no records Found";
      }
    );
  }

}
