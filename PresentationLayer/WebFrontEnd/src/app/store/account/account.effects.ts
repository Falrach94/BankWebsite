import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { AccountService } from "src/app/services/account/account.service";
import { AccountActions } from "./account.actions";

@Injectable()
export class AccountEffects{

    constructor(private actions$:Actions, private _accountService :AccountService){}

    
    authenticate = createEffect(() => this.actions$.pipe(
        ofType(AccountActions.authenticate),
        switchMap(({name, pw}) => 
            this._accountService.authenticate(name, pw)
            .pipe(
                map((user) => AccountActions.authenticateSuccess({user})),
                catchError((error)=>of(AccountActions.authenticateFailure({error})))            
        ))
    ));

    
    create = createEffect(() => this.actions$.pipe(
        ofType(AccountActions.create),
        switchMap(({name, email, pw}) => 
            this._accountService.createAccount(name, email, pw)
            .pipe(
                map(user => AccountActions.createSuccess({user})),
                catchError(error=>of(AccountActions.createFailure({error})))
            )
        )
    ));
}