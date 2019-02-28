import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  formSubmitted = false;

  constructor() { }

  ngOnInit() {
    this.initContactForm();
  }

  initContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl(null,Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      subject: new FormControl(null,Validators.required),
      body: new FormControl(null,Validators.required)
    });
  }

  submitContact(){
    this.formSubmitted = true;
    console.log("Form data:",this.contactForm.value);
    console.log("Form:",this.contactForm);
  }

}
