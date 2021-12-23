import { IGroup } from "./group";
import { ITransaction } from "./transaction";

export interface ITransactionGroup{
    group?:IGroup;
    transactions:ITransaction[];
    id: string;
    totalPlus:number;
    totalMinus:number;
}
