import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /**
   *
   */
  constructor(private appService: AppService) {

  }
  title = 'app';

  ngOnInit(): void {
    this.appService.callWithError().subscribe(x => alert('test'), err => alert(JSON.stringify(err)));
  }
}
