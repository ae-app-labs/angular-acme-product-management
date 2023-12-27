import { Component } from '@angular/core';

/*
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
*/

@Component({
  selector: 'pm-root',
  template: `
  <div class="container">
  <nav class="navbar navbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{pageTitle}}</a>
    <ul class="nav nav-pills">
      <li><a class="nav-link" routerLink=''>Home</a></li>
      <li><a class="nav-link" routerLink='products'>Product List</a></li>
    </ul>
  </nav>
  <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle:string = 'Acme Product Management';
}
