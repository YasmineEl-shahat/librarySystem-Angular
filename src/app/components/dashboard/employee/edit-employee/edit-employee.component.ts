import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeeRequest } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  s: Subscription | null = null;
  employeeDetails: EmployeeRequest | null = null;
  errMsg: any = '';
  editForm: FormGroup = new FormGroup({});
  id: number = 1;

  constructor(
    public EmployeeService: EmployeeService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // get details
    this.s = this.activatedRoute.params.subscribe(async (a) => {
      await this.EmployeeService.get(a['id']).subscribe(
        (result: any) => {
          result.data.image = 'http:\\localhost:8080\\' + result.data.image;
          console.log(result.data);
          result.data.birthdate = new Date(result.data.birthdate)
            .toISOString()
            .slice(0, 10);
          this.employeeDetails = result.data;

          this.id = result.data._id;
        },
        (error: any) => {
          this.errMsg = error.error.message;
        }
      );
    });

    // form validation
    this.editForm = this.fb.group({
      fname: [this.employeeDetails?.fname, Validators.required],
      lname: [this.employeeDetails?.lname, Validators.required],
      birthdate: [
        this.employeeDetails?.birthdate,
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ],
      password: [],
      salary: new FormControl(this.employeeDetails?.salary, [
        Validators.required,
        Validators.min(1000),
      ]),
      email: [this.employeeDetails?.email, [Validators.required]],
    });
  }

  //**********form validation functions*******

  isValidControl(name: string): boolean {
    return this.editForm.controls[name].valid;
  }

  isInValidAndTouched(name: string): boolean {
    return (
      this.editForm.controls[name].invalid &&
      (this.editForm.controls[name].dirty ||
        this.editForm.controls[name].touched)
    );
  }

  isControlHasError(name: string, error: string): boolean {
    return (
      this.editForm.controls[name].invalid &&
      this.editForm.controls[name].errors?.[error]
    );
  }
  //*********End of form validation functions**********

  employeeImage: File | any = null;
  employeeImagePreview: string = '';

  onImageSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.employeeImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.employeeImagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  async onSubmit() {
    const employee: EmployeeRequest = {};
    const formData = new FormData();

    if (this.employeeImage) {
      formData.append('image', this.employeeImage, this.employeeImage.name);
    }

    if (this.editForm.controls['fname'].dirty) {
      employee.fname = this.editForm.value.fname;
      formData.append('fname', this.editForm.value.fname);
    }

    if (this.editForm.controls['lname'].dirty) {
      employee.lname = this.editForm.value.lname;
      formData.append('lname', this.editForm.value.lname);
    }

    if (this.editForm.controls['password'].dirty) {
      employee.password = this.editForm.value.password;
      formData.append('password', this.editForm.value.password);
    }

    if (this.editForm.controls['birthdate'].dirty) {
      employee.birthdate = this.editForm.value.birthdate;
      formData.append('birthdate', this.editForm.value.birthdate);
    }

    if (this.editForm.controls['salary'].dirty) {
      employee.salary = this.editForm.value.salary;
      formData.append('salary', this.editForm.value.salary);
    }

    if (this.editForm.controls['email'].dirty) {
      employee.email = this.editForm.value.email;
      formData.append('email', this.editForm.value.email);
    }

    const response = await this.EmployeeService.patch(
      this.id,
      formData
    ).subscribe(
      async (response: any) => {
        this.router.navigateByUrl('/dashboard/employee/employee');
      },
      (error: any) => {
        this.errMsg = error.error.message;
      }
    );
  }
  ngOnDestroy() {
    this.s?.unsubscribe();
  }
}
