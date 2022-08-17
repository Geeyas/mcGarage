import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nameMsg: string = "";
  emailMsg: string = "";
  numberMsg: string = "";
  subjectMsg: string = "";
  descpMsg: string = "";

  name: string = "";
  email: string = "";
  number: string = "";
  subject: string = "";
  message: string = "";
  successMsg: string = "";

  regexEmail: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  regexPhone: RegExp = /^\d{10}$/;

  async sendMsg() {
    if (!this.name) {
      this.nameMsg = "Name must be entered";
      return;
    } else if (!this.number) {
      this.numberMsg = "Number must be entered";
      return;
    } else if (isNaN(parseInt(this.number))) {
      this.numberMsg = "Invalid Number";
      return;
    } else if (this.regexPhone.test(this.number) == false) {
      this.numberMsg = "Enter 10 digit number";
      return;
    } else if (!this.email) {
      this.emailMsg = "Email must be entered";
      return;
    } else if (this.regexEmail.test(this.email) == false) {
      this.emailMsg = "Email is not valid";
      return;
    } else if (!this.subject) {
      this.subjectMsg = "Subject must be entered";
      return;
    } else if (!this.message) {
      this.descpMsg = "Message must be entered";
      return;
    } else {
      this.successMsg = "Message Sending ..."
      await emailjs.send("service_8umtamb", "template_tjimcid", {
        from_name: this.name,
        fullname: this.name,
        number: this.number,
        email: this.email,
        subject: this.subject,
        message: this.message,
      }, "A_iw6yoFPOSo578BH").then((result: EmailJSResponseStatus) => {
        this.nameMsg = "";
        this.emailMsg = "";
        this.subjectMsg = "";
        this.descpMsg = "";
        this.numberMsg = "";
        this.name = "";
        this.email = "";
        this.subject = "";
        this.message = "";
        this.number = "";
        this.successMsg = "Message Sent Successfully!!";
      }, (error) => {
        this.successMsg = "Error in sending message. Please try again";
      });
    }
  }

  doClear() {
    this.nameMsg = "";
    this.emailMsg = "";
    this.subjectMsg = "";
    this.descpMsg = "";
    this.numberMsg = "";
    this.successMsg = "";
  }

}
