import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class MyData {
    fullname: string = '';
    contactNumber: string = '';
    email: string = '';
    appointment: string = '';
    date: string = '';
    constructor(fullname: string, contactNumber: string, email: string, appointment: string, date: string) {
        this.fullname = fullname,
            this.contactNumber = contactNumber,
            this.email = email,
            this.appointment = appointment,
            this.date = date
    }
}

@Injectable({
    providedIn: 'root'
})
export class InjectableService {
    // url = 'https://my-json-server.typicode.com/Geeyas/appointment/post';
    // url = 'https://geeyas.github.io/appointment/db.json';
    url = 'http://localhost:3000/post';
    // url = '../../appointment.json';
    constructor(private http: HttpClient) { }

    public doAdd(record: MyData): Observable<MyData> {
        return this.http.post<MyData>(this.url, record);
        //put takes in two argument. Frst one is URl and second one is object, which will be automatically covnerted into JSON format
    }

    public getAllData(): Observable<MyData> {
        return this.http.get<MyData>(this.url);
        //get all the data what's in the database
    }
}
