import { Component, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,Validators,FormControl,AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class LoginPageComponent {
  submitted=false

  emailRegex: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  passRegex:any ='^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$'; 
  
  myForm=new FormGroup({
    emailName:new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailRegex)]),
    passwordName:new FormControl("",[Validators.required,Validators.pattern(this.passRegex)])
  })
}
