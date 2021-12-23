import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { AppState } from 'src/app/store';
import { GroupActions } from 'src/app/store/groups/groups.actions';
import { GroupContainerComponent } from '../../customs/group-container/group-container.component';
import { NewGroupDialog } from '../../dialogs/new-group/new-group.component';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent {
  @ViewChild(GroupContainerComponent) groups!:GroupContainerComponent;

  groupChangedSubscription!:Subscription;


  constructor(private _dialog: MatDialog, private _store: Store<AppState>) { }

  

  onClickAddGroup(){
    const dialogRef = this._dialog.open(NewGroupDialog);

    dialogRef.afterClosed().subscribe(name => {
      this._store.dispatch(GroupActions.add({group:{name}}))
    });
  }


}
