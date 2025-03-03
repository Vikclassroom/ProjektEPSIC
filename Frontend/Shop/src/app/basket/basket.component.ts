import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {IBasket, IBasketItem} from '../shared/models/basket';
import {BasketService} from './basket.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  basket$: Observable<IBasket>;

  constructor(private basketService: BasketService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.basket$ = this.basketService.basket$;
  }

  // tslint:disable-next-line:typedef
  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  // tslint:disable-next-line:typedef
  incrementItemQuantity(item: IBasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  // tslint:disable-next-line:typedef
  decrementItemQuantity(item: IBasketItem) {
    this.basketService.decrementItemQuantity(item);
  }

}
