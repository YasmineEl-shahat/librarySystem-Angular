import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookRequest } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  imageValue: string = '';
  image: File | any = null;
  constructor(
    private fb: FormBuilder,
    private _bookService: BookService,
    private router: Router
  ) {}
  errMsg: any = '';
  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      auther: ['', Validators.required],
      publisher: ['', Validators.required],
      category: ['', Validators.required],
      edition: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      publishingDate: [
        '',
        [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)],
      ],
      pages: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      avilable: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      shelfNo: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      numOfCopies: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      noOfBorrowing: [
        '',
        [Validators.required, Validators.pattern(/^[0-9]+$/)],
      ],
      noOfReading: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      image: ['', Validators.required],
    });
  }
  isValidControl(name: string): boolean {
    return this.addForm.controls[name].valid;
  }

  isInValidAndTouched(name: string): boolean {
    return (
      this.addForm.controls[name].invalid &&
      (this.addForm.controls[name].dirty || this.addForm.controls[name].touched)
    );
  }

  isControlHasError(name: string, error: string): boolean {
    return (
      this.addForm.controls[name].invalid &&
      this.addForm.controls[name].errors?.[error]
    );
  }
  onImageSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.image = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.imageValue = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  async onSubmit() {
    const book: BookRequest = {};
    const formData = new FormData();
    if (this.image) {
      book.image = this.image.name;
      formData.append('image', this.image, this.image.name);
    }
    book.title = this.addForm.value.title;
    formData.append('title', this.addForm.value.title);

    book.auther = this.addForm.value.auther;
    formData.append('auther', this.addForm.value.auther);

    book.publisher = this.addForm.value.publisher;
    formData.append('publisher', this.addForm.value.publisher);

    book.publishingDate = this.addForm.value.publishingDate;
    formData.append('publishingDate', this.addForm.value.publishingDate);

    book.category = this.addForm.value.category;
    formData.append('category', this.addForm.value.category);

    book.edition = this.addForm.value.edition;
    formData.append('edition', this.addForm.value.edition);

    book.pages = this.addForm.value.pages;
    formData.append('pages', this.addForm.value.pages);

    book.avilable = this.addForm.value.avilable;
    formData.append('avilable', this.addForm.value.avilable);

    book.shelfNo = this.addForm.value.shelfNo;
    formData.append('shelfNo', this.addForm.value.shelfNo);

    book.numOfCopies = this.addForm.value.numOfCopies;
    formData.append('numOfCopies', this.addForm.value.numOfCopies);

    console.log(book);
    const response = await this._bookService.addBook(formData).subscribe(
      async (response: any) => {
        this.router.navigate(['/dashboard/book/books']);
      },
      (error: any) => {
        this.errMsg = error.error.message;
      }
    );
  }
}
