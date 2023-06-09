import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';

import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

const routes: Routes = [
  {path:'profile',component:ProfileComponent},
  {path:'edit-profile',component:EditProfileComponent},
  
 
  ];

@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule, ReactiveFormsModule
  ]
})
export class UserProfileModule { }
