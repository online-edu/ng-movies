import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent {
    user = {
        id: 'Liza Bennett',
        password: 'Lizzy'
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    login() {
        if (this.user.id !== "" && this.user.password !== "") {
            localStorage.setItem("loggedIn", "true");
            let url = btoa(this.route.snapshot.queryParams['returnUrl']) || '/admin';            
            this.router.navigate([url])
        }
    }
}