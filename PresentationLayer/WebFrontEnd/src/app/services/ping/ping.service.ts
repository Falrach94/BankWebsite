import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { inject } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PingService {
  pingTimeMs$ = new BehaviorSubject<number>(-1)
  BASE_URL:string = ""

  constructor(private _http: HttpClient, 
              @Inject('baseUrl')baseUrl:string) {
                
      this.BASE_URL = baseUrl
    }

  async ping(){
    let stamp = performance.now();
    await this._http.get(`${this.BASE_URL}api/ping`);
    let t = performance.now()-stamp
    console.log("ping: " + t + " ms")
    return t;

  }

}
