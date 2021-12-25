import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPageComponent } from '../pages/upload/upload.component';
import { GroupsComponent } from '../pages/groups/groups.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { LoginGuard } from './guards/loginGuard';

const userRoutes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'transactions', component: UploadPageComponent},
  {path: 'groups', component: GroupsComponent},
]

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'user', canActivate:[LoginGuard],  children:userRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
