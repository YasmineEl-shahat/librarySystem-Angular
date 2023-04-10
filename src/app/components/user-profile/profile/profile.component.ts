import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UserCredintialService } from 'src/app/services/user-credintial.service';

import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/member';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  id:any;
  user:Member=new Member();
  // user={fullName: '', email: '', phoneNumber: '', address: '', birthdate: '',};
  
  constructor(private userCredintialService: UserCredintialService,private MemberService:MemberService) { }

  ngOnInit(): void {
    const userCredintial:any = this.userCredintialService.getCredintial();
    const id = userCredintial.id;
    console.log(this.userCredintialService.getCredintial());
    this.MemberService.getById(id).subscribe(
      (response:any)=>{
      JSON.stringify(response.data);
      this.user = response.data[0];
      console.log(this.user);
    });
  }

}
