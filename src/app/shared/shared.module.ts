import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { ErrorMessageComponent } from './error-message/error-message.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    LoadingComponent,
    ErrorMessageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    LoadingComponent,
    ErrorMessageComponent
  ]
})
export class SharedModule { }
