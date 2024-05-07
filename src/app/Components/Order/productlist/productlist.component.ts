import { Component } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent {
  catList:ICategory[];
  prdList:IProduct[];
  selectedCatID:number=0;
  orderTotalPrice:number=0;
  constructor(){
    this.catList = [
      {
        id:1,
        name:"Category 1"
      },
      {
        id:2,
        name:"Category 2"
      },
      {
        id:3,
        name:"Category 3"
      }
    ];

    this.prdList = [
      {
        id:100,
        name:"Product 1",
        price:100,
        quantity:1,
        imageURL:'https://fakeimg.pl/200x100/',
        categoryID:1
      },
      {
        id:200,
        name:"Product 2",
        price:200,
        quantity:0,
        imageURL:'https://fakeimg.pl/200x100/',
        categoryID:1
      },
      {
        id:300,
        name:"Product 3",
        price:300,
        quantity:10,
        imageURL:'https://fakeimg.pl/200x100/',
        categoryID:2
      },
      {
        id:400,
        name:"Product 4",
        price:400,
        quantity:2,
        imageURL:'https://fakeimg.pl/200x100/',
        categoryID:2
      },
      {
        id:500,
        name:"Product 5",
        price:500,
        quantity:0,
        imageURL:'https://fakeimg.pl/200x100/',
        categoryID:3
      },
      {
        id:600,
        name:"Product 6",
        price:600,
        quantity:1,
        imageURL:'https://fakeimg.pl/200x100/',
        categoryID:3
      }
    ];
  }
  prdTrackByFn(index:number,prd:IProduct):number
  {
    return prd.id;
  }

  buy(prdPrice:number, count:any){
    // let itemsCount:number = count;
    // let totalPrice:number = count*10;
    // let itemsCount:number;
   // this.orderTotalPrice= parseInt(count)*prdPrice;
    //this.orderTotalPrice= Number(count)*prdPrice;
    //this.orderTotalPrice = (count as number)*prdPrice;
    this.orderTotalPrice = +count * prdPrice;

  }
  chageCat(){
    this.selectedCatID = 1;
  }

}
