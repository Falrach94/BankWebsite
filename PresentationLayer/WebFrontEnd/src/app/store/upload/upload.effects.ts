import { HttpEvent, HttpEventType, HttpProgressEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, map, scan, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { ITransactionGroup } from "src/app/model/transactionGroup";
import { UploadPreview } from "src/app/model/uploadPreview";
import { TransactionsService } from "src/app/services/transactions/transactions.service";
import { UploadActions } from "./upload.actions";

export interface Upload {
    progress: number
    state: 'PENDING' | 'IN_PROGRESS' | 'DONE'
}
const initialState: Upload = { state: 'PENDING', progress: 0 }

function isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {
    return event.type === HttpEventType.Response
  }
  
  function isHttpProgressEvent(
    event: HttpEvent<unknown>
  ): event is HttpProgressEvent {
    return (
      event.type === HttpEventType.DownloadProgress ||
      event.type === HttpEventType.UploadProgress
    )
  }

  const calculateState = (upload: Upload, event: HttpEvent<UploadPreview>): Upload => {
    if (isHttpProgressEvent(event)) {
      return {
        progress: event.total
          ? Math.round((100 * event.loaded) / event.total)
          : upload.progress,
        state: 'IN_PROGRESS',
      }
    }
    if (isHttpResponse(event)) {
      return {
        progress: 100,
        state: 'DONE',
      }
    }
    return upload
  }

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
                map(event => {
                    if(event.type === HttpEventType.UploadProgress)
                    { 
                        let progressEvent = event as HttpProgressEvent 
                        
                        let progress = progressEvent.total
                        ? Math.round((100 * progressEvent.loaded) / progressEvent.total)
                        : 1;
                        return UploadActions.uploadFileProgress({progress})
                    }
                    else
                    {
                        let response = event as HttpResponse<UploadPreview> 
                        var preview = response.body!;
                        return UploadActions.uploadFileSuccess({preview})
                    }
                }),
                catchError(({error}) => of(UploadActions.uploadFileFailure({error}))) 
            )
        )
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