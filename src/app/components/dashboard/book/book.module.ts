import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class BookModule {}
