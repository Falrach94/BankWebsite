import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { IUser } from 'src/app/model/user';
import { AccountSelectors } from 'src/app/store/account/account.selectors';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http:HttpClient,
             private _store :Store)
  {
  }

  getId() {
    let id
    this._store.select(AccountSelectors.getUserId)
               .pipe(first()).subscribe(val => id = val)
    return id;
  }
  authenticate(name: string, password: string) {
    let url =`${environment.apiUrl}/user/auth` 
    return this._http.post<IUser>(url, {name, password});
  }
  createAccount(name: string, email:string, pw: string) {
    console.log("email:'" + email+"'")
    if(email === ""){
      email = "none"
    }

    let url =`${environment.apiUrl}/user/create/${name}/${email}/${pw}` 
    return this._http.get<IUser>(url);
  }

}
