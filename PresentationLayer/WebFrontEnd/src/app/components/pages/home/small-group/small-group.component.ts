import { Component, Input, OnInit } from '@angular/core';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { IGroup } from "src/app/model/group";
import { Store } from '@ngrx/store';
import { TransactionActions } from 'src/app/store/transactions/transactions.actions';

@Component({
  selector: 'app-small-group',
  templateUrl: './small-group.component.html',
  styleUrls: ['./small-group.component.css']
})
export class SmallGroupComponent implements OnInit {
  @Input()group!:IGroup;

  getId(){
    if(this.group) return this.group.id;
    else return 0
  }

  constructor(private _store: Store) { }

  onClick(){
    this._store.dispatch(TransactionActions.assignGroup({group:this.group}))
  }

  ngOnInit(): void {
  }

}
