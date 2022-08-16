import { Component, OnInit } from "@angular/core";

@Component({

    selector: "app- products",
    template: "",
    styles: [],
})

export class AutoPartsComponent implements OnInit {

    public data: any;

    constructor() { }

    ngOnInit(): void {
        // array of json for product list
        this.data = {
            productList: [
                {
                    "id": new Date().getTime(),
                    "image": "",
                    "title": "",
                    "price": "",
                    "description": ""
                }
            ]
        }
    }
}

