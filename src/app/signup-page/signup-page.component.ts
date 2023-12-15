import { Component, ViewEncapsulation } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup,Validators,FormControl,AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { stateOptions } from '../data';
import { SelectItem } from 'primeng/api';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,DropdownModule],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SignupPageComponent {

  stateOptions:SelectItem[] =stateOptions ;

  submitted=false



  emailRegex: any = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
 
  
  myForm=new FormGroup({
    firstName:new FormControl("",[Validators.required]),
    lastName:new FormControl("",[Validators.required]),
    emailName:new FormControl("",[Validators.required,Validators.email,Validators.pattern(this.emailRegex)]),
    phoneNumber:new FormControl("",[Validators.required]),
    stateSelect:new FormControl("",[Validators.required])
    
  })
}
