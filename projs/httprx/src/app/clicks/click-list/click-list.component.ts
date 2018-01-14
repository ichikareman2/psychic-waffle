import { Component, OnInit } from "@angular/core";
import { ClickService } from "../click-service/click.service";
import { Event } from "@angular/router/src/events";
import { of } from "rxjs/observable/of";
import Click from "../../models/click";

@Component({
  selector: "app-click-list",
  templateUrl: "./click-list.component.html",
  styleUrls: ["./click-list.component.less"]
})
export class ClickListComponent implements OnInit {
  constructor(private clickService: ClickService) {}

  clickList: Click[];

  ngOnInit() {
    this.getClickList();
  }
  clicked(ev): void {
    let now = new Date();
    let click = new Click(now, ev.x, ev.y);

    // this.clickList.push(click);
    this.clickService.addCachedClick(click)//.subscribe(x => console.log(x));
  }

  getClickList() {
    this.clickService.getCachedClickList().subscribe(x => (this.clickList = x));
  }
}
