import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import { Observable } from "rxjs/Rx";
import { MOCKDATA } from "../mockData/dashboard";

@Injectable()
export class HttpService {
  constructor() {}

  getData() {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        return resolve(MOCKDATA);
      }, 500);
    })
  }
}
