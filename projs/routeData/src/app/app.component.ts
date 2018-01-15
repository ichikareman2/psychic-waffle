import { Component } from '@angular/core';
import { UserService } from './core/user/user.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAdminRole: boolean;
  title = 'app';
  /**
   *
   */
  toggleRole() {

    this.userService.setUserRole(this.isAdminRole ? 'business' : 'admin')
  }
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.userService.getUserRole()
    .subscribe(x => x == 'admin' ? this.isAdminRole = true : this.isAdminRole = false)
  }
}
