import { Book } from 'src/app/models/book';
import { Component, ViewChild } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css'],
})
export class ViewBooksComponent {
  books: Book[] = [];
  latestBooks: Book[] = [];
  currentPage: number = 1;
  formPost = new FormControl({});
  // searchForm: FormGroup<{ title: FormControl<string | null>; publishingDate: FormControl<string | null>; publisher: FormControl<string | null>; category: FormControl<string | null>; auther: FormControl<string | null>; }> | undefined;
  range(start: number, end: number): number[] {
    return Array.from({length: end - start + 1}, (_, i) => start + i);
  }
  constructor(
    private _bookService: BookService,
    // private _formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //get all books
    this.getAllBooks();
    // this.createForm();
  }

  getAllBooks() {
    this._bookService.get().subscribe(
      (response: any) => {
        this.books = response;
      },
      (error: any) => {
        alert('error');
      }
    );
  }
  // on submit
  @ViewChild('searchForm') searchForm: any;

  async searchBooks() {
    let formData = {};

    if (
      this.searchForm.value.title &&
      this.searchForm.value.title.trim() != ''
    )
      formData = { ...formData, title: this.searchForm.value.title };
    if (
      this.searchForm.value.publishingDate
    )
      formData = {...formData,publishingDate: this.searchForm.value.publishingDate};
    if (
      this.searchForm.value.publisher &&
      this.searchForm.value.publisher.trim() != ''
    )
      formData = { ...formData, publisher: this.searchForm.value.publisher };
    if (this.searchForm.value.category)
      formData = { ...formData, category: this.searchForm.value.category };
    if (
      this.searchForm.value.auther &&
      this.searchForm.value.auther.trim() != ''
    )
      formData = { ...formData, auther: this.searchForm.value.auther };
    if (this.searchForm.value.avilable)
      formData = { ...formData, avilable: Boolean( this.searchForm.value.avilable) };
    // console.log(queryParams);
    console.log(formData);
    this._bookService.searchBook(formData).subscribe(
      async (data: any) => {
        this.books = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
function searchBooks() {
  throw new Error('Function not implemented.');
}
