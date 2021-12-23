import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { IGroup } from "src/app/model/group";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { _STORE_FEATURES } from '@ngrx/store/src/tokens';
import { GroupActions } from 'src/app/store/groups/groups.actions';
import { GroupSelectors } from 'src/app/store/groups/groups.selectors';

@Component({
  selector: 'app-group-container',
  templateUrl: './group-container.component.html',
  styleUrls: ['./group-container.component.css']
})
export class GroupContainerComponent implements OnInit {

  groups$ = this._store.select(GroupSelectors.getAllGroups);

  //groups$:Observable<IGroup[]> | undefined;

  constructor(private _store: Store<AppState>) { }

  ngOnInit(): void {
    this._store.dispatch(GroupActions.loadAll());
    this.reload()
  }

  reload(){
//    this._store.dispatch(GroupActions)
    //this.groups$ = this._groupsService.getGroups();
  }

}
