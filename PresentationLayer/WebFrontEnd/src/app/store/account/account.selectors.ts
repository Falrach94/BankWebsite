import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountReducer } from "./account.reducer";

export namespace AccountSelectors{
    export const getAccountState = createFeatureSelector<AccountReducer.State>(AccountReducer.stateFeatureKey)

    export const isLoginDone = createSelector(getAccountState, 
        state => typeof(state.currentUser) != "undefined")
        
    export const getUserData = createSelector(getAccountState, 
        ({currentUser}) => currentUser);

    export const getUserId = createSelector(getAccountState, 
        ({currentUser}) => currentUser?.id);

    export const getLastError = createSelector(getAccountState,
        ({lastError}) => lastError)

    export const hasError = createSelector(getAccountState,
        ({lastError}) =>typeof(lastError) ==="undefined")
}