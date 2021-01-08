import { Component, OnInit } from '@angular/core';
import { DesignutilityServiceService } from '../appServices/designutility-service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

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
