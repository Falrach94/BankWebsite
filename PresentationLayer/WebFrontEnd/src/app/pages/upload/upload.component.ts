import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TransactionsService } from 'src/app/services/transactions/transactions.service';
import { TransactionActions } from 'src/app/store/transactions/transactions.actions';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadPageComponent implements OnInit {

  constructor(private _store:Store){ 
  }

  ngOnInit(): void {
  }

  uploadFile(file:File){
    this._store.dispatch(TransactionActions.upload({file}))
  }

}
