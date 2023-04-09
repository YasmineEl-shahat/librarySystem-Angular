import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent implements OnInit {
  addForm: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder) {}

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
      salary: ['', Validators.required, Validators.min(1000)],
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
  onSubmit() {
    // Do something with the form data
    console.log(this.addForm.value);
  }
}
