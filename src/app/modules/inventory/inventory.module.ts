import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { InventoryPageComponent } from './page/inventory-page/inventory-page.component';


@NgModule({
  declarations: [
    InventoryPageComponent
  ],
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  exports: [
    InventoryPageComponent
  ]
})
export class InventoryModule { }
