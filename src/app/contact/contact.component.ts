import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('userForm') userForm = NgForm;
  defaultCourse = 'Angular';
  username = '';
  genders = [
    {id: '01', gender:'Male'},
    {id: '02', gender:'Female'}
  ]
  defaultGender = 'Male'
  constructor() { }

  ngOnInit(): void {
    
  }

  onSubmit(form:NgForm){
    console.log(form)
  }

  // setUsername(){
  //   this.userForm.setValue({
  //     userDetail: {
  //       username: 'VIT',
  //       email: ''
  //     },
  //     course:'',
  //     gender: ''
  //   })
  // }
  setUsername(){
    
  }
}
