import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {

    path:'',
    component:LayoutComponent,

    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  {

    path:'',
    component:LayoutComponent,

    loadChildren: () => import('./components/user-profile/user-profile.module').then(m => m.UserProfileModule)
  },
  {

    path:'',
    loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)
  },
  {

    path:'',
    component:LayoutComponent,
    loadChildren: () => import('./components/book/book.module').then(m => m.BookModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
