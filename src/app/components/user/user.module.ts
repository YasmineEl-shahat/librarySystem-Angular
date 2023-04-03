import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ActivateComponent } from './activate/activate.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'logout',component:LogoutComponent},
  {path:'activate',component:ActivateComponent},
  
 
  ];

@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    ActivateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
