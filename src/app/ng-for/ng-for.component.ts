import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  products=[
    {proImg:'../../assets/1200px-Square_200x200.svg.png', name:'Laptop', id:'pro01', price:90000},
    {proImg:'../../assets/1200px-Square_200x200.svg.png', name:'TV', id:'pro02', price:3000},
    {proImg:'../../assets/1200px-Square_200x200.svg.png', name:'AC', id:'pro03', price:60000},
    {proImg:'../../assets/1200px-Square_200x200.svg.png', name:'Mobile', id:'pro04', price:25000}
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
