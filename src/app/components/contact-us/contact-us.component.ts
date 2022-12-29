import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Meta } from '@angular/platform-browser';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contactForm: any;

  constructor(
    private meta: Meta, 
    private formBuilder: FormBuilder
  ) 
    { }

  ngOnInit() { 
    this.meta.addTags([
      { name: 'charset', content: 'UTF-8' }, 
      { name: 'description', content: 'Please reach out to us if you would like to speak to any of the team.' }, 
      { name: 'keywords', content: 'contact, us, email, telephone, address, recruitment' }, 
      { name: 'author', content: 'Metro Recruitment' }
    ]);

    this.contactForm = this.formBuilder.group({
      firstName: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)], updateOn: 'blur' }],
      lastName: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(30)], updateOn: 'blur' }],
      email: ['', { validators: [Validators.required, Validators.email], updateOn: 'blur' }],
      phone: ['', { validators: [Validators.required, Validators.minLength(10)], updateOn: 'blur' }],
      subject: ['', { validators: [Validators.required, Validators.minLength(2)], updateOn: 'blur' }],
      message: ['', { validators: [Validators.required, Validators.minLength(2), Validators.maxLength(500)], updateOn: 'blur' }],
    });
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get subject() {
    return this.contactForm.get('subject');
  }

  get message() {
    return this.contactForm.get('message');
  }

  onSubmit() {
    this.contactForm.markAllAsTouched(true);
  }

}
