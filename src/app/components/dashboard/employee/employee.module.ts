import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    EmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,NgxPaginationModule],
})
export class EmployeeModule {}
