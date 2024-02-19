import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';  // Import ReactiveFormsModule

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu'
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { ServicePageComponent } from './main-pages/service-page/service-page.component';
import { ContactUsPageComponent } from './main-pages/contact-us-page/contact-us-page.component';
import { ModalsComponent } from './main-pages/modals/modals.component';
import { BlogPageComponent } from './main-pages/blog-page/blog-page.component';
import { PaginationsComponent } from './main-pages/paginations/paginations.component';
import { BlogDetailsComponent } from './main-pages/blog-details/blog-details.component';
// import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    SignupPageComponent,
    LoginPageComponent,
    NavbarComponent,
    HomePageComponent,
    ServicePageComponent,
    ContactUsPageComponent,
    ModalsComponent,
    BlogPageComponent,
    PaginationsComponent,
    BlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule, 
    CommonModule,
    InputTextModule,
    DropdownModule,
    MenubarModule,
    MenuModule, 
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
