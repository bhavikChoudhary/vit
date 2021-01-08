import { Component, OnInit } from '@angular/core';
import { DesignutilityServiceService } from '../appServices/designutility-service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

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
    this._designService.userName.next(username.value)
  }
}
