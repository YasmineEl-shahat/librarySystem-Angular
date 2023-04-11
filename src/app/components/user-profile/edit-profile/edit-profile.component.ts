import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the FormGroup and FormBuilder classes

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  memberForm: FormGroup = new FormGroup({});
  selectedFile: File= new File([''],'');

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      fullName: ['', Validators.required],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthdate: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      city: ['', Validators.required],
      street: ['', Validators.required],
      building: ['', Validators.required],
      image: [null]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    // Handle form submission logic here
  }

}



