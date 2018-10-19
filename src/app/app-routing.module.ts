import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "./guards/auth-guard.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
/**
 * App Routes
 */
const routes: Routes = [
  { path: "", component: DashboardComponent },
  {
    path: "login",
    loadChildren: "app/login/login.module#LoginModule"
  },
  {
    path: "admin",
    loadChildren: "app/admin/admin.module#AdminModule",
    canLoad: [AuthGuard]
  }
  // { path: '**', redirectTo: '/', pathMatch: 'full' },
];
/**
 * App Routing Module
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
