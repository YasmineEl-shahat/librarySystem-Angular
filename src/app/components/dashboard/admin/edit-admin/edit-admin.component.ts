import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminRequest } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-edit-admin',
  templateUrl: './edit-admin.component.html',
  styleUrls: ['./edit-admin.component.css'],
})
export class EditAdminComponent implements OnInit {
  s: Subscription | null = null;
  adminDetails: AdminRequest | null = null;
  errMsg: any = '';
  editForm: FormGroup = new FormGroup({});
  id: number = 1;

  constructor(
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // get details
    this.s = this.activatedRoute.params.subscribe(async (a) => {
      await this.adminService.get(a['id']).subscribe(
        (result: any) => {
          result.data.image = 'http:\\localhost:8080\\' + result.data.image;
          console.log(result.data);
          result.data.birthdate = new Date(result.data.birthdate)
            .toISOString()
            .slice(0, 10);
          this.adminDetails = result.data;

          this.id = result.data._id;
        },
        (error: any) => {
          this.errMsg = error.error.message;
        }
      );
    });

    // form validation
    this.editForm = this.fb.group({
      fname: [this.adminDetails?.fname, Validators.required],
      lname: [this.adminDetails?.lname, Validators.required],
      birthdate: [
        this.adminDetails?.birthdate,
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ],
      password: [],
      salary: new FormControl(this.adminDetails?.salary, [
        Validators.required,
        Validators.min(1000),
      ]),
      email: [this.adminDetails?.email, [Validators.required]],
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

  adminImage: File | any = null;
  adminImagePreview: string = '';

  onImageSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.adminImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.adminImagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  async onSubmit() {
    const admin: AdminRequest = {};
    const formData = new FormData();

    if (this.adminImage) {
      formData.append('image', this.adminImage, this.adminImage.name);
    }

    if (this.editForm.controls['fname'].dirty) {
      admin.fname = this.editForm.value.fname;
      formData.append('fname', this.editForm.value.fname);
    }

    if (this.editForm.controls['lname'].dirty) {
      admin.lname = this.editForm.value.lname;
      formData.append('lname', this.editForm.value.lname);
    }

    if (this.editForm.controls['password'].dirty) {
      admin.password = this.editForm.value.password;
      formData.append('password', this.editForm.value.password);
    }

    if (this.editForm.controls['birthdate'].dirty) {
      admin.birthdate = this.editForm.value.birthdate;
      formData.append('birthdate', this.editForm.value.birthdate);
    }

    if (this.editForm.controls['salary'].dirty) {
      admin.salary = this.editForm.value.salary;
      formData.append('salary', this.editForm.value.salary);
    }

    if (this.editForm.controls['email'].dirty) {
      admin.email = this.editForm.value.email;
      formData.append('email', this.editForm.value.email);
    }

    const response = await this.adminService.patch(this.id, formData).subscribe(
      async (response: any) => {
        this.router.navigateByUrl(
          this.adminDetails?.isBase
            ? '/dashboard/admin/basic-admin'
            : '/dashboard/admin/admin'
        );
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
