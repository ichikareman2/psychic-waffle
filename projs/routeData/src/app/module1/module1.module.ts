import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Module1RoutingModule } from './module1-routing.module';
import { BusinessComponent } from './business/business.component';
import { Business2Component } from './business2/business2.component';
import { AdminBusinessComponent } from './admin-business/admin-business.component';

@NgModule({
  imports: [
    CommonModule,
    Module1RoutingModule
  ],
  declarations: [BusinessComponent, Business2Component, AdminBusinessComponent]
})
export class Module1Module { }
