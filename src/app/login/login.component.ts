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
            let url = this.route.snapshot.queryParams['returnUrl'];
            url = url != undefined ? btoa(url) : '/admin'            
            this.router.navigate([url])
        }
    }
}