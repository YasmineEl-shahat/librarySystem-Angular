import { Component, OnInit } from '@angular/core';
import { AdminRequest } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  admins: AdminRequest[] = [];

  constructor(public _adminService: AdminService) {}

  ngOnInit() {
    this._adminService.getAll().subscribe((response: any) => {
      response.data.forEach((element: AdminRequest) => {
        if (element.image)
          element.image = `http:\\\\localhost:8080\images${
            element.image.split('images')[1]
          }`;
      });
      this.admins = response.data.filter((admin: AdminRequest) => {
        return !admin.isBase;
      });
    });
  }

  deleteAdmin(id: number | undefined) {
    if (id) {
      this._adminService.delete(id).subscribe((response: any) => {
        this._adminService.getAll().subscribe((response: any) => {
          this.admins = response.data;
        });
      });
    }
  }
}
