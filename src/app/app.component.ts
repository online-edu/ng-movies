import { Component } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'movie-root',
  template: `<header>   
              <ul>
                  <li><a class="brand" routerLink="/">Movies</a></li>
                  <li><a routerLink="/">Home</a></li>
                  <li routerLinkActive="active"><a routerLink="/movies">Movies</a></li>
                  <li routerLinkActive="active"><a routerLink="/login" >Login</a></li>                                                                  
              </ul>              
             </header>
             <div class="container">
              <router-outlet></router-outlet>
             </div>
             <footer>
                <img src="./favicon.ico" />
             </footer>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}