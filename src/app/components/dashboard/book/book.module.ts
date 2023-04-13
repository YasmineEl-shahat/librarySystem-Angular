import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBorrowOperationComponent } from './add-borrow-operation/add-borrow-operation.component';

@NgModule({
  declarations: [BooksComponent, AddBookComponent, EditBookComponent, AddBorrowOperationComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookModule {}
