import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  constructor() { }

  onDeactivate() {
    window.scrollTo(0, 0);
  }
  service() {
    window.scrollTo(0, 980);
  }

  wrapService() {
    window.scrollTo(0, 1450);
  }

  customAdd() {
    window.scrollTo(0, 1730);
  }

  orderWraps() {
    window.scrollTo(0, 380);
  }

  orderParts() {
    window.scrollTo(0, 1600);
  }

}


