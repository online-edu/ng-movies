import { Component } from "@angular/core";
import { Router } from "@angular/router";
/**
 * Admin Component
 */
@Component({
  selector: "movie-admin",
  templateUrl: "admin.component.html",
  styles: [
    `
      .admin-header {
        text-align: center;
        position: relative;
      }
      .admin-header .links a {
        color: #48a3c6;
      }
    `
  ]
})
export class AdminComponent {
  /**
   * @constructor
   * @param {Router} router to navigate to diffrent views.
   */
  constructor(private router: Router) {}
  /**
   * Remove item from localsStorage and logout.
   */
  logout() {
    localStorage.removeItem("loggedIn");
    this.router.navigate(["/"]);
  }
}
