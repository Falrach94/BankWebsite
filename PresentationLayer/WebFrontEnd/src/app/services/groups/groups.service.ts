import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IGroup } from "src/app/model/group";
import { tap, map, first } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AccountSelectors } from 'src/app/store/account/account.selectors';
import { AccountService } from '../account/account.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  groupsChanged$ : Subject<IGroup> = new Subject<IGroup>();

  constructor(private _http: HttpClient, 
              private _accountService:AccountService)
  {
  }

  getGroups(): Observable<IGroup[]>
  {
    let url = `${environment.apiUrl}/groups/${this._accountService.getId()}`
    return this._http.get<IGroup[]>(url)
  }


  saveGroup(group:IGroup)
  {   
    const url:string = `${environment.apiUrl}/groups/${this._accountService.getId()}/`
    
    const method:string = group.id ? 'PUT' : 'POST';
    
    return this._http.request(method, url + (group.id || ''),{
      body:group
    }).pipe(tap(_=>this.groupsChanged$.next(group)));
  }


  removeGroup(group:IGroup)
  {
    let url = `${environment.apiUrl}/groups/${this._accountService.getId()}/${group.id}`
    return this._http.delete(url).pipe(tap(_=>this.groupsChanged$.next(group)))
  }


  addGroup(group: IGroup) {
    const url:string = `${environment.apiUrl}/groups/${this._accountService.getId()}`
    
    return this._http.post<IGroup>(url,group);
    
  }

}
