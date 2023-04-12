import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import the FormGroup and FormBuilder classes
import { UserCredintialService } from 'src/app/services/user-credintial.service';
import { Router } from '@angular/router';

import { MemberService } from 'src/app/services/member.service';
import { Member } from 'src/app/models/member';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  memberForm: FormGroup = new FormGroup({});
  selectedFile: File= new File([''],'');
  image: File | null = null;
  user: Member =new Member();
  id: number = 0;
  city: string = '';
  street: string = '';
  building: Number = 0;
  

  constructor(private fb: FormBuilder,private userCredintialService: UserCredintialService,private MemberService:MemberService,private router: Router ) { }

  ngOnInit(): void {
    const userCredintial:any = this.userCredintialService.getCredintial();
    this.id = userCredintial.id;
    this.MemberService.getById(this.id).subscribe(
      (response:any)=>{     
      this.user = response.data[0];
      this.city=this.user.fullAddress?.city||"";
      this.street=this.user.fullAddress?.street ||"";
      this.building=this.user.fullAddress?.building ||0;
      console.log(this.user);
      });
    this.memberForm = this.fb.group({
      fullName: [this.user.fullName, Validators.required],
      phoneNumber: [this.user.phoneNumber, Validators.required],
      birthdate: [this.user.birthdate, Validators.required],
      city: [this.city, Validators.required],
      street: [this.street, Validators.required],
      building: [this.building, Validators.required],
      image: [this.user.image, Validators.required]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    // Handle form submission logic here
    let formData = new FormData();
    if (this.image != null) {
      formData.append('image', this.image, this.image?.name);
    }
    formData.append('fullName', this.memberForm.value.fullName);
    formData.append('phoneNumber', this.memberForm.value.phoneNumber);
    formData.append('city', this.memberForm.value.city);
    formData.append('street', this.memberForm.value.street);
    formData.append('building', this.memberForm.value.building);
    formData.append('birthdate', this.memberForm.value.birthdate);
    this.MemberService.updateProfile(this.id,formData).subscribe(
      (res:any) => {
        this.router.navigate(['/profile']);
      }
    );

  }

}



