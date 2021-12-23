import { createFeatureSelector, createSelector } from "@ngrx/store";
import { GroupReducer } from "./groups.reducer";


export namespace GroupSelectors{ 

    export const getGroupState = createFeatureSelector<GroupReducer.State>(GroupReducer.stateFeatureKey);

    export const getAllGroups = createSelector(getGroupState, 
        (state)=> state.items)

    export const getTypeaheadSelection = createSelector(getGroupState,
        (state) => state.selectedGroups)
        
    export const getLastSearchTerm = createSelector(getGroupState,
        (state) => state.lastSearchTerm)
}