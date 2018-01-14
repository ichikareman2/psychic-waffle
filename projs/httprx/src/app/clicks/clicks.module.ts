import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClicksRoutingModule } from "./clicks-routing.module";
import { ClickListComponent } from "./click-list/click-list.component";
import { ViewComponent } from "./view/view.component";
import { ClickService } from "./click-service/click.service";
import { MiniClickListComponent } from './mini-click-list/mini-click-list.component';

@NgModule({
  imports: [CommonModule, ClicksRoutingModule],
  declarations: [ClickListComponent, ViewComponent, MiniClickListComponent],
  exports: [MiniClickListComponent]
})
export class ClicksModule {}
