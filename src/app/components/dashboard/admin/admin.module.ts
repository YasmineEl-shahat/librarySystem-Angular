import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAdminComponent } from './basic-admin/basic-admin.component';
import { AdminComponent } from './admin/admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAdminComponent } from './edit-admin/edit-admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [BasicAdminComponent, AdminComponent, AddAdminComponent, EditAdminComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,NgxPaginationModule],
})
export class AdminModule {}
