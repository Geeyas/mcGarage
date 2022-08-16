import { Component, OnInit } from '@angular/core';
import { InjectableService } from '../appointment.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private api: InjectableService) { }

  ngOnInit(): void {
  }

}
