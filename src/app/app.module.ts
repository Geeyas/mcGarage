import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { OnlineOrderComponent } from './online-order/online-order.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';

const routes: Routes = [

  { path: "home", component: HomepageComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
  { path: "pricing", component: PricingComponent },
  { path: "contact", component: ContactComponent },
  { path: "onlineOrder", component: OnlineOrderComponent },
  { path: "quote", component: GetQuoteComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    FooterComponent,
    ServicesComponent,
    PricingComponent,
    OnlineOrderComponent,
    GetQuoteComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
