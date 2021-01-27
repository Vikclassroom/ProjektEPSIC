import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {RouterModule} from '@angular/router';

// use for singleton

@NgModule({
  declarations: [
    NavBarComponent
  ],
    imports: [
        CommonModule,
        RouterModule
    ],
  exports: [NavBarComponent]
})
export class CoreModule { }
