import { Action, createReducer, on } from "@ngrx/store";
import { filter } from "rxjs/operators";
import { IGroup } from "src/app/model/group";
import { GroupActions } from "./groups.actions";

export namespace GroupReducer
{
    export interface State{
        items: IGroup[];
        selectedGroups : IGroup[];
        lastSearchTerm:string;
    }
    
    export const initialState: State = {
        items: [],
        selectedGroups: [],
        lastSearchTerm:""
    }

    export function reducer(state=initialState, action:Action){
        return _reducer(state, action)
    }
    export const stateFeatureKey='groups';
}
const _reducer = createReducer(
    GroupReducer.initialState,
    on(GroupActions.loadAllSuccess, 
        (state, {groups}) => ({
             ...state,                
             items:groups
        })),
  
    on(GroupActions.addSuccess, 
        (state, {group}) => ({
             ...state,  
             items:[...state.items, group]
        })),
                                
    on(GroupActions.removeSuccess, 
        (state, {group}) => ({
             ...state,  
            items: state.items.filter(g=>g.id!==group.id)
        })),

    on(GroupActions.selectTypeahead,
        (state, {input}) =>({
            ...state,
            selectedGroups: state.items.filter(g=>g.name.toUpperCase().includes(input.toUpperCase())),
            lastSearchTerm:input                        
        })),

);
