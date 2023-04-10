import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  book:Book= new Book;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _bookService: BookService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      let id = params.get('id');
      console.log(id);

      this._bookService.getBook(`${id}`).subscribe((book: any) => {
        this.book = book[0];
        console.log(this.book);
      });
    });
  }

}
