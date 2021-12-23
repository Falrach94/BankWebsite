import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadPageComponent } from '../components/pages/upload/upload.component';
import { GroupsComponent } from '../components/pages/groups/groups.component';
import { HomeComponent } from '../components/pages/home/home.component';
import { LoginComponent } from '../components/pages/login/login.component';
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
