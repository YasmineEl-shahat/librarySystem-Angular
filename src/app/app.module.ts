import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { HttpClientModule } from '@angular/common/http';
import { DashboardLayoutComponent } from './components/dashboard/dashboard-layout/dashboard-layout.component';
import { DashSidebarComponent } from './components/dashboard/dashboard-layout/dash-sidebar/dash-sidebar.component';
import { DashNavbarComponent } from './components/dashboard/dashboard-layout/dash-navbar/dash-navbar.component';
import { DashFooterComponent } from './components/dashboard/dashboard-layout/dash-footer/dash-footer.component';
import { MemberModule } from './components/dashboard/member/member.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    DashboardLayoutComponent,
    DashSidebarComponent,
    DashNavbarComponent,
    DashFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MemberModule
  ],
  exports: [MenubarModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
