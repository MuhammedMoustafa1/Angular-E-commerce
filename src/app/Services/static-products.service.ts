import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {
  private prdList:IProduct[];

  constructor() {
    this.prdList = [
      {
        id: 100,
        name: 'Product 1',
        price: 1000000,
        quantity: 1,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryID: 1,
      },
      {
        id: 200,
        name: 'Product 2',
        price: 2005454,
        quantity: 0,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryID: 1,
      },
      {
        id: 300,
        name: 'Product 3',
        price: 3000000,
        quantity: 40.5,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryID: 2,
      },
      {
        id: 400,
        name: 'Product 4',
        price: 400000,
        quantity: 2,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryID: 2,
      },
      {
        id: 500,
        name: 'Product 5',
        price: 5009222,
        quantity: 0,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryID: 3,
      },
      {
        id: 600,
        name: 'Product 6',
        price: 600,
        quantity: 1,
        imageURL: 'https://fakeimg.pl/200x100/',
        categoryID: 3,
      },
    ];
  }
  getAllProduct(){
    return this.prdList;
  }
  getProductByCatId(cID:number):IProduct[]
  {
    if (cID==0)
      return this.prdList;
    else
      return this.prdList=this.prdList.filter(prd=>prd.categoryID==cID);

}

  getProductByID(pID:number):IProduct | null
  {
    let foundProduct =  this.prdList.find(prd=>prd.id == pID);
    return foundProduct? foundProduct : null;

  }
}
