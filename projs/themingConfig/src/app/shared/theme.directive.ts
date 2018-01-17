import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";
import { ThemeService } from "../core/theme.service";
import { OnInit, OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subscription } from "rxjs/Subscription";
import Config from "../models/config";
import { Theme } from "../models/themeEnum";
import Pair from "../models/pair";
// import { ElementRef } from "@angular/core/src/linker/element_ref";
// import { Renderer3 } from "@angular/core/src/render3/renderer";
// import { Renderer2 } from "@angular/core/src/render/api";

@Directive({
  selector: "[appTheme]"
})
export class ThemeDirective implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private config: Config;

  @Input("appTheme") appTheme: Pair<string, string>[];

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  ngOnInit(): void {
    this.renderer.setStyle(
      this.el.nativeElement,
      "transition",
      "background-color 1000ms linear"
    );
    let sub = this.themeService.getConfig().subscribe(x => {
      this.config = x;
      let elName = "background-color";
      console.log(this.appTheme);
      if (this.appTheme != null && this.appTheme.length > 0)
        this.setStyle(this.appTheme);
    });
    this.subs.push(sub);
  }
  setStyle(styleThemePairs: Pair<string, string>[]) {
    styleThemePairs.forEach(pair => {
      this.renderer.setStyle(
        this.el.nativeElement,
        pair.key,
        this.config[pair.value]
      );
    });
  }

  constructor(
    private themeService: ThemeService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
}
