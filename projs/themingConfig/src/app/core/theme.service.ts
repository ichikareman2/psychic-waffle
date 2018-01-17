import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import Config from "../models/config";

@Injectable()
export class ThemeService {
  constructor(private http: HttpClient) {}
  private config: BehaviorSubject<Config> = new BehaviorSubject<Config>(null);
  getConfig() {
    if (this.config.observers.length < 1) {
      let host = "http://localhost:3000";
      let endpoint = "theme";
      let url = `${host}/${endpoint}`;
      this.http.get<Config>(url).forEach(x => this.config.next(x));
    }
    return this.config.filter(x => x != null);
  }
}
