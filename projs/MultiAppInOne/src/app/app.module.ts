import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SampleTextComponent } from '../sample-text/sample-text.component';

import {SharedService} from '../shared/shared-service/shared-service.service'

@NgModule({
  declarations: [
    AppComponent,
    SampleTextComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
