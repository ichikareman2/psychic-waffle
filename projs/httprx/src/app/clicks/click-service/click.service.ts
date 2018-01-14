import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { of } from "rxjs/observable/of";
import { take } from "rxjs/operators/take";

import Click from "../../models/click";

@Injectable()
export class ClickService {
  constructor(private http: HttpClient) {
    console.log('init')
  }
  getClicks(): Observable<Click[]> {
    let url = `http://localhost:3000/clicks`;
    return this.http.get<Click[]>(url);
    // return of([new Click()]);
  }
  addClick(click: Click): Observable<any> {
    let url = `http://localhost:3000/clicks`;
    return this.http.post(url, click);
  }
  /// testing stored/cached
  clickList: Click[];
  updateLocalClickList(): void {
    let url = `http://localhost:3000/clicks`;
    // this.http.get<Click[]>(url).subscribe(x => (this.clickList = x));
    this.http
      .get<Click[]>(url)
      .subscribe(
        x => (this.clickList = x),
        err => console.error(err),
        () => console.log("done")
      );
  }
  private cachedClickList: BehaviorSubject<Click[]> = new BehaviorSubject<
    Click[]
  >([]);
  getCachedClickList(): BehaviorSubject<Click[]> {
    if (this.cachedClickList.observers.length < 1) {
      let url = `http://localhost:3000/clicks`;
      // this.http.get<Click[]>(url).subscribe(x => (this.clickList = x));
      let obs = this.http
        .get<Click[]>(url)
        .subscribe(
          clicks => this.cachedClickList.next(clicks),
          err => console.error(err),
          () => console.log(this.cachedClickList)
        );
    }
    return this.cachedClickList;
  }
  addCachedClick(click: Click): Observable<Object> {
    let tempClicks: Click[];
    // let tempSub = this.cachedClickList.subscribe(
    //   x => this.cachedClickList.next(x.concat(click))
    // );
    let tempSub = this.cachedClickList.subscribe(x =>
      tempClicks = x
      // this.cachedClickList.next(x.concat(click))
    ).unsubscribe();
    tempClicks.push(click)
    this.cachedClickList.next(tempClicks)
    let url = `http://localhost:3000/clicks`;
    return this.http.post(url,click)
    // Observable.create().take();
  }
}
