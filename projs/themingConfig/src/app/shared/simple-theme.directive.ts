import {
  Directive,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  ElementRef
} from "@angular/core";
import { ThemeService } from "../core/theme.service";

@Directive({
  selector: "[appSimpleTheme]"
})
export class SimpleThemeDirective implements OnInit, OnDestroy {
  constructor(
    private themeService: ThemeService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}
  @Input("appSimpleTheme") styleTheme: any;

  ngOnInit(): void {
    let sub = this.themeService
      .getConfig()
      .subscribe(conf => {
        this.changeStyle(conf);
      });
  }
  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }
  changeStyle(conf: any) {
    // for each props in  style theme pair object
    Object.keys(this.styleTheme).forEach(styleName => {
      // change the style value
      this.renderer.setStyle(
        this.el.nativeElement,
        // of style named
        styleName,
        // to value from theme converted from name
        this.mapThemeToStyle(conf, this.styleTheme[styleName])
      );
    });
  }
  mapThemeToStyle(config: any, themeName: string): string {
    return config[themeName];
  }
}
