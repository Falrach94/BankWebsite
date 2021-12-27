import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TransactionsService } from 'src/app/services/transactions/transactions.service';
import { TransactionActions } from 'src/app/store/transactions/transactions.actions';
import { UploadActions } from 'src/app/store/upload/upload.actions';
import { UploadFacade } from '../../store/upload/upload.facade';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadPageComponent implements OnInit {

  summaries$ = this._uploadFacade.summaries$;
  preview$ = this._uploadFacade.preview$;
  hasPreview$ = this._uploadFacade.hasFilePreview$;
  lastError$ = this._uploadFacade.lastError$;

  constructor(private _uploadFacade : UploadFacade){ 
  }

  ngOnInit(): void {
    this._uploadFacade.loadSummaries();
  }


  onFileUploaded(file:File)
  {
    this._uploadFacade.setSelectedFile(file);
  }

  confirmUpload()
  {
    this._uploadFacade.confirmUpload();
  }




}
