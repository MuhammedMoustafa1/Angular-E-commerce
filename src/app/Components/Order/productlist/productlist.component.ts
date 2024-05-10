import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
  providers: [StaticProductsService]
})
export class ProductlistComponent implements OnInit, OnChanges {

  //prdList: IProduct[];
  prdListOfCat:IProduct[]=[];
  @Input() sentCatID: number = 0;
  @Output() totalPriceChanged:EventEmitter<number>;
  orderTotalPrice: number = 0;
  orderDate: Date;

  constructor(private staticPrdService:StaticProductsService) {
    this.totalPriceChanged=new EventEmitter<number>();

    // this.prdList = [
    //   {
    //     id: 100,
    //     name: 'Product 1',
    //     price: 1000000,
    //     quantity: 1,
    //     imageURL: 'https://fakeimg.pl/200x100/',
    //     categoryID: 1,
    //   },
    //   {
    //     id: 200,
    //     name: 'Product 2',
    //     price: 2005454,
    //     quantity: 0,
    //     imageURL: 'https://fakeimg.pl/200x100/',
    //     categoryID: 1,
    //   },
    //   {
    //     id: 300,
    //     name: 'Product 3',
    //     price: 3000000,
    //     quantity: 40.5,
    //     imageURL: 'https://fakeimg.pl/200x100/',
    //     categoryID: 2,
    //   },
    //   {
    //     id: 400,
    //     name: 'Product 4',
    //     price: 400000,
    //     quantity: 2,
    //     imageURL: 'https://fakeimg.pl/200x100/',
    //     categoryID: 2,
    //   },
    //   {
    //     id: 500,
    //     name: 'Product 5',
    //     price: 5009222,
    //     quantity: 0,
    //     imageURL: 'https://fakeimg.pl/200x100/',
    //     categoryID: 3,
    //   },
    //   {
    //     id: 600,
    //     name: 'Product 6',
    //     price: 600,
    //     quantity: 1,
    //     imageURL: 'https://fakeimg.pl/200x100/',
    //     categoryID: 3,
    //   },
    // ];

    // this.prdListOfCat=this.prdList;
    this.orderDate = new Date();
  }
  prdTrackByFn(index: number, prd: IProduct): number {
    return prd.id;
  }

  buy(prdPrice: number, count: any) {
    // let itemsCount:number = count;
    // let totalPrice:number = count*10;
    // let itemsCount:number;
    // this.orderTotalPrice= parseInt(count)*prdPrice;
    //this.orderTotalPrice= Number(count)*prdPrice;
    //this.orderTotalPrice = (count as number)*prdPrice;
    this.orderTotalPrice += +count * prdPrice;
    this.totalPriceChanged.emit(this.orderTotalPrice);
  }
  // filterProductsByCatID() {
  //   if (this.sentCatID==0)
  //     this.prdListOfCat=this.prdList
  //   else
  //     this.prdListOfCat=this.prdList.filter(prd=>prd.categoryID==this.sentCatID);
  // }
  // chageCat() {
  //   this.selectedCatID = 1;
  // }

  ngOnChanges(changes: SimpleChanges): void {
   // this.filterProductsByCatID();
   this.prdListOfCat = this.staticPrdService.getProductByCatId(this.sentCatID);
  }
  ngOnInit(): void {

  }
}
