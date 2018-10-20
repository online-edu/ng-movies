import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  CanLoad,
  Route,
  CanActivateChild,
  Router
} from "@angular/router";
/**
 * `AuthGuard` is available as an injectable class to secure routes.
 */
@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  /**
   * @constructor
   * @param {Router} router for routing operation.
   */
  constructor(private router: Router) {}
  /**
   * Determine whether to allow loading route or not.
   * @param {Route} route
   * @return {boolean}
   */
  canLoad(route: Route) {
    let status = this.validateUser();
    if (!status) this.router.navigate(["/login"]);
    return status;
  }
  /**
   * Determine whether to activate route or not.
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @return {boolean}
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let status = this.validateUser();
    if (!status)
      this.router.navigate(["/login"], {
        queryParams: { returnUrl: atob(state.url) }
      });
    return status;
  }
  /**
   * Determine whether to activate child route or not.
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @return {boolean}
   */
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.canActivate(route, state);
  }
  /**
   * Validate user statically
   * @return {boolean}
   */
  validateUser() {
    return localStorage.getItem("loggedIn") == "true";
  }
}
