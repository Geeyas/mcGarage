import { Injectable } from "@angular/core";

export class Interface {
    name: string = "";
    email: string = "";
    subject: string = "";
    message: string = "";
}

@Injectable()
export class InterfaceService {
    contactData: Interface[] = [];

    addData(data: Interface) {
        fetch("http://localhost:2000/post", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}