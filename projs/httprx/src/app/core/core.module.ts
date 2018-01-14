import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToShortDateDirective } from './to-short-date/to-short-date.directive';
import { AddClickZoneDirective } from './add-click-zone.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  // declarations: [PageNotFoundComponent, ToShortDateDirective],
  // exports:[PageNotFoundComponent, ToShortDateDirective]
  declarations: [PageNotFoundComponent, ToShortDateDirective, AddClickZoneDirective],
  exports:[PageNotFoundComponent, ToShortDateDirective, AddClickZoneDirective]
})
export class CoreModule { }
