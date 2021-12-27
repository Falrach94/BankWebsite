import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { IGroup } from 'src/app/model/group';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { AppState } from 'src/app/store';
import { GroupActions } from 'src/app/store/groups/groups.actions';
import { GroupReducer } from 'src/app/store/groups/groups.reducer';
import { ColorDialogComponent } from '../../../components/dialogs/color-dialog/color-dialog.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  @Input()group!:IGroup;
  labelVisible:boolean = true;


  constructor(private _store: Store<AppState>,
              private _dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onClickRemove(){
    this._store.dispatch(GroupActions.remove({group:this.group}))
    //this._groupsService.removeGroup(this.group).subscribe();
  }
  onChangeName(name:string){
    this.group.name=name;
    //this._groupsService.saveGroup(this.group).subscribe();
  }

  onClickPickColor(){
    this._dialog.open(ColorDialogComponent).afterClosed().subscribe(res => {      
       
    })
  }

}
