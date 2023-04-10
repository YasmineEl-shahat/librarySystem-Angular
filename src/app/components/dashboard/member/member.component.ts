import { Component, OnInit } from '@angular/core';
import { MemberService } from './../../../services/member.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {


  memberObj:Member[]=[];
  constructor(public memberService: MemberService) {}

  ngOnInit() {
    this.memberService.getAll().subscribe((members:any) => {


      this.memberObj=members.data;
      console.log(this.memberObj);
      // console.log(members);
    });
  }

  deleteMember(id: number | undefined) {
    if (id) {
      this.memberService.deleteMember(id).subscribe((response: any) => {
        confirm(`Deleted member with id ${id} ${response.data} `);

      });
    }
  }


}

