import { Component } from '@angular/core';

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

  // constructor(private contactData: InterfaceService) { }

  sendMsg() {
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
