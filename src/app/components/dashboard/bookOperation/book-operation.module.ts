import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBorrowBookOperationComponent } from './borrow/add-borrow-book-operation/add-book-operation.component';
import { BorrowBookOperationComponent } from './borrow/book-borrow-operation/book-operation.component';
import { EditBorrowBookOperationComponent } from './borrow/edit-borrow-book-operation/edit-book-operation.component';
import { BookReadOperationComponent } from './read/book-read-operation/book-read-operation.component';
import { AddBookReadOperationComponent } from './read/add-book-read-operation/add-book-read-operation.component';
import { EditBookReadOperationComponent } from './read/edit-book-read-operation/edit-book-read-operation.component';


@NgModule({
 
  declarations: [
    AddBorrowBookOperationComponent,
    BorrowBookOperationComponent,
    EditBorrowBookOperationComponent,
    BookReadOperationComponent,
    AddBookReadOperationComponent,
    EditBookReadOperationComponent,
  ],
  imports: [CommonModule],
})
export class BookOperationModule {}
