import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  url = "http://localhost:3000/feedback"
  feedback = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.fetch();
    console.log(JSON.stringify(this.url));
  }

  private async fetch() {
    await this.http.get(this.url).pipe(map((responseMap) => {
      const products = [];
      for (const key in responseMap) {
        if (responseMap.hasOwnProperty(key)) {
          products.push({ ...responseMap[key], id: key })
        }
      }
      this.feedback = products;
      return products;
    })).subscribe((response) => {
      // console.log(response); //----> this response contains all the values getting from database
      // this.feedback = response;
    })
  }

}
