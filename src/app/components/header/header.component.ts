import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserCredintialService } from 'src/app/services/user-credintial.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] =[];
  staff:any;
  constructor(private _userCredintialService:UserCredintialService){}
  ngOnInit() {
   this.isStaff();
   if(!this.isStaff()){
        this.items = [  
            {
                label:'Profile',
                icon: 'pi pi-fw pi-user',
                    items: [
                        {
                          label: 'Logout',
                          icon: 'pi pi-fw pi-download',routerLink: ['/logout']
                            
                        },   {
                          label: 'Profile',
                          icon: 'pi pi-fw pi-user',routerLink: ['/profile']
                      },
                    
                ]
            },
        ];}
        else{
          this.items = [  
            {
                
              label: 'Logout',
              icon: 'pi pi-fw pi-download',routerLink: ['/logout']
            },
        ],        this.items = [  
          {
              label:'Dashboard',
              icon: 'pi pi-fw pi-database',
                  items: [
                    {
                      label: 'Dashboard',
                      icon: 'pi pi-fw pi-database',routerLink: ['/dashboard']
                  },
                      {
                        label: 'Logout',
                        icon: 'pi pi-fw pi-download',routerLink: ['/logout']
                          
                      }, 
                  
              ]
          },
      ];

        }
    }

    isStaff(){
      this.staff=this._userCredintialService.getCredintial();
      let role=this.staff.role;
      if(role == "member"){   
      return false;
      }
      else
      return true;
    }
}



