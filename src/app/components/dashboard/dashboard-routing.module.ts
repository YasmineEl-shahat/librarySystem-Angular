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
import { IsLoginGuard } from 'src/app/guards/is-login.guard';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { EmployeeModule } from './employee/employee.module';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { BorrowBookOperationComponent } from './bookOperation/book-borrow-operation/book-operation.component';
import { BookOperationModule } from './bookOperation/book-operation.module';
import { MemberModule } from './member/member.module';
import { AddMemberComponent } from './member/add-member/add-member.component';
import { EditMemberComponent } from './member/edit-member/edit-member.component';
// import { BookModule } from '../book/book.module';
import { BookModule } from './book/book.module';
import { BooksComponent } from './book/books/books.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';
import { AddBorrowOperationComponent } from './book/add-borrow-operation/add-borrow-operation.component';
import { IsBaseAdminGuard } from 'src/app/guards/is-base-admin.guard';
import { IsAdminGuard } from 'src/app/guards/is-admin.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'admin/admin', component: AdminComponent,canActivate:[IsBaseAdminGuard] },
      { path: 'admin/basic-admin', component: BasicAdminComponent,canActivate:[IsBaseAdminGuard]},
      { path: 'admin/add-admin', component: AddAdminComponent,canActivate:[IsBaseAdminGuard] },
      { path: 'admin/edit-admin/:id', component: EditAdminComponent,canActivate:[IsBaseAdminGuard] },
      { path: 'employee/employee', component: EmployeeComponent,canActivate:[IsAdminGuard] },
      { path: 'employee/add-employee', component: AddEmployeeComponent,canActivate:[IsAdminGuard]  },
      { path: 'employee/edit-employee/:id', component: EditEmployeeComponent,canActivate:[IsAdminGuard]  },
      { path: 'member/member', component: MemberComponent },
      { path: 'member/add-member', component: AddMemberComponent },
      { path: 'member/edit-member/:id', component: EditMemberComponent },
      { path: 'book/books', component: BooksComponent },
      { path: 'book/add-book', component: AddBookComponent },
      { path: 'book/edit-book/:id', component: EditBookComponent },
      {
        path: 'bookOperation/borrow',
        component: BorrowBookOperationComponent,
      },
      {
        path: 'book/add-borrow-bookOperation/:id',
        component: AddBorrowOperationComponent,
      },
      // {
      //   path: 'bookOperation/edit-borrow-bookOperation',
      //   component: EditBorrowBookOperationComponent,
      // },
      // {
      //   path: 'bookOperation/read',
      //   component: BorrowBookOperationComponent,
      // },
      // {
      //   path: 'bookOperation/add-read-bookOperation',
      //   component: AddBorrowBookOperationComponent,
      // },
      // {
      //   path: 'bookOperation/edit-read-bookOperation',
      //   component: EditBorrowBookOperationComponent,
      // },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [
    AdminModule,
    EmployeeModule,
    MemberModule,
    BookOperationModule,
    BookModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
