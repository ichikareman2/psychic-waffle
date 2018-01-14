import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ClicksModule } from './clicks/clicks.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { ClickService } from './clicks/click-service/click.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,

    ClicksModule
  ],
  /**
   * CLICK SERVICE IS PUT HERE SO THAT THERE WILL ONLY BE ONE CLICK SERVICE
   * THROUGH OUT THE APP. IF THERE WERE A CORE MODULE, IT COULD BE THERE AS
   * LONG AS IT IS EAGER LOADED.
   * 
   * IT IS NOT IN CLICK MODULE BECAUSE THE APP ROUTING POINTS TO IT LIKE A
   * LAZY LOADED MODULE WHICH WOULD MAKE IT BE IN THE INJECTOR FOR THE 
   * CLICK.MODULE INSTEAD OF APP.MODULE WHICH MEANS, IF SOMETHING OUTSIDE CLICK
   * MODULE NEEDS IT, IT WILL MAKE A NEW ONE.
   * 
   */
  providers: [ClickService],
  bootstrap: [AppComponent]
})
export class AppModule { }
