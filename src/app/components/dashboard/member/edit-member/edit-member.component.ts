import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
@Component({
  selector: 'app-edit-member',
  templateUrl: './edit-member.component.html',
  styleUrls: ['./edit-member.component.css'],
})
export class EditMemberComponent implements OnInit {
  s: Subscription | null = null;
  memberDetails: Member | null = null;
  errMsg: any = '';
  editForm: FormGroup = new FormGroup({});
  id: number = 1;

  constructor(
    public _memberService: MemberService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    // get details
    this.s = this.activatedRoute.params.subscribe(async (a) => {
      await this._memberService.get(a['id']).subscribe(
        (result: any) => {
          result.data[0].image =
            'http:\\localhost:8080\\' + result.data[0].image;

          result.data[0].birthdate = new Date(result.data[0].birthdate)
            .toISOString()
            .slice(0, 10);

          this.memberDetails = result.data[0];

          this.id = result.data[0]._id;
        },
        (error: any) => {
          this.errMsg = error.error.message;
        }
      );
    });

    // form validation
    this.editForm = this.fb.group({
      name: [this.memberDetails?.fullName, Validators.required],
      birthdate: [
        this.memberDetails?.birthdate,
        Validators.required,
        Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
      ],
      password: [],
      salary: new FormControl(this.memberDetails?.salary, [
        Validators.required,
        Validators.min(1000),
      ]),
      email: [this.memberDetails?.email, [Validators.required]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      city: ['', Validators.required],
      street: ['', Validators.required],
      building: ['', Validators.required],
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

  memberImage: File | any = null;
  memberImagePreview: string = '';

  onImageSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      this.memberImage = file;
      const reader = new FileReader();
      reader.onload = () => {
        this.memberImagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
  async onSubmit() {
    const formData = new FormData();

    if (this.memberImage) {
      formData.append('image', this.memberImage, this.memberImage.name);
    }

    if (this.editForm.controls['name'].dirty) {
      formData.append('name', this.editForm.value.name);
    }

    if (this.editForm.controls['password'].dirty) {
      formData.append('password', this.editForm.value.password);
    }

    if (this.editForm.controls['birthdate'].dirty) {
      formData.append('birthdate', this.editForm.value.birthdate);
    }

    if (this.editForm.controls['salary'].dirty) {
      formData.append('salary', this.editForm.value.salary);
    }

    if (this.editForm.controls['email'].dirty) {
      formData.append('email', this.editForm.value.email);
    }

    if (this.editForm.controls['phoneNumber'].dirty) {
      formData.append('phoneNumber', this.editForm.value.phoneNumber);
    }
    if (this.editForm.controls['city'].dirty) {
      formData.append('city', this.editForm.value.city);
    }
    if (this.editForm.controls['street'].dirty) {
      formData.append('street', this.editForm.value.street);
    }

    if (this.editForm.controls['building'].dirty) {
      formData.append('building', this.editForm.value.building);
    }
    const response = await this._memberService
      .patch(this.id, formData)
      .subscribe(
        async (response: any) => {
          this.router.navigateByUrl('/dashboard/member/member');
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
