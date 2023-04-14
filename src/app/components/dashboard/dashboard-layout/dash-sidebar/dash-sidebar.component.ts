import { Component, OnInit } from '@angular/core';
import { UserCredintialService } from 'src/app/services/user-credintial.service';

@Component({
  selector: 'app-dash-sidebar',
  templateUrl: './dash-sidebar.component.html',
  styleUrls: ['./dash-sidebar.component.scss']
})
export class DashSidebarComponent implements OnInit{
  staff:any;
  role:string=''
  constructor(private _userCredintialService:UserCredintialService){}
  ngOnInit(): void {
    this.staff=this._userCredintialService.getCredintial();
    this. role=this.staff.role;
  }

}
