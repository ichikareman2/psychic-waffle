import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) { }
  isOnAdminPage: boolean;
  ngOnInit() {
    this.router.events
    .filter(routeEvent => routeEvent instanceof NavigationEnd)
    .forEach(x => {
      this.isOnAdminPage = this.route.root.firstChild.snapshot.data["isAdminPage"]
      // console.log(this.route)
      // console.log(this.route.snapshot.data["isAdminPage"])
      // console.log(this.route.root.firstChild.snapshot.data["isAdminPage"])
      // console.log(this.route.parent.firstChild.snapshot.data["isAdminPage"])
    })
  }

}
