import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicAdminComponent } from './basic-admin/basic-admin.component';
import { AdminComponent } from './admin/admin.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasicAdminComponent, AdminComponent, AddAdminComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class AdminModule {}
