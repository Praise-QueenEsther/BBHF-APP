import { Component } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';
import { PaginationsComponent } from '../paginations/paginations.component';
// import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-page',
  standalone: true,
  imports: [NavbarComponent,CommonModule  ],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.css'
})
export class BlogPageComponent {

}


// import { Component } from '@angular/core';
// import { NgxPaginationModule } from 'ngx-pagination';

// @Component({
//   selector: 'app-blog-page',
//   templateUrl: './blog-page.component.html',
//   styleUrls: ['./blog-page.component.css'],
//   imports: [NgxPaginationModule] // Import only Angular modules here
// })
// export class BlogPageComponent {
//   // Your component logic goes here
// }
