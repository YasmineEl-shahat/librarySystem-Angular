import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';
import { BookService } from 'src/app/services/book.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {





  books:Book[]=[];
  latestBooks:Book[]=[];
  limit:number = 4;

  constructor(private _bookService:BookService,private _apiService:ApiService) { }

  ngOnInit(): void {
    this._apiService.token;
    //get all books
    this.getAllBooks();

    // get new arrived books
    this._bookService.getLatestBooks()
    .subscribe(
      (response:any)=>{
     // JSON.stringify(response.data);
        this.latestBooks=response.data;
        console.log(this.latestBooks)
      }
      ,
      (error:any)=>{
       // alert("error");
      }
    );
  }


  getAllBooks(){
   this._bookService.getLimit()
  .subscribe(
    
    (response:any)=>{
     //JSON.stringify(response);
     //if (response.image) response.image = `https://localhost:8000/images/${response.image.split("images")[1]}`
       this.books=response;
       console.log(this.books);
       console.log(response);

     }
    ,
    (error:any)=>{
    //  alert("error");
    }
  );

  }



}
