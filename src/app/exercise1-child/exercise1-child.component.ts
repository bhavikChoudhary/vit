import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercise1-child',
  templateUrl: './exercise1-child.component.html',
  styleUrls: ['./exercise1-child.component.css']
})
export class Exercise1ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  users=[];
  admins=[];
  @Output() usersArray = new EventEmitter<any>();
  @Output() adminsArray = new EventEmitter<any>();
  @Input() totalUsers:number;
  @Input() totalAdmins:number;
  @Input() showTotalUsers:boolean;
  @Input() showTotalAdmins:boolean;


  onCreateUser(user){
    this.users.push(user);
    this.totalUsers = this.users.length;
    this.usersArray.emit(this.users);
    if (this.users.length > 0){
      this.showTotalUsers = true;
    }
  }

  onCreateAdmin(admin){
    this.admins.push(admin);
    this.totalAdmins = this.admins.length;
    this.adminsArray.emit(this.admins);
    if (this.admins.length > 0){
      this.showTotalAdmins = true;
    }
    console.log(this.admins)
  }
}
