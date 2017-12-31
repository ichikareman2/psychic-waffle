import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LinksComponent } from "../links/links.component";

@NgModule({
  imports: [CommonModule],
  declarations: [LinksComponent],
  exports: [LinksComponent]
})
export class HomeModule {}
