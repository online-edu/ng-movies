import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'movie-admin',
    templateUrl: 'admin.component.html'
})

export class AdminComponent {

    constructor(private router: Router) { }

    logout() {
        localStorage.removeItem('loggedIn');
        this.router.navigate(['/']);
    }
}