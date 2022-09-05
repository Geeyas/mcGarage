import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: number;
  errorMessage: string = '';
  url: string = "http://localhost:3333/api/";
  allData = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  getData() {
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
      // console.log(response); ----> this response contains all the values getting from database
    })
  }

  async delete() {
    var urlDelete = `http://localhost:3333/api/${this.id}`;
    if (window.confirm("Are you sure to delete the data") == true) {
      this.http.delete(this.url + this.id).subscribe((response) => {
        this.errorMessage = "Deletion Successful!!"
        this.id = null;
        this.getData();
      }, (err) => {
        console.log(err);
        this.errorMessage = "Unsuccessful in deleting data!"
        setTimeout((e) => {
          this.errorMessage = ""
        }, 1500)
      });
    } else {
      this.errorMessage = "Deletion Cancelled!"
      setTimeout((e) => {
        this.errorMessage = "";
      }, 1500)
      this.id = null;
    }

  }

}
