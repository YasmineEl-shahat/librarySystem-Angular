import { Component } from '@angular/core';
import { BookOperation } from 'src/app/models/book-operation';
import { BookOperationService } from 'src/app/services/book-operation.service';

@Component({
  selector: 'app-book-read-operation',
  templateUrl: './book-read-operation.component.html',
  styleUrls: ['./book-read-operation.component.css']
})
export class BookReadOperationComponent {
  operations: BookOperation[] = [];
  currentPage = 1; // current page number
  constructor(private bookOperarionService: BookOperationService){}
  ngOnInit() {
    this.getAllOperations();
  }
  getAllOperations() {
    this.bookOperarionService.allReadBook().subscribe(
      (response: any) => {
        this.operations = response.data;
      },
      (error: any) => {
         console.log(error);
      }
    );
  }

}
