import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {BasketService} from '../../basket/basket.service';
import {CheckoutService} from '../checkout.service';
import {IBasket} from '../../shared/models/basket';
import {IOrder} from '../../shared/models/order';
import {NavigationExtras, Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(private basketService: BasketService, private checkoutService: CheckoutService, private toastr: ToastrService,
              private router: Router) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  submitOrder(){
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    this.checkoutService.createOrder(orderToCreate).subscribe((order: IOrder) => {
      this.toastr.success('Commande créé');
      this.basketService.deleteLocalBasket(basket.id);
      const navigationExtras: NavigationExtras = {state: order};
      this.router.navigate(['checkout/success'], navigationExtras);
      console.log(order);
    }, error => {
      this.toastr.error(error.message);
      console.log(error);
    });
  }

  // tslint:disable-next-line:typedef
  private getOrderToCreate(basket: IBasket) {
    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value
    };
  }
}
