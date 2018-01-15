import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { of } from 'rxjs/observable/of'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/repeat'

@Injectable()
export class UserService {

  constructor() { }
  role: BehaviorSubject<string> = BehaviorSubject.create("business")
  getUserRole(): Observable<string> {
    return this.role;
  }
  setUserRole(value) {
    this.role.next(value)
    console.log(value)
  }
    // role1: Observable<string> = of("business")
    // .map(x => x === "business" ? "admin" : "business")
    // .repeat();
    // getRole1() {
    //   return this.role1;
    // }
}
