import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroComponent } from '../intro/intro.component';
import { AlertService } from '../alert.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [IntroComponent],
  exports:[IntroComponent],
  providers:[AlertService]
})
export class AboutModule { }
