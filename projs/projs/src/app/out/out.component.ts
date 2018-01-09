import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-out',
  templateUrl: './out.component.html',
  styleUrls: ['./out.component.css']
})
export class OutComponent implements OnInit {
  test:string = "0";
  constructor() { }

  ngOnInit() {
  }

}
