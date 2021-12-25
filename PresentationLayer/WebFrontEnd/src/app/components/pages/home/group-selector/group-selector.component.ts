import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { NewGroupDialog } from 'src/app/components/dialogs/new-group/new-group.component';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { GroupActions } from 'src/app/store/groups/groups.actions';
import { GroupSelectors } from 'src/app/store/groups/groups.selectors';

@Component({
  selector: 'app-group-selector',
  templateUrl: './group-selector.component.html',
  styleUrls: ['./group-selector.component.css']
})
export class GroupSelectorComponent implements OnInit {

  searchTerm = new FormControl()

  groups$ = this._store.select(GroupSelectors.getTypeaheadSelection)

  constructor(private _store: Store, private _dialog:MatDialog) { }
  ngOnInit(): void {
    this._store.dispatch(GroupActions.loadAll());

    this.searchTerm.valueChanges.subscribe(value => {
        this._store.dispatch(GroupActions.selectTypeahead({input:value}))
      }     
    )
  }
  onClickAddGroup(name:string){
    if(name.length > 2)
    {
      this._store.dispatch(GroupActions.add({group:{name}}))
    }
    else
    {
      let dialogRef = this._dialog.open(NewGroupDialog);
      dialogRef.afterClosed().subscribe(name => {
        if(name){
          this._store.dispatch(GroupActions.add({group:{name}}))
        }
      })
    }
  }

}
