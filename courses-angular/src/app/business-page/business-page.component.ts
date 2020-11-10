import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-page',
  templateUrl: './business-page.component.html',
  styleUrls: ['./business-page.component.scss']
})
export class BusinessPageComponent implements OnInit {

  employees = 3;
  months = 1;
  pricePerMonth = 20;

  constructor() { }

  ngOnInit(): void {
  }

  getTotal() {
    return this.employees * this.months * this.pricePerMonth;
  }

}
