import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminRequest } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private _adminService: AdminService,
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
      isBase: [true, Validators.requiredTrue],
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
    const admin: AdminRequest = {
      fname: this.addForm.value.fname,
      lname: this.addForm.value.lname,
      birthdate: this.addForm.value.birthdate,
      hiredate: this.addForm.value.hiredate,
      salary: this.addForm.value.salary,
      email: this.addForm.value.email,
      isBase: this.addForm.value.isBase,
    };
    const response = await this._adminService.post(admin).subscribe(
      async (response: any) => {
        this.router.navigateByUrl(
          admin.isBase
            ? '/dashboard/admin/basic-admin'
            : '/dashboard/admin/admin'
        );
      },
      (error: any) => {
        this.errMsg = error.error.message;
      }
    );
  }
}
