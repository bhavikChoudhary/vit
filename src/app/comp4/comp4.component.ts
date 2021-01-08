import { Component, OnInit } from '@angular/core';
import { DesignutilityServiceService } from '../appServices/designutility-service.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component implements OnInit {

  constructor(private _designService: DesignutilityServiceService) {
    this._designService.userName.
    subscribe(uname => {
        this.userName = uname;
      }
    )
  }

  ngOnInit(): void {
  }

  userName;

  updateUserName(username) {
    this._designService.userName.next(username.value)
  }
}
