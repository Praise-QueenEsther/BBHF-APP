import { Component,HostBinding } from '@angular/core';
// import { MenubarModule } from 'primeng/menubar';
// import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isResponsive: boolean = false;

  toggleResponsive() {
    this.isResponsive = !this.isResponsive;
  }
  // isResponsive: boolean = false;

  toggleMenu() {
    this.isResponsive = !this.isResponsive;
  }

}
