import { Component, OnInit } from '@angular/core';
import { DesignutilityServiceService } from '../appServices/designutility-service.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  constructor(private _designService:DesignutilityServiceService) {
    this._designService.userName.subscribe(
      uname => {
        this.userName = uname;
      }
    )
  }

  ngOnInit(): void {
  }

  userName;

  updateUserName(username){
    // this.userName =username.value;
    this._designService.userName.next(username.value)
  }
}
