import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewBooksComponent } from './view-books/view-books.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { RouterModule, Routes } from '@angular/router';
import { BookFilterComponent } from './book-filter/book-filter.component';

const routes: Routes = [
  {path:'books',component:ViewBooksComponent},
  {path:'book/details/:id',component:BookDetailsComponent},
  {path:'book/filter',component:BookFilterComponent},

  ];

@NgModule({
  declarations: [
    ViewBooksComponent,
    BookDetailsComponent,
    BookFilterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BookModule { }
