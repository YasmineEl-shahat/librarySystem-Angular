import { Component, OnInit } from '@angular/core';
import { MemberService } from './../../../services/member.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  memberObj: Member[] = [];
  constructor(public memberService: MemberService) {}

  ngOnInit() {
    this.memberService.getAll().subscribe((members: any) => {
      this.memberObj = members.data;
    });
  }

  deleteMember(id: number | undefined) {
    if (id) {
      this.memberService.deleteMember(id).subscribe((response: any) => {
        confirm(`Deleted member with id ${id} ${response.data} `);
      });
    }
  }
  // deleteMember(id: number | undefined, e: any) {
  //   e.preventDefault();
  //   if (id) {
  //     const confirmed = confirm(`Are you sure you want to delete member with id ${id}?`);
  //     if (confirmed) {
  //       this.memberService.deleteMember(id).subscribe((response: any) => {
  //         alert(`Deleted member with id ${id} ${response.data} `);
  //       });
  //     }
  //   }
  // }
}
