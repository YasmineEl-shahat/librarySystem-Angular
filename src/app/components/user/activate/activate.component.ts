import { UserCredintialService } from 'src/app/services/user-credintial.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivateService } from 'src/app/services/activate.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css'],
})
export class ActivateComponent {
  activateForm: FormGroup = new FormGroup({});
  errMsg: any = [];
  image: File | null = null;
  user: object = {};
  constructor(
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient,
    private router: Router,
    private activateService: ActivateService,
    private userService: UserService,
    private userCredintialService: UserCredintialService
  ) {}

  ngOnInit(): void {
    this.activateForm = this._formBuilder.group({
      image: ['', [Validators.required]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,16}$'),
        ],
      ],
    });

    // const i =token.id;
    // console.log(token.id)
  }

  //**********form validation functions*******

  isValidControl(name: string): boolean {
    return this.activateForm.controls[name].valid;
  }

  isInValidAndTouched(name: string): boolean {
    return (
      this.activateForm.controls[name].invalid &&
      (this.activateForm.controls[name].dirty ||
        this.activateForm.controls[name].touched)
    );
  }

  isControlHasError(name: string, error: string): boolean {
    return (
      this.activateForm.controls[name].invalid &&
      this.activateForm.controls[name].errors?.[error]
    );
  }
  //*********End of form validation functions**********

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  //*****login function*******************
  async activate() {
    const token: any = this.userCredintialService.getCredintial();
    if (token.role == "badmin") token.role = "admin";
    const formData = new FormData();
    if (this.image != null) {
      formData.append('image', this.image, this.image?.name);
    }
    formData.append('password', this.activateForm.value.password);
    await this.activateService
      .activateAccount(token.id, token.role, formData)
      .subscribe(
        async (response: any) => {
          this.router.navigateByUrl('/home');
        },
     
      );
  }
}
