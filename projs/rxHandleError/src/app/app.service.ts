import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { map } from 'rxjs/operators/map';


@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  callWithError() {
    return this.http.get('http://www.gggg.com/a')
      .pipe(
        catchError(err => {
          return new ErrorObservable(err);
        }),
        map((x: any) => {
          if (x.hasOwnProperty('statusCode')) {
            if (x.statusCode > 299 || x.statusCode < 200) {
              return new ErrorObservable(x.message);
            }
            return x;
          }
          return x;
        })
      );
  }
}
