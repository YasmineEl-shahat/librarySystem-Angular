import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { AdminComponent } from './admin/admin/admin.component';
import { BasicAdminComponent } from './admin/basic-admin/basic-admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { MemberComponent } from './member/member.component';
import { AddAdminComponent } from './admin/add-admin/add-admin.component';
import { AdminModule } from './admin/admin.module';
import { EditAdminComponent } from './admin/edit-admin/edit-admin.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeModule } from './employee/employee.module';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'admin/admin', component: AdminComponent },
      { path: 'admin/basic-admin', component: BasicAdminComponent },
      { path: 'admin/add-admin', component: AddAdminComponent },
      { path: 'admin/edit-admin/:id', component: EditAdminComponent },
      { path: 'employee/employee', component: EmployeeComponent },
      { path: 'employee/add-employee', component: AddEmployeeComponent },
      { path: 'employee/edit-employee/:id', component: EditEmployeeComponent },
      { path: 'member/member', component: MemberComponent },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [AdminModule, EmployeeModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
