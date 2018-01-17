import { Directive, Input, ElementRef, Renderer2 } from "@angular/core";
import { ThemeService } from "../core/theme.service";
import { OnInit, OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subscription } from "rxjs/Subscription";
import Config from "../models/config";
// import { ElementRef } from "@angular/core/src/linker/element_ref";
// import { Renderer3 } from "@angular/core/src/render3/renderer";
// import { Renderer2 } from "@angular/core/src/render/api";

@Directive({
  selector: "[appTheme]"
})
export class ThemeDirective implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private config: Config;

  @Input("appTheme")
  set appTheme(value) {}

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  ngOnInit(): void {
    let sub = this.themeService.getConfig().subscribe(x => {
      this.config = x;
      let elName = "background-color";
      this.setStyle(elName)
    });
    this.subs.push(sub);

    // this.renderer.
  }
  setStyle(styleName) {
    this.renderer.setStyle(
      this.el.nativeElement,
      styleName,
      this.config.theme1
    );
  }

  constructor(
    private themeService: ThemeService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
}
