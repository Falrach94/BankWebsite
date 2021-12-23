import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { baseUrl } from 'src/app/app.component';
import { IUser } from 'src/app/model/user';
import { AccountSelectors } from 'src/app/store/account/account.selectors';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  BASE_URL?:string;

  constructor(private _http:HttpClient,
             @Inject('baseUrl')baseUrl:string,
             private _store :Store)
  {
    this.BASE_URL = baseUrl;
  }

  getId() {
    let id
    this._store.select(AccountSelectors.getUserId)
               .pipe(first()).subscribe(val => id = val)
    return id;
  }
  authenticate(name: string, pw: string) {
    let url =`${this.BASE_URL}api/user/auth/${name}/${pw}` 
    return this._http.get<IUser>(url);
  }
  createAccount(name: string, email:string, pw: string) {
    console.log("email:'" + email+"'")
    if(email === ""){
      email = "none"
    }

    let url =`${this.BASE_URL}api/user/create/${name}/${email}/${pw}` 
    return this._http.get<IUser>(url);
  }

}
