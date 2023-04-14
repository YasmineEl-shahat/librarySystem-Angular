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
    id : number = 0;
    book:Book=new Book();
    // selectedFile: File= new File([''],'');
    // image: File | null = null;
    formData = new FormData();
    constructor(private route: ActivatedRoute , private BookService:BookService , private fb: FormBuilder , private router: Router) { }
    async ngOnInit() {
      this.id=Number(this.route.snapshot.paramMap.get('id'));
       let res:any=await this.BookService.getBook(this.id).toPromise()
        this.book = res.data[0];
        this.bookForm = this.fb.group({
          auther: [this.book.auther,[ Validators.required]],
          title: [this.book.title,[ Validators.required]],
          publisher: [this.book.publisher, [ Validators.required]],
          category: [this.book.category, [ Validators.required]],
          numOfCopies: [this.book.numOfCopies,[ Validators.required]],
          pages: [this.book.pages,[ Validators.required]],
          edition: [this.book.edition,[ Validators.required]],
          shelfNo: [this.book.shelfNo,[ Validators.required]],
        });
      
      }

      // onFileSelected(event: any) {
      //   this.selectedFile = event.target.files[0];
      // }
    
      onSubmit(){
        this.BookService.updateBook(this.id,this.bookForm.value).subscribe(
          (res:any) => {
            this.router.navigate(['/books']);
          }
        );
      }
}
