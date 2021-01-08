import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DesignutilityServiceService } from '../appServices/designutility-service.service';
import { Comp00Component } from '../comp00/comp00.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,AfterViewInit {


  @ViewChild('box') box:ElementRef;
  @ViewChild(Comp00Component) child:Comp00Component;
  userName = "Bhavik"

  constructor(private renderer:Renderer2) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    // console.log(this.box)
    // this.box.nativeElement.classList = "box";
    this.renderer.setStyle(this.box.nativeElement, 'backgroundColor', 'green');
    this.renderer.addClass(this.box.nativeElement, 'newClass');
    this.renderer.setAttribute(this.box.nativeElement, 'title', 'This is test title')
    // this.box.nativeElement.style.backgroundColor = "green";
    // this.box.nativeElement.innerHTML = "This is modified content."

    // console.log(this.child)
  }

  changeChildProperty(){
    this.child.userName = "DJ"
  }

  callChildMethod(){
    this.child.onClickBtn();
  }

}
