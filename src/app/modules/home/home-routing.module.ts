import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellsPageComponent } from '@modules/sells/page/sells-page/sells-page.component';

const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
