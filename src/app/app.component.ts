import { Component } from "@angular/core";

import { Router } from "@angular/router";
/**
 * App Component
 */
@Component({
  selector: "movie-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(router: Router) {
    console.log("Routes: ", JSON.stringify(router.config, undefined, 2));
  }
}
