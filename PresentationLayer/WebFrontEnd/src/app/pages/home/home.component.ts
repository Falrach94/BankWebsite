import { CdkDragDrop, CdkDragEnd } from '@angular/cdk/drag-drop';
import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, Output, EventEmitter, ViewChildren, ElementRef} from '@angular/core';
import { MatTreeFlatDataSource } from '@angular/material/tree';
import { Observable } from 'rxjs';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { TransactionsService } from 'src/app/services/transactions/transactions.service';
import { SmallGroupComponent } from './small-group/small-group.component';
import { IGroup } from "src/app/model/group";
import { ITransactionGroup } from 'src/app/model/transactionGroup';
import { ITransaction } from 'src/app/model/transaction';
import { Store } from '@ngrx/store';
import { TransactionsSelectors } from 'src/app/store/transactions/transactions.seletors';
import { GroupSelectors } from 'src/app/store/groups/groups.selectors';
import { _STORE_FEATURES } from '@ngrx/store/src/tokens';
import { TransactionsEffects } from 'src/app/store/transactions/transactions.effects';
import { TransactionActions } from 'src/app/store/transactions/transactions.actions';
import { AppState } from 'src/app/store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  year:number = new Date().getFullYear();
  month:number = new Date().getMonth();

  date!: Date;
  transactionGroups$ = this._store.select(TransactionsSelectors.getData);

  isTransactionSelected$ = this._store.select(TransactionsSelectors.isTransactionSelected)

  currentGroup?:IGroup;

  constructor(private _store:Store<AppState>) {
  }

  isSelectedGroup(group: IGroup)
  {
    if(!this.currentGroup)
    {
      return false;
    }
    return this.currentGroup.id === group.id
  }




  update(){
    this.date = new Date(this.year, this.month);
    this.reload();
  }

  previousMonth(){
    this.month -=1;
    if(this.month < 0)
    {
      this.month = 11;
      this.year -=1;
    }
    this.update();
  }

  nextMonth(){
    this.month +=1;
    if(this.month > 11)
    {
      this.month = 0;
      this.year +=1;
    }
    this.update();
  }


  drop(transaction: ITransaction, event:CdkDragEnd){
//    document.elementFromPoint()


    if(!this.currentGroup){
      return
    }

    /*
    this._transactionsService.assign(transaction, this.currentGroup).subscribe(res=>{
      this.reload();
    })*/
  }

  enterGroup(groupComponent: SmallGroupComponent)
  {
    this.currentGroup = groupComponent.group
  }
  leaveGroup()
  {
    this.currentGroup = undefined
  }

  sort(input:any)
  {
    let groups = input as ITransactionGroup[];
    groups = [...groups].sort((a,b)=>{
      if(a.group === null)
      {
        return -1;
      }
      if(b.group === null)
      {
        return 1;
      }
      return a.totalMinus - b.totalMinus;
    });
    return groups;
  }


  ngOnInit(): void {  

   // this.groups$ = this._groupService.getGroups()
  //  this.transactionGroups$ = this._transactionsService.groups$;
    this.update();
  }

  reload(){  
    this._store.dispatch(TransactionActions.loadMonth({year:this.year, month:this.month}))
    //this._transactionsService.loadMonth(this.date).subscribe();
  }
  
}
