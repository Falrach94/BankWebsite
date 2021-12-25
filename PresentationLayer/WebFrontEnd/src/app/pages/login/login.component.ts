import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { AccountActions } from 'src/app/store/account/account.actions';
import { AccountSelectors } from 'src/app/store/account/account.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error$ = this._store.select(AccountSelectors.getLastError)
  hasError$ = this._store.select(AccountSelectors.hasError)

  loginDone$ = this._store.select(AccountSelectors.isLoginDone)

  constructor(private _store:Store, private _router:Router) { 
  }

  ngOnInit(): void {
    this.loginDone$.subscribe(done =>{
      if(done)
      {
        this._router.navigate(['/user/home'])
      }
    })
  }

  performLogin(name:string, pw:string)
  {
    this._store.dispatch(AccountActions.authenticate({name, pw}))
  }
  registerUser(name:string, email:string, pw:string)
  {
    this._store.dispatch(AccountActions.create({name, email, pw}))
  }

}
