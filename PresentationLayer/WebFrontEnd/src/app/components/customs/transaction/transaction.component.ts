import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { first } from 'rxjs/operators';
import { ITransaction } from 'src/app/model/transaction';
import { TransactionActions } from 'src/app/store/transactions/transactions.actions';
import { TransactionsSelectors } from 'src/app/store/transactions/transactions.seletors';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

@Input()transaction:ITransaction;

  selectedTransaction$ = this._store.select(TransactionsSelectors.getSelectedTransaction)

  constructor(private _store:Store) { 
    this.transaction = {target:"", purpose:"", date:new Date(), amount:0};
  }

  ngOnInit(): void {
  }
  onDoubleClick(){
    let selection;
    this.selectedTransaction$.pipe(first()).subscribe(val=>selection=val)

    if(selection && (selection as ITransaction).id == this.transaction.id)
    {
      this._store.dispatch(TransactionActions.deselectTransaction())
    }
    else
    {
      this._store.dispatch(TransactionActions.selectTransaction({transaction:this.transaction}))
    }
  }

}
