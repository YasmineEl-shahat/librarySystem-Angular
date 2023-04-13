import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: Book[] = [];
  currentPage : number= 1; // current page number
  pageSize : number = 3; // number of items to display per page

  constructor(private bookService: BookService) {}
  ngOnInit() {
   this.getAlBooks();
  }

  // get totalPages(): number {
  //   return Math.ceil(this.books.length / this.pageSize);
  // }

  // onPreviousClick() {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }

  // onNextClick() {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }
  getAlBooks() {
    this.bookService.get().subscribe(
      (response: any) => {
        console.log(response)
        this.books = response;
       
      },
      (error: any) => {
        //  alert("error");
      }
    );
  }
}
