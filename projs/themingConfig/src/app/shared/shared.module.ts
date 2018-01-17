import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme.directive';
import { SimpleThemeDirective } from './simple-theme.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ThemeDirective, SimpleThemeDirective],
  exports:[ThemeDirective,SimpleThemeDirective]
})
export class SharedModule { }
