import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeRequest } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private _employeeService: EmployeeService,
    private router: Router
  ) {}
  errMsg: any = '';
  ngOnInit(): void {
    this.addForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      birthdate: [
        '',
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ],
      hiredate: [
        '',
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ],
      salary: new FormControl('', [Validators.required, Validators.min(1000)]),
      email: ['', [Validators.required, Validators.email]],
    });
  }

  //**********form validation functions*******

  isValidControl(name: string): boolean {
    return this.addForm.controls[name].valid;
  }

  isInValidAndTouched(name: string): boolean {
    return (
      this.addForm.controls[name].invalid &&
      (this.addForm.controls[name].dirty || this.addForm.controls[name].touched)
    );
  }

  isControlHasError(name: string, error: string): boolean {
    return (
      this.addForm.controls[name].invalid &&
      this.addForm.controls[name].errors?.[error]
    );
  }
  //*********End of form validation functions**********
  async onSubmit() {
    const employee: EmployeeRequest = {
      fname: this.addForm.value.fname,
      lname: this.addForm.value.lname,
      birthdate: this.addForm.value.birthdate,
      hiredate: this.addForm.value.hiredate,
      salary: this.addForm.value.salary,
      email: this.addForm.value.email,
    };
    const response = await this._employeeService.post(employee).subscribe(
      async (response: any) => {
        this.router.navigateByUrl('/dashboard/employee/employee');
      },
      (error: any) => {
        this.errMsg = error.error.message;
      }
    );
  }
}
