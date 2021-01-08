import { Component, OnInit } from '@angular/core';
import { DesignutilityServiceService } from '../appServices/designutility-service.service';
import { MessageService } from "../appServices/message.service";

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private _msgService: DesignutilityServiceService) { }

  ngOnInit(): void {
    // this.products = this._msgService.products;

    this._msgService.product().
      subscribe(productData => this.products = productData)
  }

  products = {}

  onbtnClick(){
    this._msgService.messageAlert();
  }

}
