import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    { path: '', component: DashboardComponent },
    {
        path: 'login',
        loadChildren: 'app/login/login.module#LoginModule'
    }
    // { path: '**', redirectTo: '/', pathMatch: 'full' },

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }