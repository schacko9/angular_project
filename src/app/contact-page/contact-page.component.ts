import { Component, OnInit } from '@angular/core';
import { Contact2 } from 'src/Contacts2';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  
  contact = new Contact2; 
  submitted:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  submit(form:any){
    this.contact.name = form.name
    this.contact.email = form.email
    this.contact.message = form.message


    window.alert("Thank you, " + this.contact.name + "! We've recieved your message and will get back to you shortly.")
    console.log(form)
    this.submitted = true;
  }
}
