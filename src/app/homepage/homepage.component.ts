import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  carousel: any = [
    {
      "id": 1,
      "img": "assets/img/pic4.jpg",
      "alt": "Wild landscape",
      "text": "Full Car Wrap"
    },
    {
      "id": 2,
      "img": "assets/img/pic1.jpg",
      "alt": "Wild landscape",
      "text": "Full Car Wrap"
    },
    {
      "id": 3,
      "img": "assets/img/pic3.jpg",
      "alt": "Wild landscape",
      "text": "Full Car Wrap"
    },
    {
      "id": 4,
      "img": "assets/img/pic6.jpg",
      "alt": "Wild landscape",
      "text": "Full Car Wrap"
    },
    {
      "id": 5,
      "img": "assets/img/pic7.jpg",
      "alt": "Wild landscape",
      "text": "Full Car Wrap"
    },
    {
      "id": 6,
      "img": "assets/img/pic8.jpg",
      "alt": "Wild landscape",
      "text": "Full Car Wrap"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
