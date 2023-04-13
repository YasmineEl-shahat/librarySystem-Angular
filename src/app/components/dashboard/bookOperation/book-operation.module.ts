import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BorrowBookOperationComponent } from './book-borrow-operation/book-operation.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [BorrowBookOperationComponent],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class BookOperationModule {}
