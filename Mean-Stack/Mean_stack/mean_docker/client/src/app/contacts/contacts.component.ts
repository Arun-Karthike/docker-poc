import { Component, OnInit } from '@angular/core';
import {ContactService} from "../contact.service";
import {Contact} from "../contact";

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts : any;
contact : Contact;
firstname : String;
lastname : String;
phone : String;
  constructor(private contactservice : ContactService) { }

  ngOnInit() {
    this.getContacts();
  }
  getContacts(){
    this.contactservice.getContacts().subscribe(contacts=>{
      this.contacts = contacts;     
    })
  }
  addContact(){
    const newContact = {
      firstname : this.firstname,
      lastname : this.lastname,
      phone : this.phone
    }
    this.contactservice.addContacts(newContact).subscribe(data=>{
      console.log(data);
      this.contacts.push(newContact);
    })
  }

  deleteContact(id : String){
    this.contactservice.deleteContacts(id).subscribe(data=>{
      console.log(data);
      this.getContacts();
    })
  }

}
