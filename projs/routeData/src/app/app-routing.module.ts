import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "business", loadChildren: "app/module1/module1.module#Module1Module", data: { isAdminPage: false } },
  { path: "admin", loadChildren: "app/module2/module2.module#Module2Module", data: { isAdminPage: true } },
  { path: "", redirectTo: "business", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{enableTracing:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
