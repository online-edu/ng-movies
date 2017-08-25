import { Component } from '@angular/core';

@Component({
  selector: 'movie-root',
  template: `<header>   
              <ul>
                  <li><a class="brand" routerLink="/">Movies</a></li>
                  <li><a routerLink="/dashboard">Dashboard</a></li>
                  <li><a routerLink="/movies">Movies</a></li>
              </ul>
             </header>
             <div class="container">
              <router-outlet></router-outlet>
             </div>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent { }
