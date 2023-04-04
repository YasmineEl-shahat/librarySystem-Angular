import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] =[];
  ngOnInit() {
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
        ];
    }
}



