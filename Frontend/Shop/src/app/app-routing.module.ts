import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './core/guards/auth.guard';
import {TestErrorComponent} from './core/test-error/test-error.component';
import {ServerErrorComponent} from './core/server-error/server-error.component';
import {NotFoundComponent} from './core/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'test-error', component: TestErrorComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule), data: {breadcrumb: 'Shop'}},
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule), data: {breadcrumb: 'basket'}},
  {path: 'checkout', canActivate: [AuthGuard], loadChildren: () => import('./checkout/checkout.module')
      .then(mod => mod.CheckoutModule), data: {breadcrumb: 'checkout'}},
  {path: 'account', loadChildren: () => import('./account/account.module')
      .then(mod => mod.AccountModule), data: {breadcrumb: {skip: true}}},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
