import { Component, OnInit } from "@angular/core";
import { ClickService } from "../click-service/click.service";
import { of } from "rxjs/observable/of";
import { interval } from "rxjs/observable/interval";

import Click from "../../models/click";
import { ClickListComponent } from "../click-list/click-list.component";

@Component({
  selector: "app-mini-click-list",
  templateUrl: "./mini-click-list.component.html",
  styleUrls: ["./mini-click-list.component.less"]
})
export class MiniClickListComponent implements OnInit {
  constructor(private clickService: ClickService) {}
  clickList: Click[] = [];
  ngOnInit() {
    this.getClickList();
  }

  getClickList() {
    // // this.clickService.getClicks().subscribe(x => (this.clickList = x));
    // this.clickService.updateLocalClickList();
    // of(this.clickService.clickList).subscribe(x => (this.clickList = x));
    // // this.clickService.getClicks().toPromise().then
    this.clickService.getCachedClickList().subscribe(x => 
      (this.clickList = x)
    );
  }
}
