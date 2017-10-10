import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanDeactivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor() { }

    canActivate() {
        return localStorage.getItem("loggedIn") == 'true';
    }

    canActivateChild() {
        return this.canActivate();
    }
    
}