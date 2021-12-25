import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const TIMEOUT = 2000

@Injectable({
  providedIn: 'root'
})

export class PingService {
  pingTimeMs$ = new BehaviorSubject<number>(-1)

  constructor(private _http: HttpClient)
              //@Inject('baseUrl')baseUrl:string) 
              {
                
     // this.BASE_URL = baseUrl
    }


    pinger : any;

    finished = false;


  async ping(once:boolean){

    this.finished = false;

    let stamp = performance.now();
    let sub = this._http.get<number>(`${environment.apiUrl}/ping`)
              .subscribe(v =>
    {
      let t = performance.now()-stamp
      if(t < TIMEOUT)
      {
        this.finished = true;
        console.log("ping: " + t + " ms")
      }
    }, e=>{
      this.finished = true;
      console.log("Ping failed!", e)
    })

    setTimeout(() =>{
      if(!this.finished)
      {
        console.log("Ping failed! (timeout)")
        sub.unsubscribe()      
      } 
      if(!once)
      {
        this.ping(false);
      }
    }, TIMEOUT);
  

    return 0;

  }

}
