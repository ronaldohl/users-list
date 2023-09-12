import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { MaterialModule } from '../material/material.module';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { UserComponent } from './pages/user/user.component';
import { UserImagePipe } from './pipes/user-image.pipe';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListUsersComponent,
    UserComponent,
    UserImagePipe,

  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],

})
export class UsersModule { }
