import { Component, OnInit } from '@angular/core';
import {BasketService} from '../../basket/basket.service';
import {Observable} from 'rxjs';
import {IBasket} from '../../shared/models/basket';
import {IUser} from '../../shared/models/user';
import {AccountService} from '../../account/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private basketService: BasketService, private accountService: AccountService) { }
  basket$: Observable<IBasket>;
  currentUser$: Observable<IUser>;

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
    this.currentUser$ = this.accountService.currentUser$;
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.accountService.logout();
  }

}
