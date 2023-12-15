import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

export const routes: Routes = [
    {path:"sign-up", component: SignupPageComponent},
    {path:"log-in", component: LoginPageComponent}
];
