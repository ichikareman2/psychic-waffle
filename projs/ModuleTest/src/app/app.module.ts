import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
// import { IntroComponent } from './about/intro/intro.component';
import { HomeModule } from './home/home/home.module';
import { AboutModule } from './about/about/about.module';


@NgModule({
  declarations: [
    AppComponent,
    // IntroComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
