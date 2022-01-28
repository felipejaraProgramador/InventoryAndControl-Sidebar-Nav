import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellsRoutingModule } from './sells-routing.module';
import { SellsPageComponent } from './page/sells-page/sells-page.component';
import { SharedModule } from '@shared/shared.module';
import { ContainerModule } from '@modules/container/container.module';


@NgModule({
  declarations: [
    SellsPageComponent
  ],
  imports: [
    CommonModule,
    SellsRoutingModule,
    SharedModule
  ],
  exports: [
    SellsPageComponent
  ]
})
export class SellsModule { }
