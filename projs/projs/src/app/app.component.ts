import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    this.red = true;
    this.black = true;

    this.updateClasses();
  }
  title = "app";

  red;
  black;
  testClasses = {
  };
  updateClasses() {
    this.testClasses = {
      "font-red": this.red,
      "bg-black": this.black
    }
  }
  divClick(): void {
    // console.log(this.red)
    this.red = !this.red; 
    this.black = !this.black;
    // delete this.testClasses['font-red'];
    // this.testClasses
    this.updateClasses()
  }
}
