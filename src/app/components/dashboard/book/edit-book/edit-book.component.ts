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
//   bookForm: FormGroup = new FormGroup({});
//   book:Book=new Book();
//   id : number = 0;
//   constructor(private route: ActivatedRoute , private BookService:BookService , private fb: FormBuilder , private router: Router) { }
//   ngOnInit(): void {
//     this.id =Number(this.route.snapshot.paramMap.get('id'));
//     this.BookService.getBook(this.id).subscribe(
//       (response:any)=>{
//         this.book = response.data[0];
//         console.log(this.book);
//       });
//     console.log(this.id); 
//   }


// async onSubmit() {
//     // Handle form submission logic here
//     let formData = new FormData();
//     console.log(this.bookForm.value.title);
//     console.log(this.bookForm.value.auther);
//     formData.append('title', this.bookForm.value.title);
//     formData.append('auther', this.bookForm.value.auther);
//     formData.append('publisher', this.bookForm.value.publisher);
//     // formData.append('publishingDate', this.bookForm.value.publishingDate);
//     formData.append('category', this.bookForm.value.category);
//     formData.append('edition', this.bookForm.value.edition);
//     formData.append('pages', this.bookForm.value.pages);
//     formData.append('avilable', this.bookForm.value.avilable);
//     formData.append('shelfNo', this.bookForm.value.shelfNo);
//     formData.append('numOfCopies', this.bookForm.value.numOfCopies);
//     // formData.append('noOfBorrowing', this.bookForm.value.noOfBorrowing);
//     // formData.append('noOfReading', this.bookForm.value.noOfReading);
//     console.log(formData.get('title'));
//     console.log(formData.get('auther'));
//    await this.BookService.updateBook(this.id,formData).subscribe(
//      async (res:any) => {
//         this.router.navigate(['/books']);
//       }
//     );
//   }
    bookForm: FormGroup = new FormGroup({});
    id : number = 0;
    book:Book=new Book();
    selectedFile: File= new File([''],'');
    image: File | null = null;
    constructor(private route: ActivatedRoute , private BookService:BookService , private fb: FormBuilder , private router: Router) { }
    ngOnInit(): void {
      this.id=Number(this.route.snapshot.paramMap.get('id'));
      this.BookService.getBook(this.id).subscribe(
        (response:any)=>{
          this.book = response.data[0];
          console.log(this.book);
        });
        this.bookForm = this.fb.group({
          auther: [this.book.auther, Validators.required],
          publisher: [this.book.publisher, Validators.required],
          category: [this.book.category, Validators.required],
          numOfCopies: [this.book.numOfCopies, Validators.required],
          pages: [this.book.pages, Validators.required],
          edition: [this.book.edition, Validators.required],
          shelfNo: [this.book.shelfNo, Validators.required],
          image: [this.book.image, Validators.required]
        });
      
      }

      onFileSelected(event: any) {
        this.selectedFile = event.target.files[0];
      }
    
      onSubmit(){
        console.log(this.id)
        this.BookService.updateBook(this.id,this.bookForm.value).subscribe(
          (res:any) => {
            this.router.navigate(['/books']);
          }
        );
      }


}

// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Book } from 'src/app/models/book';
// import { BookService } from 'src/app/services/book.service';

// @Component({
//   selector: 'app-edit-book',
//   templateUrl: './edit-book.component.html',
//   styleUrls: ['./edit-book.component.css']
// })
// export class EditBookComponent implements OnInit {
//   bookForm: FormGroup = new FormGroup({});
//   book: Book  = new Book();
//   id: number = 0;

//   constructor(
//     private route: ActivatedRoute,
//     private bookService: BookService,
//     private fb: FormBuilder,
//     private router: Router
//   ) {}

//   ngOnInit(): void {
//     this.id = Number(this.route.snapshot.paramMap.get('id'));
//         this.bookService.getBook(this.id).subscribe(
//           (response:any)=>{
//             this.book = response.data[0];
//             console.log(this.book);
//           });
//         console.log(this.id); 
//       }
//       private populateForm(book: Book) {
//         this.bookForm.setValue({
//           _id: book._id,
//           title: book.title,
//           author: book.auther,
//           publisher: book.publisher,
//           category: book.category,
//           edition: book.edition,
//           pages: book.pages,
//           available: book.avilable,
//           numOfCopies: book.numOfCopies,
//           shelfNo: book.shelfNo,
//           // noOfBorrowing: book.noOfBorrowing,
//           // noOfReading: book.noOfReading,
//         });
//       }
//       async onSubmit() {
//         // Handle form submission logic here
//         console.log(this.bookForm.value.title);
//         console.log(this.bookForm.value.auther);
//         console.log(this.bookForm.value.publisher);
//         console.log(this.bookForm.value.category);
//         console.log(this.bookForm.value.edition);
//         console.log(this.bookForm.value.pages);
//         console.log(this.bookForm.value.available);
//         console.log(this.bookForm.value.numOfCopies);
//         let formData = new FormData();
//         formData.append('_id', this.bookForm.value._id);
//         formData.append('title', this.bookForm.value.title);
//         formData.append('author', this.bookForm.value.author);
//         formData.append('publisher', this.bookForm.value.publisher);
//         formData.append('category', this.bookForm.value.category);
//         formData.append('edition', this.bookForm.value.edition);
//         formData.append('pages', this.bookForm.value.pages);
//         formData.append('available', this.bookForm.value.available);
//         formData.append('numOfCopies', this.bookForm.value.numOfCopies);
//         formData.append('shelfNo', this.bookForm.value.shelfNo);
//         // formData.append('noOfBorrowing', this.bookForm.value.noOfBorrowing);
//         // formData.append('noOfReading', this.bookForm.value.noOfReading);
//         if (this.bookForm.valid) {
//           this.bookService.updateBook(this.id,formData).subscribe(
//             (response: any) => {
//               console.log(response);
//               this.router.navigate(['/book-details/' + this.id]);
//             },
//             (error: any) => {
//               console.log(error);
//             }
//           );
//         }
//       }
//     }
            





