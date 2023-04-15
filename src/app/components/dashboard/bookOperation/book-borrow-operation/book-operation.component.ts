import { Component } from '@angular/core';
import { BookOperation } from 'src/app/models/book-operation';
import { BookOperationService } from 'src/app/services/book-operation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-operation',
  templateUrl: './book-operation.component.html',
  styleUrls: ['./book-operation.component.css'],
})
export class BorrowBookOperationComponent {
  operations: BookOperation[] = [];
  currentPage = 1; // current page number
  errMsg: any = '';

  constructor(private bookOperarionService: BookOperationService,private router: Router) {}
  ngOnInit() {
    this.getAllOperations();
  }
  getAllOperations() {
    this.bookOperarionService.allBorrowedBook().subscribe(
      (response: any) => {
        this.operations = response.data;
      },
      (error: any) => {
         console.log(error);
      }
    );
  }
  async returnBook(book:any,member:any){
    let params = `book_id=`+book._id+`&member_id=`+member._id;
    console.log(params)
    // const response = await this.bookOperarionService.returnBook(params).subscribe(
    //   async (Response: any)=>{
    //     window.location.reload();
    //   },
    //   (error: any) => {
    //     this.errMsg = error.error.message;
    //   }
    // )
  }
}
