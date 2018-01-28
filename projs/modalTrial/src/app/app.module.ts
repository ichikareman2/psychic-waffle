import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { AngularBasicModalModule } from "angular-basic-modal";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AngularBasicModalModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
