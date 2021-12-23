import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { ITransactionGroup } from "src/app/model/transactionGroup";
import { TransactionsService } from "src/app/services/transactions/transactions.service";
import { TransactionActions } from "./transactions.actions";
import { TransactionsReducer } from "./transactions.reducer";
import { TransactionsSelectors } from "./transactions.seletors";

@Injectable()
export class TransactionsEffects{
    constructor(private _actions$:Actions, 
                private _store:Store, 
                private _transactionService:TransactionsService){}

    loadMonth = createEffect(()=>this._actions$.pipe(
        ofType(TransactionActions.loadMonth),
        switchMap(({year, month}) => 
            this._transactionService.loadMonth(new Date(year, month))
            .pipe(
                map((transactions) => TransactionActions.loadMonthSuccess({transactions})),
                catchError((error) => of(TransactionActions.loadMonthFailure({error})))
        ))
    ));

    assignGroupSuccess = createEffect(()=>this._actions$.pipe(
        ofType(TransactionActions.assignGroupSuccess),
        withLatestFrom(this._store.select(TransactionsSelectors.getDataDate)),
        switchMap(([_, date]) =>{
            let year = date.getFullYear()
            let month = date.getMonth()
            return of(TransactionActions.loadMonth({year, month}));
        })
    ));


    assignGroup = createEffect(()=>this._actions$.pipe(
        ofType(TransactionActions.assignGroup),
        withLatestFrom(this._store.select(TransactionsSelectors.getSelectedTransaction)),
        switchMap(([{group}, transaction]) =>        
            this._transactionService.assign(transaction!, group)
            .pipe(
                map(_ => TransactionActions.assignGroupSuccess()),
                catchError((error) => of(TransactionActions.assignGroupFailure({error})))
        ))
    ));
    
    upload = createEffect(()=>this._actions$.pipe(
        ofType(TransactionActions.upload),
        switchMap(({file}) => 
            this._transactionService.uploadCSVFile(file)
            .pipe(
                map(_ => TransactionActions.uploadSuccess()),
                catchError((error) => of(TransactionActions.uploadFailure({error})))
        ))
    ));
}