import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { IsLoginGuard } from './guards/is-login.guard';

const routes: Routes = [
  {
    path: 'dashboard',

    loadChildren: () =>
      import('./components/dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[IsLoginGuard],
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[IsLoginGuard],
    loadChildren: () =>
      import('./components/user-profile/user-profile.module').then(
        (m) => m.UserProfileModule
      ),
  },
  {
    path: '',

    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[IsLoginGuard],
    loadChildren: () =>
      import('./components/book/book.module').then((m) => m.BookModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
