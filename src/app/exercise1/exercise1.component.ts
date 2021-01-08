import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})
export class Exercise1Component implements OnInit{

  constructor() { }

  ngOnInit(): void {
   console.log('init is called!')
  }

  users = [];
  admins = []
  showTotalUsers:boolean;
  showTotalAdmins:boolean;
  totalUsers:number;
  totalAdmins:number;

  onAddUsers(event){
    this.users = event;
  }

  onAddAdmins(event){
    this.admins = event;
  }

  onRemoveUser(indx){
    this.users.splice(indx,  1)
    this.totalUsers = this.users.length
    if (this.users.length === 0){
      this.showTotalUsers = false;
    }
  }

  onRemoveAdmin(indx){
    this.admins.splice(indx, 1)
    this.totalAdmins = this.admins.length
    if (this.admins.length === 0){
      this.showTotalAdmins = false;
    }
  }
}
