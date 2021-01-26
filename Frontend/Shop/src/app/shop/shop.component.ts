import { Component, OnInit } from '@angular/core';
import {IProduct} from '../shared/models/products';
import {ShopService} from './shop.service';
import {IType} from '../shared/models/productType';
import {IBrand} from '../shared/models/brand';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  productType: IType[];
  brandIdSelected: number;
  typeIdSelected: number;

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  // tslint:disable-next-line:typedef
  getProducts(){
    this.shopService.getProducts().subscribe(response => {
        this.products = response.data;
      },
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  getBrands(){
    this.shopService.getBrands().subscribe(response => {
        this.brands = response;
      },
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  getTypes(){
    this.shopService.getProductTypes().subscribe(response => {
        this.productType = response;
      },
      error => {
        console.log(error);
      });
  }

}
