import { createReducer, on } from "@ngrx/store";
import { partition } from "rxjs";
import { ITransaction } from "src/app/model/transaction";
import { ITransactionGroup } from "src/app/model/transactionGroup";
import { TransactionActions } from "./transactions.actions";

export enum PartitioningType{
    Income,
    Spendings
}

export namespace TransactionsReducer{

    export interface State{
        dataDate: Date;
        data: ITransactionGroup[];
        selectedTransaction?: ITransaction;
        partitioning:PartitioningType;
    }
    export const initialState :State = {
        dataDate: new Date(),
        data:[],
        selectedTransaction:undefined,
        partitioning: PartitioningType.Spendings
    }

    export const stateFeatureKey = "transactions";
    
    export const reducer = createReducer(
        initialState,

        on(TransactionActions.setPartitioningType,
            (state, {paritioningType}) => ({
                ...state,
                partitioning:paritioningType
            })),
        on(TransactionActions.selectTransaction,
            (state, {transaction}) => ({
                ...state,
                selectedTransaction:transaction
            })),
        on(TransactionActions.deselectTransaction,
            (state, _) => ({
                ...state,
                selectedTransaction:undefined,
                lastSearchTerm:""
            })),
        on(TransactionActions.assignGroupSuccess,
            (state, _) => ({
                ...state,
                selectedTransaction:undefined,
                lastSearchTerm:""
            })),
        
        on(TransactionActions.loadMonth,
            (state, {year, month}) => ({
                ...state,
                dataDate: new Date(year, month)
            })),
            
        on(TransactionActions.loadMonthSuccess,
            (state, {transactions}) => ({
                ...state,
                data: [...transactions]
            })),
    )
}