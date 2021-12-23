import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { AccountEffects } from "./account/account.effects";
import { AccountReducer } from "./account/account.reducer";
import { GroupEffects } from "./groups/groups.effects";
import { GroupReducer } from "./groups/groups.reducer";
import { TransactionsEffects } from "./transactions/transactions.effects";
import { TransactionsReducer } from "./transactions/transactions.reducer";

export interface AppState {
    groups: GroupReducer.State
    account: AccountReducer.State
    transactions: TransactionsReducer.State
}

export const AppReducers: ActionReducerMap<AppState> ={
    groups: GroupReducer.reducer,
    account: AccountReducer.reducer,
    transactions: TransactionsReducer.reducer
}

export const AppEffects = [GroupEffects, AccountEffects, TransactionsEffects]