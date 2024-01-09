import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicePageComponent } from './main-pages/service-page/service-page.component';
import { ContactUsPageComponent } from './main-pages/contact-us-page/contact-us-page.component';

export const routes: Routes = [
    {path:"sign-up", component: SignupPageComponent},
    {path:"log-in", component: LoginPageComponent},
    {path:"home-page", component:HomePageComponent},
    {path:"service-page", component:ServicePageComponent},
    {path:"contact-us", component: ContactUsPageComponent}
];
