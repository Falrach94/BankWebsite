import { escapeRegExp } from "@angular/compiler/src/util";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { partition } from "rxjs";
import { PartitioningType, TransactionsReducer } from "./transactions.reducer";

export namespace TransactionsSelectors{
    export const getTransactionsState = createFeatureSelector<TransactionsReducer.State>(TransactionsReducer.stateFeatureKey)
  
    export const getDataDate = createSelector(getTransactionsState, 
        ({dataDate})=>dataDate);
    export const getData = createSelector(getTransactionsState, 
        ({data})=>data);
    export const getSelectedTransaction = createSelector(getTransactionsState, 
        ({selectedTransaction})=>selectedTransaction);
            
    export const isTransactionSelected = createSelector(getTransactionsState, 
        ({selectedTransaction})=>typeof(selectedTransaction)!=="undefined");
    
    export const getBalance = createSelector(getTransactionsState, 
        ({data})=>{
            let plus = 0;
            let minus = 0;

            data.forEach(group => {
                plus += group.totalPlus
                minus -= group.totalMinus
            });
            return ({plus, minus});
        });
        
    export const getParitioningType = createSelector(getTransactionsState, 
        ({data, partitioning})=>({data, partitioning}));
    export const getPartitioning = createSelector(getParitioningType, 
        ({data, partitioning})=>{
            if(partitioning === PartitioningType.Income)
            {
                return data.filter(g => g.totalPlus != 0).map(group=>({group, value:group.totalPlus}));
            }
            else
            {
                return data.filter(g => g.totalMinus != 0).map(group=>({group, value:-group.totalMinus}));
            }
        });
            
    }