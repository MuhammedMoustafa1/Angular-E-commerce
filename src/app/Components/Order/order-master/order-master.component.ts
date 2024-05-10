import { Component, OnInit } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit {
  catList: ICategory[];
  selectedCatID: number = 0;
  recivedOrderTotalPrice:number=0;
  constructor(){
    this.catList = [
      {
        id: 1,
        name: 'Category 1',
      },
      {
        id: 2,
        name: 'Category 2',
      },
      {
        id: 3,
        name: 'Category 3',
      },
    ];
  }
  ngOnInit(): void {
  }

  onTotalPriceChanged(totalPrice: number){
    this.recivedOrderTotalPrice = totalPrice;
  }
}
