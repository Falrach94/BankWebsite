import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IGroup } from 'src/app/model/group';
import { ITransaction } from 'src/app/model/transaction';
import { ITransactionGroup } from 'src/app/model/transactionGroup';
import { environment } from 'src/environments/environment';
import { AccountService } from '../account/account.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService{// implements OnInit, OnDestroy {
  //subscription!: Subscription

  constructor(private _http: HttpClient, 
              private _accountService: AccountService)
  {
  }

  loadMonth(date:Date)
  {
    date = new Date(date.getFullYear(), date.getMonth());
    let url:string = `${environment.apiUrl}/transactions/get/${this._accountService.getId()}/${date.toDateString()}/1`;
    return this._http.get<ITransactionGroup[]>(url);
  }

  assign(transaction: ITransaction, group: IGroup)
  {
    let url:string = `${environment.apiUrl}/transactions/assign/${this._accountService.getId()}/${transaction.id}/${group.id}`;
    return this._http.put(url,{})
  }

  
  uploadCSVFile(file: File)
  {
    
    /*
    if(file.type != "text/csv")
    {
      console.log("no csv file selected")
      return;
    }*/

    const formData = new FormData();
    formData.append('file', file);

    let url = `${environment.apiUrl}/transactions/upload/${this._accountService.getId()}`

    return this._http.post<ITransactionGroup[]>(url, formData)
  }      
}
