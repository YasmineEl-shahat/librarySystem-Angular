import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserCredintialService } from 'src/app/services/user-credintial.service';

import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/member';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})



export class ProfileComponent {
  id:any;
  user:Member=new Member();
  borrowedBooks:Book[]=[];
  readingBooks:Book[]=[];
  address='';
  constructor(private userCredintialService: UserCredintialService,private MemberService:MemberService) { }

  ngOnInit(): void {
    const userCredintial:any = this.userCredintialService.getCredintial();
    const id = userCredintial.id;
    console.log(this.userCredintialService.getCredintial());
    this.MemberService.getById(id).subscribe(
      (response:any)=>{
      JSON.stringify(response.data);
      this.user = response.data[0];
      this.address = `${this.user.fullAddress?.city || ""}, ${this.user.fullAddress?.street || ""}, ${this.user.fullAddress?.building || ""}`;
      console.log(this.user);
    });
    


    // borrowed boooks
    this.MemberService.getBorrowedBooks(id).subscribe(
      (response:any)=>{
      JSON.stringify(response.data);
      this.borrowedBooks = response.data;
      console.log(this.borrowedBooks);
    });

    //reading books
    this.MemberService.getreadingBooks(id).subscribe(
      (response:any)=>{
      JSON.stringify(response.data);
      this.readingBooks = response.data;
      console.log(this.readingBooks);
    });

  }

}
