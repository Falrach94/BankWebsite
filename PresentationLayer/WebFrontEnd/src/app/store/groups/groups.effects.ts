import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap, tap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { GroupActions } from "./groups.actions";
import { GroupsService } from "src/app/services/groups/groups.service";
import { Store } from "@ngrx/store";
import { GroupSelectors } from "./groups.selectors";

@Injectable()
export class GroupEffects{

    constructor(private actions$: Actions, 
                private groupService: GroupsService,
                private _store:Store){}
    


    loadGroups = createEffect(() => this.actions$.pipe(
        ofType(GroupActions.loadAll),
        switchMap(_ => this.groupService.getGroups()
            .pipe( 
                map((groups) => GroupActions.loadAllSuccess({ groups })),
                catchError(error => of(GroupActions.loadAllFailure({ error })))
            )            
        )
    ));
    loadGroupsSuccess = createEffect(() => this.actions$.pipe(
        ofType(GroupActions.loadAllSuccess),
        map(_=>GroupActions.selectTypeahead({input:""}))
    ));
    addGroup = createEffect(() => this.actions$.pipe(
        ofType(GroupActions.add),
        switchMap(action => this.groupService.addGroup(action.group)
            .pipe( 
                map(group => GroupActions.addSuccess({ group })),
                catchError(error => of(GroupActions.loadAllFailure({ error })))
            )
        )
    ));
    addGroupSuccess = createEffect(()=> this.actions$.pipe(
        ofType(GroupActions.addSuccess),
        withLatestFrom(this._store.select(GroupSelectors.getLastSearchTerm)),
        map(([_,searchTerm])=>GroupActions.selectTypeahead({input:searchTerm}))       
    ));

    removeGroup = createEffect(() => this.actions$.pipe(
        ofType(GroupActions.remove),
        switchMap(action => this.groupService.removeGroup(action.group)
            .pipe( 
                map(_ => GroupActions.removeSuccess({ group:action.group })),
                catchError(error => of(GroupActions.removeFailure({ error })))
            )
        )
    ));

}
