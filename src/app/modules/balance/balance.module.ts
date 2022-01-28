import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BalanceRoutingModule } from './balance-routing.module';
import { BalancePageComponent } from './page/balance-page/balance-page.component';


@NgModule({
  declarations: [
    BalancePageComponent
  ],
  imports: [
    CommonModule,
    BalanceRoutingModule
  ],
  exports: [
    BalancePageComponent
  ]
})
export class BalanceModule { }
