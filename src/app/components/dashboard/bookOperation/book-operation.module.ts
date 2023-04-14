import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowBookOperationComponent } from './book-borrow-operation/book-operation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookReadOperationComponent } from './book-read-operation/book-read-operation.component';

@NgModule({
  declarations: [BorrowBookOperationComponent , BookReadOperationComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookOperationModule {}
