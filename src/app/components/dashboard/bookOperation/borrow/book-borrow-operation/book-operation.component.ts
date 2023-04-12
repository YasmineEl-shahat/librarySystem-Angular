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
  constructor(private bookOperarionService: BookOperationService) {}
  ngOnInit() {
   this.getAllOperations();
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
