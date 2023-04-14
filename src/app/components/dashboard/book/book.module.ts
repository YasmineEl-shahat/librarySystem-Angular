import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { FormsModule, ReactiveFormsModule ,FormGroup} from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { AddBorrowOperationComponent } from './add-borrow-operation/add-borrow-operation.component';
import { AddBookReadOperationComponent } from './add-book-read-operation/add-book-read-operation.component';



@NgModule({
  declarations: [BooksComponent, AddBookComponent, EditBookComponent, AddBorrowOperationComponent , AddBookReadOperationComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookModule {}
