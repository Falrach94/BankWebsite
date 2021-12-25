import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import { PingService } from './services/ping/ping.service';
import { AccountActions } from './store/account/account.actions';
import { AccountEffects } from './store/account/account.effects';
import { AccountSelectors } from './store/account/account.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WebUIApp';

  constructor(private _pingService: PingService,
              private _store:Store,
              private _router: Router)
  {
  }
  ngOnInit(): void {
    this._pingService.ping(true);
    this._store.select(AccountSelectors.isLoginDone).subscribe(done=>{
      if(!done)
      {
        this._router.navigate(['\login'])
      }
    })
  }

  performLogout(){
    this._store.dispatch(AccountActions.logout());
  }

}

//export const baseUrl :String = "https://localhost:44394/";
//export const baseUrl :String = "https://62.75.175.66:44394/";

//export const baseUrl :String = "http://62.75.175.66:5000/";
//export const baseUrl :String = "http://localhost:5000/";
