import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicePageComponent } from './main-pages/service-page/service-page.component';
import { ContactUsPageComponent } from './main-pages/contact-us-page/contact-us-page.component';
import { ModalsComponent } from './main-pages/modals/modals.component';
import { BlogPageComponent } from './main-pages/blog-page/blog-page.component';
import { BlogDetailsComponent } from './main-pages/blog-details/blog-details.component';

export const routes: Routes = [
    {path:"sign-up", component: SignupPageComponent},
    {path:"log-in", component: LoginPageComponent},
    {path:"home-page", component:HomePageComponent},
    {path:"service-page", component:ServicePageComponent},
    {path:"contact-us", component: ContactUsPageComponent},
    {path:"modals", component:ModalsComponent},
    {path:"blog-page", component:BlogPageComponent},
    {path:"blog-details", component:BlogDetailsComponent}

];
