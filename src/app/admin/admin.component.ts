import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'movie-admin',
    templateUrl: 'admin.component.html',
    styles:[`
        .admin-header{
            text-align:center;
            position:relative
        }        
        .admin-header .links a{
            color:#48a3c6;                        
        }
    `]
})

export class AdminComponent {

    constructor(private router: Router) { }

    logout() {
        localStorage.removeItem('loggedIn');
        this.router.navigate(['/']);
    }
}