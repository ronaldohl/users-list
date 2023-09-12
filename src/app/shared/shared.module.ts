import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MaterialModule } from '../material/material.module';
import { DialogComponent } from './dialog/dialog.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ErrorMessageComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    ErrorMessageComponent,
    DialogComponent
  ]
})
export class SharedModule { }
