import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerPageComponent } from './page/container-page/container-page.component';
import { SharedModule } from '@shared/shared.module';
import { HomeModule } from '@modules/home/home.module';
import { SellsModule } from '@modules/sells/sells.module';
import { HomePageComponent } from '@modules/home/page/home-page/home-page.component';
import { InventoryModule } from '@modules/inventory/inventory.module';
import { PurchasesModule } from '@modules/purchases/purchases.module';
import { BalanceModule } from '@modules/balance/balance.module';


@NgModule({
  declarations: [
    ContainerPageComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule,
    HomeModule,
    SellsModule,
    InventoryModule,
    PurchasesModule,
    BalanceModule
  ]
})
export class ContainerModule { }
