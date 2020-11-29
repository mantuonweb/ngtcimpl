import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    HttpClientModule,
    NgxNavbarModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot()
  ],
  exports: [CommonModule, FormsModule, AgGridModule,NgxNavbarModule,ModalModule,BsDatepickerModule,ReactiveFormsModule ]
})
export class SharedModule { }
