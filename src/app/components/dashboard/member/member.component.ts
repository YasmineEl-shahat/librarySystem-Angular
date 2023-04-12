import { Component, OnInit } from '@angular/core';
import { MemberService } from './../../../services/member.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  memberObj: Member[] = [];
  searchTerm: string[] = [];
  constructor(public memberService: MemberService) {}

  ngOnInit() {
    this.getMembers();
  }

  getMembers() {
    this.memberService.getAll().subscribe((members: any) => {
      this.memberObj = members.data;
    });
  }

  deleteMember(id: number | undefined, e: any) {
    if (id) {
      const confirmed = confirm(`Are you sure you want to delete member with id ${id}?`);
      if (confirmed) {
        this.memberService.deleteMember(id).subscribe((response: any) => {
          alert(`Deleted member with id ${id} `);
        });
      }
    }
  }


  addToSearchTerm(searchTerm: string): void {
    this.searchTerm.push(searchTerm);
    this.search();

  }

  search(): void {

    console.log('searchTerm:', this.searchTerm);
    if (this.searchTerm.length > 0) {
      this.memberService.getAll().subscribe((members: any) => {
        this.memberObj = members.data.filter((member: Member) =>
          member.email?.toLowerCase().includes(this.searchTerm[0].toLowerCase())

        );
        this.searchTerm = [];
      });
    } else {
      this.getMembers();
    }
  }





}






  // search(): void {
  //   if (this.searchTerm.length > 0) {
  //     this.memberService.memberSearch(this.searchTerm).subscribe((response: any) => {
  //       this.memberObj = response.data;
  //       alert(this.memberObj);
  //     });
  //   } else {
  //     this.getMembers();
  //   }
  // }





