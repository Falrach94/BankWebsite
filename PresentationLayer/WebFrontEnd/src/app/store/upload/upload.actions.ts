import { createAction, props } from "@ngrx/store";
import { BackendError } from "src/app/model/error";
import { UploadPreview } from "src/app/model/uploadPreview";
import { UploadSummary } from "src/app/model/uploadSummary";

export namespace UploadActions{

    export const loadSummaries = createAction("[upload] loadSummaries")
    export const loadSummariesSuccess = createAction("[upload] loadSummaries success", props<{summaries:UploadSummary[]}>())
    export const loadSummariesFailure = createAction("[upload] loadSummaries failure", props<{error:any}>())
    
    export const uploadFile = createAction("[upload] upload", props<{file:File}>())
    export const uploadFileProgress = createAction("[upload] upload progress", props<{progress:number}>())
    export const uploadFileSuccess = createAction("[upload] upload success", props<{preview:UploadPreview}>())
    export const uploadFileFailure = createAction("[upload] upload failure", props<{error:BackendError}>())

    export const confirmUpload = createAction("[upload] confirmUpload")
    export const confirmUploadSuccess = createAction("[upload] confirmUpload success", props<{summary:UploadSummary}>())
    export const confirmUploadFailure = createAction("[upload] confirmUpload failure", props<{error:BackendError}>())


}