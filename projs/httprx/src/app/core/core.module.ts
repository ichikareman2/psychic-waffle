import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ToShortDateDirective } from './to-short-date/to-short-date.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PageNotFoundComponent, ToShortDateDirective],
  exports:[PageNotFoundComponent, ToShortDateDirective]
})
export class CoreModule { }
