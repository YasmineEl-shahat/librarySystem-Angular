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
import { AddBorrowBookOperationComponent } from './bookOperation/borrow/add-borrow-book-operation/add-book-operation.component';
import { BorrowBookOperationComponent } from './bookOperation/borrow/book-borrow-operation/book-operation.component';
import { EditBorrowBookOperationComponent } from './bookOperation/borrow/edit-borrow-book-operation/edit-book-operation.component';
import { BookOperationModule } from './bookOperation/book-operation.module';
import { MemberModule } from './member/member.module';
import { AddMemberComponent } from './member/add-member/add-member.component';
import { EditMemberComponent } from './member/edit-member/edit-member.component';
import { BookModule } from '../book/book.module';
import { BooksComponent } from './book/books/books.component';
import { AddBookComponent } from './book/add-book/add-book.component';
import { EditBookComponent } from './book/edit-book/edit-book.component';

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
        path: 'bookOperation/add-borrow-bookOperation',
        component: AddBorrowBookOperationComponent,
      },
      {
        path: 'bookOperation/edit-borrow-bookOperation',
        component: EditBorrowBookOperationComponent,
      },
      {
        path: 'bookOperation/read',
        component: BorrowBookOperationComponent,
      },
      {
        path: 'bookOperation/add-read-bookOperation',
        component: AddBorrowBookOperationComponent,
      },
      {
        path: 'bookOperation/edit-read-bookOperation',
        component: EditBorrowBookOperationComponent,
      },
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
