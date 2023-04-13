import { Component } from '@angular/core';
import { BookOperation } from 'src/app/models/book-operation';
import { BookOperationService } from 'src/app/services/book-operation.service';

@Component({
  selector: 'app-book-operation',
  templateUrl: './book-operation.component.html',
  styleUrls: ['./book-operation.component.css'],
})
export class BorrowBookOperationComponent {
  operations: BookOperation[] = [];
  currentPage = 1; // current page number
  pageSize = 3; // number of items to display per page

  constructor(private bookOperarionService: BookOperationService) {}
  ngOnInit() {
   this.getAllOperations();
  }

  get totalPages(): number {
    return Math.ceil(this.operations.length / this.pageSize);
  }

  onPreviousClick() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  onNextClick() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }
  getAllOperations() {
    this.bookOperarionService.allBorrowedBook().subscribe(
      (response: any) => {
        this.operations = response.data;
        // console.log(this.operations);
        // console.log(operations);
      },
      (error: any) => {
        //  alert("error");
      }
    );
  }
}
