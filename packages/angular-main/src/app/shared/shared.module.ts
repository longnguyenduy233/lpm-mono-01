import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './common/components/dialog/dialog.component';


@NgModule({
  declarations: [DialogComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    DialogComponent
  ]
})
export class SharedModule { }
