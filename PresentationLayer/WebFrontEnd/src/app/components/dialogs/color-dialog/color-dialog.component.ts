import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ColorPickerControl } from '@iplab/ngx-color-picker';

@Component({
  selector: 'app-color-dialog',
  templateUrl: './color-dialog.component.html',
  styleUrls: ['./color-dialog.component.css']
})
export class ColorDialogComponent implements OnInit {

  pickerControl: ColorPickerControl =  new ColorPickerControl();

  constructor(private _dialogRef: MatDialogRef<ColorDialogComponent>) { }

  ngOnInit(): void {
  }

  confirm(){
    this._dialogRef.close()
  }
  abort(){
    this._dialogRef.close()
  }

}
