import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.css']
})
export class Contact2Component implements OnInit {

  myReactiveForm:FormGroup
  genders = [
    {id: '01', gender:'Male'},
    {id: '02', gender:'Female'}
  ]
  controls;
  notAllowedNames = [
    'VIT', 'Bhavik'
  ]
  formStatus;
  constructor() { 
  }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetail' : new FormGroup({
        'username':new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
        'email':new FormControl(null , [Validators.required, Validators.email], this.NaEmails)
      }),
      'course':new FormControl('HTML'),
      'gender':new FormControl('Male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    })
    this.controls = (<FormArray>this.myReactiveForm.get('skills')).controls;
    // this.myReactiveForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // )
    this.myReactiveForm.statusChanges.subscribe(
      (status) => {
        console.log(status)
        this.formStatus = status
      }
    );
    // setTimeout(()=> {
    //   this.myReactiveForm.setValue({
    //     'userDetail':{
    //       'username':'Bhavik',
    //       'email':'xyz@gmail.co'
    //     },
    //     'course':'Javascript',
    //     'gender':'Male',
    //     'skills':[
    //       'PhotoShop'
    //     ]
    //   })
    // }, 2000)
    setTimeout(()=> {
      this.myReactiveForm.patchValue({
        'userDetail':{
          'email':'xyz@gmail.co'
        }
      })
    }, 2000)
  }

  onSubmit(){
    console.log(this.myReactiveForm);
    this.myReactiveForm.reset({
      'userDetail':{
             'username':'',
             'email':''
           },
           'course':'Javascript',
           'gender':'Male',
           'skills':[
             ''
           ]
    });
  }

  onAddSkills(){
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.myReactiveForm.get('skills')).push(control)
    console.log((<FormGroup>this.myReactiveForm.get('skills')).controls)
  }

  NaNames(control:FormControl){
    if (this.notAllowedNames.indexOf(control.value) !== -1){
      return {'nameIsNotAllowed':true}
    }
    return null;
  }

  NaEmails(control:FormControl): Promise<any> | Observable<any>{
    const myResponse = new Promise<any>((resolve,reject)=> {
      setTimeout(() => {
        if (control.value === 'anibharatc@gmail.com'){
          resolve({'emailNotAllowed':true})
        } else{
          resolve(null)
        }
      }, 1500)
    })
    return myResponse;
  }
}
