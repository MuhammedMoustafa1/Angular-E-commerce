import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ProductlistComponent } from '../productlist/productlist.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit,AfterViewInit {
  catList: ICategory[];
  selectedCatID: number = 0;
  recivedOrderTotalPrice:number=0;
  //clientNameInpElem:ElementRef = new ElementRef();
  //clientNameInpElem:ElementRef | undefined = undefined;
  //clientNameInpElem:ElementRef | null = null;
  //clientNameInpElem?:ElementRef={} as ElementRef; //optional;
  @ViewChild('clientNameInp') clientNameInpElem!:ElementRef;      //Non-null asseration operator
  @ViewChild(ProductlistComponent) prdListCompObj!: ProductlistComponent;
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

  ngAfterViewInit(): void {
    this.clientNameInpElem.nativeElement.value = "Your Nmae here";
    this.clientNameInpElem.nativeElement.style.border="2px solid red";
    //console.log(this.prdListCompObj.prdList);
  }

  onTotalPriceChanged(totalPrice: number){
    this.recivedOrderTotalPrice = totalPrice;
  }
  completeOreder(){
    // for test
   // this.prdListCompObj.prdList[0].quantity-=1;

  }

}
