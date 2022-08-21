import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  errorMessage: string = '';
  url: string = "https://mc-garage-d0474-default-rtdb.firebaseio.com/appointmentData.json";

  allData = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getData() {
    // this.errorMessage = 'Fetching Data';
    this.fetchData();
  }

  //https://www.youtube.com/watch?v=Nuh6hTDh31s&t=548s
  //got idea from this video
  private async fetchData() {
    await this.http.get(this.url).pipe(map((responseMap) => {
      const products = [];
      for (const key in responseMap) {
        if (responseMap.hasOwnProperty(key)) {
          products.push({ ...responseMap[key], id: key })
        }
      }
      this.allData = products;
      return products;
    })).subscribe((response) => {
      console.log(response);
    })
  }

}
