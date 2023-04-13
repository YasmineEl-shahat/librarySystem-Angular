import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent {
  bookForm: FormGroup = new FormGroup({});
  book:Book=new Book();
  id : number = 0;
  constructor(private route: ActivatedRoute , private BookService:BookService , private fb: FormBuilder , private router: Router) { }
  ngOnInit(): void {
    this.id =Number (this.route.snapshot.paramMap.get('id'));
    this.BookService.getBook(this.id).subscribe(
      (response:any)=>{
        this.book = response.data[0];
        console.log(this.book);
      });
    console.log(this.id); 
  }


  onSubmit() {
    // Handle form submission logic here
    let formData = new FormData();
    formData.append('title', this.bookForm.value.title);
    formData.append('auther', this.bookForm.value.auther);
    formData.append('publisher', this.bookForm.value.publisher);
    formData.append('publishingDate', this.bookForm.value.publishingDate);
    formData.append('category', this.bookForm.value.category);
    formData.append('edition', this.bookForm.value.edition);
    formData.append('pages', this.bookForm.value.pages);
    formData.append('avilable', this.bookForm.value.avilable);
    formData.append('shelfNo', this.bookForm.value.shelfNo);
    formData.append('numOfCopies', this.bookForm.value.numOfCopies);
    formData.append('noOfBorrowing', this.bookForm.value.noOfBorrowing);
    formData.append('noOfReading', this.bookForm.value.noOfReading);
    this.BookService.updateBook(this.id,formData).subscribe(
      (res:any) => {
        this.router.navigate(['/books']);
      }
    );
  }

}
