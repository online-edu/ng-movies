import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate,
    CanLoad,
    Route,
    CanActivateChild,
    Router
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {

    constructor(private router: Router) { }

    canLoad(route: Route) {
        let status = this.validateUser();
        if (!status)
            this.router.navigate(['/login']);
        return status;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let status = this.validateUser();
        if (!status)
            this.router.navigate(['/login'], { queryParams: { returnUrl: atob(state.url) } });
        return status;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.canActivate(route, state);
    }

    validateUser() {
        return localStorage.getItem("loggedIn") == 'true'
    }

}