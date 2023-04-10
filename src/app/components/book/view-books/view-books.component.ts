import { Book } from 'src/app/models/book';
import { Component } from '@angular/core';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css'],
})
export class ViewBooksComponent {
  books: Book[] = [];
  latestBooks: Book[] = [];

  constructor(private _bookService: BookService) {}

  ngOnInit(): void {
    //get all books
    this.getAllBooks();

    //
  }

  getAllBooks() {
    this._bookService.get().subscribe(
      (response: any) => {
        this.books = response;
        console.log(this.books);
        console.log(response);
      },
      (error: any) => {
        alert('error');
      }
    );
  }
}
