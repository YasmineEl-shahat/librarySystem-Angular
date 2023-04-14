import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './../../../services/employee.service';
import { EmployeeRequest } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees: EmployeeRequest[] = [];
  currentPage: number = 1;
  constructor(public employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getAll().subscribe((response: any) => {
      response.data.forEach((element: EmployeeRequest) => {
        if (element.image)
          element.image = `http:\\\\localhost:8080\images${
            element.image.split('images')[1]
          }`;
      });
      this.employees = response.data;
    });
  }

  deleteEmployee(id: number | undefined) {
    if (id) {
      this.employeeService.delete(id).subscribe((response: any) => {
        this.employeeService.getAll().subscribe((response: any) => {
          this.employees = response.data;
        });
      });
    }
  }
}
