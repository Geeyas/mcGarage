import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  feedback: any = [
    {
      "id": 1,
      "img": "https://joeschmoe.io/api/v1/Ram",
      "name": "Ram",
      "feedback": "Nice website"
    },
    {
      "id": 2,
      "img": "https://joeschmoe.io/api/v1/Shyam",
      "name": "Shyam",
      "feedback": "Nice Work"
    },
    {
      "id": 3,
      "img": "https://joeschmoe.io/api/v1/Hari",
      "name": "Hari",
      "feedback": "Nice Job"
    },
    {
      "id": 4,
      "img": "https://joeschmoe.io/api/v1/Seeta",
      "name": "Seeta",
      "feedback": "Good!"
    },
    {
      "id": 5,
      "img": "https://joeschmoe.io/api/v1/Geeta",
      "name": "Geeta",
      "feedback": "Nice People"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
