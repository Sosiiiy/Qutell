import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private _HttpClient:HttpClient) { }

  ngOnInit(): void {
  }
  contactForm = new FormGroup({
    firstName: new FormControl('',[Validators.required , Validators.minLength(2),Validators.maxLength(6)]),
    middleName: new FormControl('',[Validators.required , Validators.minLength(2),Validators.maxLength(6)]),
    lastName: new FormControl('',[Validators.required , Validators.minLength(2),Validators.maxLength(6)]),
    title: new FormControl('',[Validators.required, Validators.minLength(2),Validators.maxLength(20)]),
    description: new FormControl('',[Validators.required , Validators.minLength(10),Validators.maxLength(100)]),
    email:new FormControl('',[Validators.required ,Validators.email]),
    others:new FormControl('',[ Validators.minLength(1),Validators.maxLength(50)])
  })

  tosubmit(){
   console.log(this.contactForm.value);
   this._HttpClient.post('https://takidapp.com:8007/api/ContactUs/Add',this.contactForm.value)
   .subscribe((result)=>{ console.log("result",result)})
  }

}
