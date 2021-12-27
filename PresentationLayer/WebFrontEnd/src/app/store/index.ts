import { ActionReducerMap, createFeatureSelector, createSelector, MetaReducer } from "@ngrx/store";
import { AccountEffects } from "./account/account.effects";
import { AccountReducer } from "./account/account.reducer";
import { GroupEffects } from "./groups/groups.effects";
import { GroupReducer } from "./groups/groups.reducer";
import { hydrationMetaReducer } from "./hydration.reducer";
import { TransactionsEffects } from "./transactions/transactions.effects";
import { TransactionsReducer } from "./transactions/transactions.reducer";
import { UploadEffects } from "./upload/upload.effects";
import { UploadReducer } from "./upload/upload.reducer";

export interface AppState {
    groups: GroupReducer.State
    account: AccountReducer.State
    transactions: TransactionsReducer.State
    upload: UploadReducer.State
}

export const AppReducers: ActionReducerMap<AppState> ={
    groups: GroupReducer.reducer,
    account: AccountReducer.reducer,
    transactions: TransactionsReducer.reducer,
    upload: UploadReducer.reducer
}


export const AppEffects = [GroupEffects, 
                           AccountEffects, 
                           TransactionsEffects,
                           UploadEffects]

export const AppMetaReducers: MetaReducer[] = [hydrationMetaReducer];