import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http";
import {Contact} from "./contact";
const apiurl = "http://localhost:3000/api/contacts";
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  constructor(private http : HttpClient) { }
  
  getContacts(){
    return this.http.get(apiurl);
  } 

  addContacts(newcontact){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(apiurl,newcontact,httpOptions);
  }
  deleteContacts(id){
    return this.http.delete(apiurl+"/"+id);
  }
}
