import { Component, OnInit } from '@angular/core';
import {BasketService} from '../../basket/basket.service';
import {Observable} from 'rxjs';
import {IBasket} from '../../shared/models/basket';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private basketService: BasketService) { }
  basket$: Observable<IBasket>;

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

}
