import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "movie-root",
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
                <div class="git-buttons">
                  <a class="github-button" href="https://github.com/online-edu/ng-movies/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork online-edu/ng-movies on GitHub">Fork</a>                  
                  <a class="github-button" href="https://github.com/online-edu/ng-movies/subscription" data-icon="octicon-eye" data-size="large" aria-label="Watch online-edu/ng-movies on GitHub">Watch</a>                  
                  <a class="github-button" href="https://github.com/online-edu/ng-movies" data-icon="octicon-star" data-size="large" aria-label="Star online-edu/ng-movies on GitHub">Star</a>
                </div>
             </footer>`,
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(router: Router) {
    console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
