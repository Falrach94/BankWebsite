import { createAction, props } from "@ngrx/store";
import { IGroup } from "src/app/model/group";
import { ITransaction } from "src/app/model/transaction";
import { ITransactionGroup } from "src/app/model/transactionGroup";
import { PartitioningType } from "./transactions.reducer";

export namespace TransactionActions{
    export const loadMonth = createAction("[Transaction] loadMonth", props<{year:number, month:number}>())
    export const loadMonthSuccess = createAction("[Transaction] loadMonth success", props<{transactions:ITransactionGroup[]}>())
    export const loadMonthFailure = createAction("[Transaction] loadMonth failure", props<{error:any}>())

    export const assignGroup = createAction("[Transaction] assignGroup", props<{group:IGroup}>())
    export const assignGroupSuccess = createAction("[Transaction] assignGroup success")
    export const assignGroupFailure = createAction("[Transaction] assignGroup failure", props<{error:any}>())

    export const upload = createAction("[Transaction] upload", props<{file:File}>());
    export const uploadSuccess = createAction("[Transaction] upload sucess");
    export const uploadFailure = createAction("[Transaction] upload failure", props<{error:any}>());

    export const selectTransaction = createAction("[Transaction] selectTransaction", props<{transaction:ITransaction}>());
    export const deselectTransaction = createAction("[Transaction] deselectTransaction");

    export const setPartitioningType = createAction("[Transaction] setPartitioningType", props<{paritioningType:PartitioningType}>());

}