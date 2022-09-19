import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id: number;
  errorMessage: string = '';
  url: string = "http://localhost:3333/api/bookappointment/";
  allData = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  getData() {
    this.fetchData();
  }

  //https://www.youtube.com/watch?v=Nuh6hTDh31s&t=548s
  //got idea from this video
  private async fetchData() {
    const header = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest',
      'MyClientCert': '',        // This is empty
      'MyToken': ''              // This is empty
    });
    await this.http.get(this.url, { headers: header }).pipe(map((responseMap) => {
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
    // var urlDelete = `http://localhost:3333/api/${this.id}`; ------> Template literal
    // var urlDelete = "http://localhost:3333/api/bookappointment/";

    if (window.confirm("Are you sure to delete the data") == true) {
      this.http.delete(this.url + this.id).subscribe((response) => {
        this.errorMessage = "Deletion Successful!!"
        this.id = null;
        this.getData();
        window.scrollTo(0, 0);
        setTimeout(() => {
          this.errorMessage = "";
          window.scrollTo(0, document.body.scrollHeight);
        }, 1500)
      }, (err) => {
        console.log(err);
        this.errorMessage = "Unsuccessful in deleting data!"
        window.scrollTo(0, 0);
        setTimeout(() => {
          this.errorMessage = "";
          window.scrollTo(0, document.body.scrollHeight);
        }, 1500)
      });
    } else {
      this.errorMessage = "Deletion Cancelled!"
      window.scrollTo(0, 0);
      setTimeout(() => {
        this.errorMessage = "";
        window.scrollTo(0, document.body.scrollHeight);
      }, 1500)
      this.id = null;
    }

  }
  logOut() {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
