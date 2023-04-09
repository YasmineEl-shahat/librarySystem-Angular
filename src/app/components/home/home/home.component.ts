import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  

  books:Book[]=[];
  latestBooks:Book[]=[];

  constructor(private _bookService:BookService) { }

  ngOnInit(): void {
    //get all books
    this.getAllBooks();

    // get new arrived books
    this._bookService.getLatestBooks()
    .subscribe(
      (response:any)=>{
      JSON.stringify(response.data);
        this.latestBooks=response;
        console.log(this.latestBooks)
      }
      ,
      (error:any)=>{
        alert("error");
      }
    );
  }


  getAllBooks(){
   this._bookService.get()
  .subscribe(
    (response:any)=>{
     //JSON.stringify(response);
       this.books=response;
       console.log(this.books);
       console.log(response);

     }
    ,
    (error:any)=>{
      alert("error");
    }
  );

  }

 

}
