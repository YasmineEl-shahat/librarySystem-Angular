import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBooksComponent } from './view-books/view-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path:'books',component:ViewBooksComponent},
  {path:'book/details/:id',component:BookDetailsComponent},
  ];

@NgModule({
  declarations: [
    ViewBooksComponent,
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ]
})
export class BookModule { }
