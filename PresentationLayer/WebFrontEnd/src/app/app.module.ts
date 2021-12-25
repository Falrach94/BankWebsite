import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UploadPageComponent } from './pages/upload/upload.component';
import { GroupsComponent } from './pages/groups/groups.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule } from '@angular/material/form-field';
import {TextFieldModule} from '@angular/cdk/text-field'
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule } from '@angular/material/input';
import {DragDropModule} from '@angular/cdk/drag-drop'
import {MatTreeModule} from '@angular/material/tree';

import { UploadComponent } from './components/customs/upload/upload.component';
import { TransactionComponent } from './components/customs/transaction/transaction.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { GroupComponent } from './components/customs/group/group.component';
import { GroupContainerComponent } from './components/customs/group-container/group-container.component';
import { NewGroupDialog } from './components/dialogs/new-group/new-group.component';

import { ColorPickerModule } from '@iplab/ngx-color-picker';
import { ColorDialogComponent } from './components/dialogs/color-dialog/color-dialog.component';
import { SmallGroupComponent } from './pages/home/small-group/small-group.component';
import { GroupTitleComponent } from './pages/home/group-title/group-title.component';
import { GroupSelectorComponent } from './pages/home/group-selector/group-selector.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppEffects, AppMetaReducers, AppReducers } from './store';
import { GroupEffects } from './store/groups/groups.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { StringReplacementPipe } from './pipes/string-replacement.pipe';


import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { SummaryComponent } from './pages/home/summary/summary.component';

registerLocaleData(localeDe, 'de-DE', localeDeExtra);

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UploadComponent,
    GroupsComponent,
    UploadPageComponent,
    TransactionComponent,
    GroupComponent,
    GroupContainerComponent,
    NewGroupDialog,
    ColorDialogComponent,
    SmallGroupComponent,
    GroupTitleComponent,
    GroupSelectorComponent,
    StringReplacementPipe,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    TextFieldModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    ColorPickerModule,
    DragDropModule,
    MatTreeModule,
    ReactiveFormsModule,
    PlotlyModule,
    
    StoreModule.forRoot(AppReducers, {metaReducers:AppMetaReducers}),
    EffectsModule.forRoot(AppEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    
    
    //StoreModule.forFeature(fromState.stateFeatureKey, fromState.reducers, { metaReducers: fromState.metaReducers })
  ],
  providers: [//{provide: 'baseUrl', useValue: baseUrl},
              {provide: LOCALE_ID, useValue: 'de-DE'},
            ],
  bootstrap: [AppComponent]
})
export class AppModule { }
function localeDeExtra(localeDe: any, arg1: string, localeDeExtra: any) {
  throw new Error('Function not implemented.');
}

