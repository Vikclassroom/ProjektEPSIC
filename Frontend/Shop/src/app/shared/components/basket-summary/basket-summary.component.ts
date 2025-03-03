import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasketService} from '../../../basket/basket.service';
import {Observable} from 'rxjs';
import {IBasket, IBasketItem} from '../../models/basket';


@Component({
  selector: 'app-basket-summary',
  templateUrl: './basket-summary.component.html',
  styleUrls: ['./basket-summary.component.scss']
})
export class BasketSummaryComponent implements OnInit {
  basket$: Observable<IBasket>;
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  // tslint:disable-next-line:typedef
  decrementItemQuantity(item: IBasketItem){
    this.decrement.emit(item);
  }

  // tslint:disable-next-line:typedef
  incrementItemQuantity(item: IBasketItem){
    this.increment.emit(item);
  }

  // tslint:disable-next-line:typedef
  removeBasketItem(item: IBasketItem){
    this.remove.emit(item);
  }

}
