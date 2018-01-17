import { Component } from '@angular/core';
import Pair from './models/pair';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Theme } from './models/themeEnum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.styleThemePairs.push(new Pair('background-color',Theme.theme1))
    this.styleThemePairs.push(new Pair('border-color',Theme.theme2))
    this.styleThemePairs.push(new Pair('color',Theme.color1))
  }
  title = 'app';
  styleThemePairs:Pair<string,string>[] =[];
  styleThemeObject = {
    "background-color":Theme.theme1,
    "color":Theme.color1,
    "border-color":Theme.theme2
  }
  
}
