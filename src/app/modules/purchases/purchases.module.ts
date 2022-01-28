import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchasesRoutingModule } from './purchases-routing.module';
import { PurchasesPageComponent } from './page/purchases-page/purchases-page.component';


@NgModule({
  declarations: [
    PurchasesPageComponent
  ],
  imports: [
    CommonModule,
    PurchasesRoutingModule
  ],
  exports: [
    PurchasesPageComponent
  ]
})
export class PurchasesModule { }
