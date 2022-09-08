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
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/BLACK-PLAID-VINYL-NEW-THUMBNAIL-20_grande.jpg?v=1659112677",
      "title": "Black Stealth Plaid",
      "price": "$11.85"
    },
    {
      "id": 2,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/kevlar-green-texture-with-VViViD-logo_grande.jpg?v=1650552529",
      "title": "Holographic Weave - Green Gloss",
      "price": "$22.89"
    },
    {
      "id": 3,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/kevlar-blue-texture-with-VViViD-logo_grande.jpg?v=1650552209",
      "title": "Holographic Weave - Blue Gloss",
      "price": "$22.89"
    },
    {
      "id": 4,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/redkevlar_grande.jpg?v=1650550606",
      "title": "Holographic Weave - Red Gloss",
      "price": "$22.89"
    },
    {
      "id": 5,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/81avWQc3F9L._AC_SL1500_grande.jpg?v=1650546017",
      "title": "Micro Clear Airtint - Headlight Tint",
      "price": "$22.89"
    },
    {
      "id": 6,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/thumbnail_6017a9a3-1eb5-4789-8c60-e3d8c6b8ca65_grande.jpg?v=1649173813",
      "title": "Glass Forged Carbon",
      "price": "$11.85"
    },
    {
      "id": 7,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/Texture-pic-with-VViViD-corner_1_grande.jpg?v=1645042830",
      "title": "Designer Carbon Fiber 'Triangles'",
      "price": "$11.85"
    },
    {
      "id": 8,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/UT-THUMBNAIL-LS_grande.png?v=1643736954",
      "title": "Headlight Tint - Light Smoke",
      "price": "$29.99"
    },

    {
      "id": 9,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/UT-THUMBNAIL-DS_grande.png?v=1643735800",
      "title": "Headlight Tint - Dark Smoke",
      "price": "$29.99"
    },
    {
      "id": 10,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/ULTRA-GLOSS-MOSSY-GREEN_grande.png?v=1643915321",
      "title": "Ultra Gloss - Khaki Green",
      "price": "$11.04"
    },
    {
      "id": 11,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/ULTRA-GLOSS-CHINA-BLUE_grande.png?v=1643915319",
      "title": "Ultra Gloss - China Blue",
      "price": "$11.04"
    },
    {
      "id": 12,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/19624-19624-porsche-SonomaGreenbeforeafter_grande.jpg?v=1643915323",
      "title": "Ultra Gloss - Metallic Sonoma Green",
      "price": "$11.04"
    },
    {
      "id": 13,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/FORGED-CARBON-THUMBNAIL_grande.png?v=1643218471",
      "title": "Black Forged Carbon",
      "price": "$11.85"
    },
    {
      "id": 14,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/VViViDHolographicClearLazerHeadlightTint-Texturepicnologo_grande.jpg?v=1643732033",
      "title": "Headlight Tint - Clear Laser",
      "price": "$20.24"
    },
    {
      "id": 15,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/ULTRA-GLOSS-THUMBNAIL-02_large.png?v=1638545625",
      "title": "Ultra Gloss - White",
      "price": "$11.04"
    },
    {
      "id": 16,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/61DxI29rvNL._AC_SL1500_large.jpg?v=1640185567",
      "title": "Army Green Stealth Camo",
      "price": "$11.85"
    },
    {
      "id": 17,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/GhostMetalDarkGreyStealthCamoMediumSize_large.jpg?v=1640185612",
      "title": "Ghost Metal Dark Grey Stealth Camo",
      "price": "$11.85"
    },
    {
      "id": 18,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/ForgedGhostMetalDarkGreyCarbon_large.jpg?v=1640185587",
      "title": "Ghost Metal Dark Grey Forged Carbon",
      "price": "$11.85"
    },
    {
      "id": 19,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/ForgedCarbonTextureArmyGreen_large.jpg?v=1640185545",
      "title": "Ghost Metal Dark Green Forged Carbon",
      "price": "$11.85"
    },
    {
      "id": 20,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/BioHEX_MicroHeadlightTaillightTint-Yellow2021-MainpicwithGFX_grande.jpg?v=1626878814",
      "title": "Headlight Tint - Micro Yellow Air Tint",
      "price": "$22.89"
    },
    {
      "id": 21,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/BioHEX_MicroHeadlightTaillightTint-Red2021-MainpicwithGFX_grande.jpg?v=1626878656",
      "title": "Headlight Tint - Micro Red Air Tint",
      "price": "$22.89"
    },
    {
      "id": 22,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/BioHEX_MicroHeadlightTaillightTint-Blue2021-MainpicwithHGX_grande.jpg?v=1626877880",
      "title": "Headlight Tint - Micro Blue Air Tint",
      "price": "$22.89"
    },
    {
      "id": 23,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/HoloHex-Chrome-Thumbnail_large.png?v=1639582271",
      "title": "HoloHex Chrome",
      "price": "$15.64"
    },
    {
      "id": 24,
      "img": "https://cdn.shopify.com/s/files/1/1087/5700/products/HoloHex-Chrome-Thumbnail_large.png?v=1639582271",
      "title": "Chrome",
      "price": "$5000.64"
    },

  ];

  autoParts: any = [

  ]

  constructor() { }

  ngOnInit(): void {
  }

}

//
// {
  // "id": 1,
  // "img": "assets/img/aftermarket alloy.jpg",
  // "title": "Alloy",
  // "price": "$20",
  // "desc": "aftermarket alloy"
// },
// {
  // "id": 2,
  // "img": "assets/img/chromemuffler.jpg",
  // "title": "chromemuffler",
  // "price": "$20",
  // "desc": "chromemuffler"
// },
// {
  // "id": 3,
  // "img": "assets/img/gearstick.jpg",
  // "title": "gearstick",
  // "price": "$20",
  // "desc": "gearstick"
// },
// {
  // "id": 4,
  // "img": "assets/img/headlight.jpg",
  // "title": "headlight",
  // "price": "$20",
  // "desc": "headlight"
// },
// {
  // "id": 5,
  // "img": "assets/img/part1.jpg",
  // "title": "part1",
  // "price": "$20",
  // "desc": "part1"
// },
// {
  // "id": 6,
  // "img": "assets/img/rgbheadlight.jpg",
  // "title": "rgbheadlight",
  // "price": "$20",
  // "desc": "rgbheadlight"
// },
// {
  // "id": 7,
  // "img": "assets/img/roters.jpg",
  // "title": "roters",
  // "price": "$20",
  // "desc": "roters"
// },
// {
  // "id": 8,
  // "img": "assets/img/suspension.jpg",
  // "title": "suspension",
  // "price": "$20",
  // "desc": "suspension"
// },
// {
  // "id": 8,
  // "img": "assets/img/turbo.jpg",
  // "title": "turbo",
  // "price": "$20",
  // "desc": "turbo"
// },