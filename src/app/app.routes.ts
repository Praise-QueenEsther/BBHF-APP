import { Routes } from '@angular/router';
// import { RouterModule } from '@angular/router;
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ServicePageComponent } from './main-pages/service-page/service-page.component';
import { ContactUsPageComponent } from './main-pages/contact-us-page/contact-us-page.component';
import { ModalsComponent } from './main-pages/modals/modals.component';
import { BlogPageComponent } from './main-pages/blog-page/blog-page.component';
import { BlogDetailsComponent } from './main-pages/blog-details/blog-details.component';
import { AboutPageComponent } from './main-pages/about-page/about-page.component';
import { FootPageComponent } from './main-pages/foot-page/foot-page.component';
// import { ModalsComponent } from './modals/modals.component';
// import { PaginationsComponent } from './main-pages/paginations/paginations.component';
import { PaymentModalComponent } from './main-pages/payment-modal/payment-modal.component';
import { BottomSheetComponent } from './main-pages/bottom-sheet/bottom-sheet.component';
export const routes: Routes = [
    {path:"sign-up", component: SignupPageComponent},
    {path:"log-in", component: LoginPageComponent},
    {path:"home-page", component:HomePageComponent},
    {path:"service-page", component:ServicePageComponent},
    {path:"contact-us", component: ContactUsPageComponent},
    {path:"modals", component:ModalsComponent},
    {path:"blog-page", component:BlogPageComponent},
    {path:"blog-details", component:BlogDetailsComponent},
    {path:"about-page", component:AboutPageComponent},
    {path:"footer",component:FootPageComponent},
    {path:"payment", component: PaymentModalComponent},
    {path:"sheet", component:BottomSheetComponent}
    // {path:"footer",component:FootPageComponent}
];
