import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { first } from "rxjs/operators";
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

    constructor(private _store:Store){}

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