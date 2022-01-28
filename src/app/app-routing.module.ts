import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerModule } from '@modules/container/container.module';
import { ContainerPageComponent } from '@modules/container/page/container-page/container-page.component';
import { HomeModule } from '@modules/home/home.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren:() => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  },
  {
    path: '',
    component: ContainerPageComponent,
    loadChildren:() => import(`./modules/container/container.module`).then(m => m.ContainerModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
