import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() placeHolderText:string='abc'

  constructor() { }

  ngOnInit(): void {
  }

  @Input() productSelected:boolean=false;
  @Input() selectedProduct:string;
  @Output() addProduct = new EventEmitter<any>()

  onAddedProduct(){
    this.addProduct.emit(this.selectedProduct)
  }

}
