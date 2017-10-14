import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from "./admin.component";
import { MovieComponent } from "./movie/movie.component";
import { AuthGuard } from "../guards/auth-guard.service";
import { DeactivateGuard } from "../guards/deactivate-guard.service";

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],    
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        canDeactivate: [DeactivateGuard],
        children: [
          { path: 'movie/add', component: MovieComponent }
        ]
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }