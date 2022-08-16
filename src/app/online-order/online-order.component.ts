import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-online-order',
  templateUrl: './online-order.component.html',
  styleUrls: ['./online-order.component.css']
})
export class OnlineOrderComponent implements OnInit {

  wrap: any = [
    {
      "id": 1,
      "img": "assets/img/1.jpg",
      "title": "Blue Shades",
      "price": "$20",
      "desc": "some text"
    },
    {
      "id": 2,
      "img": "assets/img/2.jpg",
      "title": "Colourful",
      "price": "$20",
      "desc": "some text colorful"
    },
    {
      "id": 3,
      "img": "assets/img/3.jpg",
      "title": "Dark Shades",
      "price": "$20",
      "desc": "some text dark shades"
    },
    {
      "id": 4,
      "img": "assets/img/4.jpg",
      "title": "Dark Shades",
      "price": "$20",
      "desc": "some text dark shades"
    },
    {
      "id": 5,
      "img": "assets/img/5.jpg",
      "title": "Dark Shades",
      "price": "$20",
      "desc": "some text dark shades"
    },
    {
      "id": 6,
      "img": "assets/img/6.jpg",
      "title": "Dark Shades",
      "price": "$20",
      "desc": "some text dark shades"
    },
    {
      "id": 7,
      "img": "assets/img/7.jpg",
      "title": "Dark Shades",
      "price": "$20",
      "desc": "some text dark shades"
    },
    {
      "id": 8,
      "img": "assets/img/8.jpg",
      "title": "Dark Shades",
      "price": "$20",
      "desc": "some text dark shades"
    }
  ];

  autoParts: any = [
    {
      "id": 1,
      "img": "assets/img/aftermarket alloy.jpg",
      "title": "Alloy",
      "price": "$20",
      "desc": "aftermarket alloy"
    },
    {
      "id": 2,
      "img": "assets/img/chromemuffler.jpg",
      "title": "chromemuffler",
      "price": "$20",
      "desc": "chromemuffler"
    },
    {
      "id": 3,
      "img": "assets/img/gearstick.jpg",
      "title": "gearstick",
      "price": "$20",
      "desc": "gearstick"
    },
    {
      "id": 4,
      "img": "assets/img/headlight.jpg",
      "title": "headlight",
      "price": "$20",
      "desc": "headlight"
    },
    {
      "id": 5,
      "img": "assets/img/part1.jpg",
      "title": "part1",
      "price": "$20",
      "desc": "part1"
    },
    {
      "id": 6,
      "img": "assets/img/rgbheadlight.jpg",
      "title": "rgbheadlight",
      "price": "$20",
      "desc": "rgbheadlight"
    },
    {
      "id": 7,
      "img": "assets/img/roters.jpg",
      "title": "roters",
      "price": "$20",
      "desc": "roters"
    },
    {
      "id": 8,
      "img": "assets/img/suspension.jpg",
      "title": "suspension",
      "price": "$20",
      "desc": "suspension"
    },
    {
      "id": 8,
      "img": "assets/img/turbo.jpg",
      "title": "turbo",
      "price": "$20",
      "desc": "turbo"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
