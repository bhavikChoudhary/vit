import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ng-for-push-splice',
  templateUrl: './ng-for-push-splice.component.html',
  styleUrls: ['./ng-for-push-splice.component.css']
})
export class NgForPushSpliceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  users =[];

  onCreateUser(user){
    this.users.push({
      name: user.value
    })

    if(this.users.length>3){
      this.router.navigate(['product']);
    }
  }

  onDeleteUser(user){
    this.users.splice(this.users.length-1)
  }

  onRemoveUser(item){
    this.users.splice(item, 1)
  }
}
