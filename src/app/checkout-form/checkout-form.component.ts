import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/Contacts';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {
  name:string = '';
  msg:string = '@gmail.com';
  contact = new Contact; 
  submitted:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  submit(form:any){
    this.contact.firstName = form.firstName
    this.contact.lastName = form.lastName
    this.contact.email = form.email

    window.alert("Hello " + this.contact.firstName + ", you have successfully placed your order!")
    console.log(form)
    this.submitted = true;
  }
}
