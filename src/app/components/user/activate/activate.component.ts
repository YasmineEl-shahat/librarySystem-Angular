import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent {
  activateForm: FormGroup = new FormGroup({});
  errMsg: any = [];
  image: File | null = null;
  constructor(
    private _formBuilder: FormBuilder,
    private _httpClient: HttpClient,
    private router: Router,
    private _userService: UserService,
    private _apiService: ApiService
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
   

    const formData = new FormData();
   
    if(this.image != null){
      formData.append('image', this.image   , this.image?.name);
    }
    formData.append('image', this.activateForm.value.password );

     this._apiService.post('admin/activate',formData).subscribe(
       (response: any) => {
         this._userService.login(response.token, response.message);
        console.log(response);

        this.router.navigateByUrl('/home');
      },
      (error: any) => {
        console.log(this.errMsg);
      }
    );
  }
   
}
