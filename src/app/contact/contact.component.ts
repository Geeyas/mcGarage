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

  async sendMsg() {
    if (!this.name) {
      this.nameMsg = "Name must be entered";
      return;
    } else if (!this.number) {
      this.numberMsg = "Number must be entered";
    } else if (isNaN(parseInt(this.number))) {
      this.numberMsg = "Invalid Number";
    } else if (!this.email) {
      this.emailMsg = "Email must be entered";
      return;
    } else if (!this.subject) {
      this.subjectMsg = "Subject must be entered";
      return;
    } else if (!this.message) {
      this.descpMsg = "Message must be entered";
      return;
    } else {
      await emailjs.send("service_8umtamb", "template_tjimcid", {
        from_name: this.name,
        fullname: this.name,
        number: this.number,
        email: this.email,
        subject: this.subject,
        message: this.message,
      }, "A_iw6yoFPOSo578BH");
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
      this.successMsg = "We have received your message!  One of our team member will be in touch with you shortly.";
    }
  }

  doClear() {
    this.nameMsg = "";
    this.emailMsg = "";
    this.subjectMsg = "";
    this.descpMsg = "";
    this.numberMsg = "";
  }

}
