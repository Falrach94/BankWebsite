import { createAction, props } from "@ngrx/store";
import { IUser } from "src/app/model/user";

export namespace AccountActions{
    export const authenticate = createAction("[Action] authenticate", props<{name:string, pw:string}>())
    export const authenticateSuccess = createAction("[Action] authenticate success", props<{user:IUser}>())
    export const authenticateFailure = createAction("[Action] authenticate failure", props<{error:any}>())
    
    export const create = createAction("[Action] create", props<{name:string, email:string, pw:string}>())
    export const createSuccess = createAction("[Action] create success", props<{user:IUser}>())
    export const createFailure = createAction("[Action] create failure", props<{error:any}>())
    
    export const logout = createAction("[Action] logout")
}