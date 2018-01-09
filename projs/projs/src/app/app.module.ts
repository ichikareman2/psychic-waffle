import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MiniComponent } from './mini/mini.component';
import { OutComponent } from './out/out.component';


@NgModule({
  declarations: [
    AppComponent,
    MiniComponent,
    OutComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
