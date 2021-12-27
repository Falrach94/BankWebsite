import { createReducer, on } from "@ngrx/store";
import { partition } from "rxjs";
import { UploadSummary } from "src/app/model/uploadSummary";
import { ITransaction } from "src/app/model/transaction";
import { ITransactionGroup } from "src/app/model/transactionGroup";
import { UploadActions } from "./upload.actions";
import { UploadPreview } from "src/app/model/uploadPreview";
import { BackendError } from "src/app/model/error";


export namespace UploadReducer{

    export interface State{
        preview?:UploadPreview,
        summaries:UploadSummary[],
        lastError?:BackendError,
        uploadProgress:number,
        waiting:boolean
    }
    export const initialState :State = {
        preview:undefined,
        summaries:[],
        lastError:undefined,
        uploadProgress:-1,
        waiting:false
    }

    export const stateFeatureKey = "upload";
    
    export const reducer = createReducer(
        initialState,

        on(UploadActions.uploadFile,
            (state, _) => ({
                ...state,           
                uploadProgress:1,
            })),
        on(UploadActions.uploadFileProgress,
            (state, {progress}) => ({
                ...state,           
                uploadProgress:progress,
            })),
        on(UploadActions.uploadFileSuccess,
            (state, {preview}) => ({
                ...state,                
                preview,
                lastError:undefined,
                uploadProgress:-1,
            })),
        on(UploadActions.uploadFileFailure,
            (state, {error}) => ({
                ...state,                
                lastError:error,
                uploadProgress:-1,
            })),


        on(UploadActions.confirmUpload,
            (state, _) => ({
                ...state,         
                waiting:true
            })),
            
        on(UploadActions.confirmUploadFailure,
            (state, {error}) => ({
                ...state,                
                lastError:error,
                waiting:false
            })),
        on(UploadActions.confirmUploadSuccess,
            (state, {summary}) => ({
                ...state,                
                summaries:[...state.summaries, summary],
                lastError:undefined,
                preview:undefined,
                waiting:false
            })),
        on(UploadActions.loadSummariesSuccess,
            (state, {summaries}) => ({
                ...state,
                summaries:[...summaries],
                lastError:undefined,
                preview:undefined,
            })),
    )
}