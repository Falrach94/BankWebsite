import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { first, map } from "rxjs/operators";
import { UploadPreview } from "src/app/model/uploadPreview";
import { UploadActions } from "src/app/store/upload/upload.actions";
import { UploadSelectors } from "src/app/store/upload/upload.selectors";

@Injectable({
    providedIn: 'root'
})
export class UploadFacade{


    summaries$ = this._store.select(UploadSelectors.getSummaries)
    preview$ = this._store.select(UploadSelectors.getPreviewedFile)
    hasFilePreview$ = this._store.select(UploadSelectors.hasPreviewedFile);

    lastError$ = this._store.select(UploadSelectors.getLastError);

    uploadProgress$ = this._store.select(UploadSelectors.getUploadProgress);
    uploadOngoing$ = this.uploadProgress$.pipe(map(progress => progress !== -1))

    waitingForResponse$ = this._store.select(UploadSelectors.isWaitingForResponse);

    uploadPossible$ = combineLatest([this.lastError$.pipe(map(e=>e===undefined)), this.hasFilePreview$, this.uploadOngoing$])
                        .pipe(map(vals => vals[0] && vals[1] && !vals[2]))

    showProgressBar$ = combineLatest([this.uploadOngoing$, this.waitingForResponse$])
                        .pipe(map(vals=> vals[0] || vals[1]))

    constructor(private _store:Store){}

    updateUploadProgress(progress:number)
    {
        this._store.dispatch(UploadActions.uploadFileProgress({progress}))
    }

    confirmUpload(){        
        this._store.dispatch(UploadActions.confirmUpload())
    }

    loadSummaries(){
        this._store.dispatch(UploadActions.loadSummaries())
    }

    setSelectedFile(file:File){
        this._store.dispatch(UploadActions.uploadFile({file}))
    }

} 