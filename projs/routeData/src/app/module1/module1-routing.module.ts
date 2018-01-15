import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { Business2Component } from './business2/business2.component';

const routes: Routes = [
  {path:"1",component:BusinessComponent},
  {path:"2",component:Business2Component},
  {path:"admin",component:Business2Component, data: { isAdminPage: false } },
  {path:"",component:BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
