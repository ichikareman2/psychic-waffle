import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { BusinessNavComponent } from './business-nav/business-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [ViewComponent, AdminNavComponent, BusinessNavComponent],
  exports:[ViewComponent]

})
export class LayoutModule { }
