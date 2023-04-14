import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [];
  currentPage: number = 1; // current page number

  constructor(private bookService: BookService) {}
  ngOnInit() {
    this.getAlBooks();
  }

  getAlBooks() {
    this.bookService.get().subscribe(
      (response: any) => {
        console.log(response);
        this.books = response;
      },
      (error: any) => {
         console.log(error);
      }
    );
  }

  deleteBook(id:number){
    this.bookService.delete(id).subscribe(
      (response: any) => {
        this.getAlBooks();
        console.log(response);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
