import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'MCGarage';
  Tawk_API: any;
  Tawk_LoadStart: any;

  async ngOnInit() {
    await (this.Tawk_API = this.Tawk_API || {}, this.Tawk_LoadStart = new Date());
    await (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/62fd0fe237898912e963902c/1gam8c3ad';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }
}

