import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopModule} from './shop/shop.module';
import {BasketModule} from './basket/basket.module';
import {CheckoutModule} from './checkout/checkout.module';
import {AccountModule} from './account/account.module';
import {AuthGuard} from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {breadcrumb: 'Home'}
  },
  {
    path: 'shop',
    loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule), data: {breadcrumb: 'Shop'}
  },
  {
    path: 'basket',
    loadChildren: () => import('./basket/basket.module')
      .then(mod => mod.BasketModule),
    data: {breadcrumb: 'basket'}
  },
  {
    path: 'checkout',
    canActivate: [AuthGuard],
    loadChildren: () => import('./checkout/checkout.module')
      .then(mod => mod.CheckoutModule),
    data: {breadcrumb: 'checkout'}
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module')
      .then(mod => mod.AccountModule),
    data: {breadcrumb: {skip: true}}
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
