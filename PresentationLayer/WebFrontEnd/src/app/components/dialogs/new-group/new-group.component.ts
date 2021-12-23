import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-group',
  templateUrl: './new-group.component.html',
  styleUrls: ['./new-group.component.css']
})
export class NewGroupDialog implements OnInit {


  constructor(private _dialogRef: MatDialogRef<NewGroupDialog>) { }

  ngOnInit(): void {
  }

  confirm(name:string){

    this._dialogRef.close(name);
  }

}
