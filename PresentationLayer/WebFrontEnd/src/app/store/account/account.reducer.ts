import { createReducer, on } from "@ngrx/store";
import { IUser } from "src/app/model/user";
import { AccountActions } from "./account.actions";

function spreadError(error:any){

    let errorMsg = "Unkown error!";
    switch(error.status)
    {
        case 404:
            errorMsg="Page not found!"
            break;
        case 504:
            errorMsg="Server could not be reached!"
            break;
    }
    return errorMsg;
}

export namespace AccountReducer{
    
    export interface State {
        currentUser?: IUser;
        lastError?:string
    }

    export const initialState: State = {
    }

    export const stateFeatureKey="account";

    export const reducer = createReducer(
        initialState,
        
        on(AccountActions.authenticateSuccess,
            (state, {user})=>({
                ...state,
                currentUser:user
            })),
        on(AccountActions.authenticateFailure,
            (state, {error})=>({
                ...state,
                lastError:spreadError(error)
            })),

        on(AccountActions.createSuccess,
            (state, {user})=>({
                ...state,
                currentUser:user
        })),
        on(AccountActions.createFailure,
            (state, {error})=>({
                ...state,
                lastError:spreadError(error)
            })),
        on(AccountActions.logout,
            (state, _)=>({
                ...state,
                currentUser:undefined,
                lastError:undefined
        })),
    )   
}
