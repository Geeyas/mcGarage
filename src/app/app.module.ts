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
import { PricingComponent } from './breadcrumbs/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { OnlineOrderComponent } from './online-order/online-order.component';
import { GetQuoteComponent } from './get-quote/get-quote.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { CustomisationComponent } from './customisation/customisation.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { FAQComponent } from './faq/faq.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [

  { path: "home", component: HomepageComponent },
  { path: "about", component: AboutComponent },
  { path: "services", component: ServicesComponent },
  { path: "pricing", component: PricingComponent },
  { path: "contact", component: ContactComponent },
  { path: "onlineOrder", component: OnlineOrderComponent },
  { path: "onlineOrder/cart", component: AddCartComponent },
  { path: "home/quote", component: GetQuoteComponent },
  { path: "customisation", component: CustomisationComponent },
  { path: "login/signup", component: SignupComponent },
  { path: "login/forgotPassword", component: ForgotPasswordComponent },
  { path: "services/bookAppointment", component: BookAppointmentComponent },
  { path: "services/quote", component: GetQuoteComponent },
  { path: "login", component: LoginComponent },
  { path: "admin", component: AdminComponent },
  { path: "terms", component: TermsComponent },
  { path: "privacy", component: PrivacyPolicyComponent },
  { path: "bookAppointment", component: BookAppointmentComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: ErrorPageComponent }
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
    ContactComponent,
    CustomisationComponent,
    LoginComponent,
    SignupComponent,
    AdminComponent,
    FAQComponent,
    ForgotPasswordComponent,
    BookAppointmentComponent,
    AddCartComponent,
    TermsComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
