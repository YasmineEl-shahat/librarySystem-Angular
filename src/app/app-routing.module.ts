import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { IsLoginGuard } from './guards/is-login.guard';
import { IsAdminGuard } from './guards/is-admin.guard';
import { IsStaffGuard } from './guards/is-staff.guard';
import { IsActiveGuard } from './guards/is-active.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    canActivate:[IsLoginGuard,IsActiveGuard,IsStaffGuard],
    loadChildren: () =>
      import('./components/dashboard/dashboard-routing.module').then(
        (m) => m.DashboardRoutingModule
      ),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[IsLoginGuard,IsActiveGuard],
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate:[IsLoginGuard,IsActiveGuard],
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
    canActivate:[IsLoginGuard,IsActiveGuard],
    loadChildren: () =>
      import('./components/book/book.module').then((m) => m.BookModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
