import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-foot-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './foot-page.component.html',
  styleUrl: './foot-page.component.css'
})
export class FootPageComponent {
 overviewRoute:string='';
 featuresRoute:string='';
 pricingRoute:string='';
 careers:string='';
 helpRoute:string='';
 privacyRoute:string='';
}
