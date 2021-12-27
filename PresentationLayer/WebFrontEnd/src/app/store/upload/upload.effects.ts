import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { ITransactionGroup } from "src/app/model/transactionGroup";
import { TransactionsService } from "src/app/services/transactions/transactions.service";
import { UploadActions } from "./upload.actions";

@Injectable()
export class UploadEffects{
    constructor(private _actions$:Actions, 
                private _store:Store, 
                private _transactionService:TransactionsService){}

    uploadFile = createEffect(()=>this._actions$.pipe(
        ofType(UploadActions.uploadFile),
        switchMap(({file}) => 
            this._transactionService.uploadCSVFile(file)
            .pipe(
                map((preview) => UploadActions.uploadFileSuccess({preview})),
                catchError(({error}) => of(UploadActions.uploadFileFailure({error})))
        ))
    ));
    confirmUploadFile = createEffect(()=>this._actions$.pipe(
        ofType(UploadActions.confirmUpload),
        switchMap((_) => 
            this._transactionService.confirmUpload()
            .pipe(
                map((summary) => UploadActions.confirmUploadSuccess({summary})),
                catchError(({error}) => of(UploadActions.confirmUploadFailure({error})))
        ))
    ));

    loadSummaries = createEffect(()=>this._actions$.pipe(
        ofType(UploadActions.loadSummaries),
        switchMap((_) => 
            this._transactionService.loadFileSummaries()
            .pipe(
                map((summaries) => UploadActions.loadSummariesSuccess({summaries})),
                catchError((error) => of(UploadActions.loadSummariesFailure({error})))
        ))
    ));
}