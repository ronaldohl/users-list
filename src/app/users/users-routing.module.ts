import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { UserComponent } from './pages/user/user.component';

const routes: Routes = [
  {
    path: '', 
    component: ListUsersComponent,
    children: [
      {
        path: 'user/:id', component: UserComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
