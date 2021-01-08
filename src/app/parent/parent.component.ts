import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proSelected:boolean = false;
  selProduct:string;
  public addedProduct:any;

  onSelectProduct(pro){
    this.proSelected=true;
    this.selProduct=pro
  }

  onAddedProduct(proData){
    this.addedProduct = proData;
  }


}
