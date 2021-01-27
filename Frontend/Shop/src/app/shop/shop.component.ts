import {Component, OnInit} from '@angular/core';
import {IProduct} from '../shared/models/products';
import {ShopService} from './shop.service';
import {IType} from '../shared/models/productType';
import {IBrand} from '../shared/models/brand';
import {ShopParams} from '../shared/models/shopParams';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  productType: IType[];
  shopParams = new ShopParams();
  totalCount: number;
  sortOptions = [
    {name: 'A à Z', value: 'name'},
    {name: 'Prix: croissant', value: 'priceAsc'},
    {name: 'Prix: décroissant', value: 'priceDesc'}
  ];

  constructor(private shopService: ShopService) {
  }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  // tslint:disable-next-line:typedef
  getProducts() {
    this.shopService.getProducts(this.shopParams).subscribe(response => {
        this.products = response.data;
        this.shopParams.pageNumber = response.pageIndex;
        this.shopParams.pageSize = response.pageSize;
        this.totalCount = response.count;
      },
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  getBrands() {
    this.shopService.getBrands().subscribe(response => {
        this.brands = [{id: 0, name: 'All'}, ...response];
      },
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  getTypes() {
    this.shopService.getProductTypes().subscribe(response => {
        this.productType = [{id: 0, name: 'All'}, ...response];
      },
      error => {
        console.log(error);
      });
  }

  // tslint:disable-next-line:typedef
  onBrandSelected(brandId: number) {
    this.shopParams.brandId = brandId;
    this.getProducts();
  }

  // tslint:disable-next-line:typedef
  onTypeSelected(typeId: number) {
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  // tslint:disable-next-line:typedef
  onSortSelected(sort: string) {
    this.shopParams.sort = sort;
    this.getProducts();
  }

  // tslint:disable-next-line:typedef
  onPageChanged(event: any){
    this.shopParams.pageNumber = event;
    this.getProducts();
  }

}
