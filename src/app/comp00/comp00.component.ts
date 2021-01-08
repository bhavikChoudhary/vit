import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comp00',
  templateUrl: './comp00.component.html',
  styleUrls: ['./comp00.component.css']
})
export class Comp00Component implements OnInit{

  constructor() {}


  @Input() myValue;
  userName:string = "Default name";

  @ContentChild('childContent') childParagraph:ElementRef;

  ngOnInit():void{
    console.log(this.childParagraph)
  }

  updateUserName(user){
    this.userName = user.value;
  }

  onClickBtn(){
    alert(this.userName)
  }
  

}
