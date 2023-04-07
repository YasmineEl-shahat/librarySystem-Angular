import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAdminComponent } from './basic-admin/basic-admin.component';
import { AdminComponent } from './admin/admin.component';



@NgModule({
  declarations: [
    BasicAdminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
