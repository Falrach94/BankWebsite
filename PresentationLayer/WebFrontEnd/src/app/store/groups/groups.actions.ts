import { Action, createAction, props } from "@ngrx/store";
import { IGroup } from "src/app/model/group";


export namespace GroupActions {
    export const loadAll = createAction('[Group] Load all')
    export const loadAllSuccess = createAction('[Group] Load all success', props<{ groups: IGroup[] }>())
    export const loadAllFailure = createAction('[Group] Load all failure', props<{ error: any }>())

    export const add = createAction('[Group] add', props<{ group: IGroup }>())
    export const addSuccess = createAction('[Group] add success', props<{ group: IGroup }>())
    export const addFailure = createAction('[Group] add failure', props<{ error: any }>())
    
    export const remove = createAction('[Group] remove', props<{ group: IGroup }>())
    export const removeSuccess = createAction('[Group] remove success', props<{ group: IGroup }>())
    export const removeFailure = createAction('[Group] remove failure', props<{ error: any }>())
    
    export const selectTypeahead = createAction('[Group] select typeahead', props<{ input:string }>())
    

}
