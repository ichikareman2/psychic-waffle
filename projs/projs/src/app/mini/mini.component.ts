import { Component, OnInit, EventEmitter, Input, Output } from "@angular/core";
// import { setInterval } from "timers";
// import { Input, Output } from "@angular/core/src/metadata/directives";
// import { EventEmitter } from "@angular/core/src/event_emitter";

@Component({
  selector: "app-mini",
  templateUrl: "./mini.component.html",
  styleUrls: ["./mini.component.css"]
})
export class MiniComponent implements OnInit {
  @Input() in: string;
  @Output() inChange = new EventEmitter<string>();
  interval;
  change(testParam) {
    this.inChange.emit(testParam);
  }
  constructor() {}

  ngOnInit() {
    this.interval = setInterval(() => {
      this.inChange.emit((parseInt(this.in) + 1).toString());
    }, 1000);
  }
}
