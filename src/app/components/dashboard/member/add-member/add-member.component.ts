import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
// import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css'],
})
export class AddMemberComponent {
  addForm: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private _memberService: MemberService,
    private router: Router
  ) {}
  errMsg: any = '';
  ngOnInit(): void {
    this.addForm = this.fb.group({
      name: ['', Validators.required],
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
    // const member: Member = new Member();
    const member: any = {
      name: this.addForm.value.name,
      birthdate: this.addForm.value.birthdate,
      hiredate: this.addForm.value.hiredate,
      salary: this.addForm.value.salary,
      email: this.addForm.value.email,
      phoneNumber: this.addForm.value.phoneNumber,
      city: this.addForm.value.city,
      street: this.addForm.value.street,
      building: this.addForm.value.building,
    };

    const response = await this._memberService.post(member).subscribe(
      async (response: any) => {
        this.router.navigateByUrl('/dashboard/member/member');
      },
      (error: any) => {
        this.errMsg = error.error.message;
      }
    );
  }
}
