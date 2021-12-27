import { escapeRegExp } from "@angular/compiler/src/util";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UploadReducer } from "./upload.reducer";

export namespace UploadSelectors{
    export const getUploadState = createFeatureSelector<UploadReducer.State>(UploadReducer.stateFeatureKey)
  
    export const hasPreviewedFile = createSelector(getUploadState, 
        ({preview})=>typeof(preview)!=="undefined");
    
    export const getPreviewedFile = createSelector(getUploadState, 
        ({preview})=>preview);
        
    export const getUploadProgress = createSelector(getUploadState, 
        ({uploadProgress})=>uploadProgress);

    export const getSummaries = createSelector(getUploadState, 
        ({summaries})=>[...summaries].sort((a,b)=>{
            if(a.earliest < b.earliest)
            {
                return -1;
            }
            return 1;
        }))
    export const getLastError = createSelector(getUploadState,
        ({lastError})=> lastError);

    export const isWaitingForResponse = createSelector(getUploadState,
        ({waiting})=> waiting);
}