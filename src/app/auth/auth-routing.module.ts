import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { JoinComponent } from './components/join/join.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'join',
    component:JoinComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
