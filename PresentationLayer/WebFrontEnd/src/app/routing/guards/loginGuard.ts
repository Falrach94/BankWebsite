import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { AccountSelectors } from "src/app/store/account/account.selectors";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate{
    constructor(private _store: Store, private _router:Router){}

    canActivate(route: ActivatedRouteSnapshot, 
                state: RouterStateSnapshot)
                : boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
       
        let loginDone: boolean = false;

        this._store.select(AccountSelectors.isLoginDone)
                   .pipe(first()).subscribe(v=>loginDone = v);
        

        if(!loginDone)
        {
            console.log("redirect to login");
            const url = encodeURI(state.url);
            this._router.navigate(['/login'], {queryParams: {redirect:url}})
            return false;
        }
        return true;
    }
}