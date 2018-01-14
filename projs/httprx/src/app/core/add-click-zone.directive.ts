import { Directive, ElementRef, HostListener } from "@angular/core";
import { ClickService } from "../clicks/click-service/click.service";
import Click from "../models/click";

@Directive({
  selector: "[appAddClickZone]"
})
export class AddClickZoneDirective {
  constructor(private clickService: ClickService, el: ElementRef) {}
  @HostListener("click",['$event'])
  onclick($event) {
    // console.log($event)
    let newClick = new Click(new Date(), $event.x, $event.y);
    this.clickService.addCachedClick(newClick).subscribe();
  }
}
