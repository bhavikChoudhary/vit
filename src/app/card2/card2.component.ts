import { Component, OnInit } from '@angular/core';
import { DesignutilityServiceService } from '../appServices/designutility-service.service';
import { MessageService } from "../appServices/message.service";

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

  constructor(private _msgService: DesignutilityServiceService) { }

  ngOnInit(): void {
    this.products = this._msgService.product().subscribe(prductData => this.products = prductData)
  }

  products = {};

  onbtnClick(){
    this._msgService.messageAlert();
  }
}
