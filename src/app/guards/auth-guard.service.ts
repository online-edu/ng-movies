import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivate,
    CanActivateChild,    
    Router
} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private router: Router) { }

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