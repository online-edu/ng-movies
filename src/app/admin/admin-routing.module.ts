import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from "./movie/movie.component";
import { AuthGuard } from "../auth/auth-guard.service";

const adminRoutes: Routes = [
  {
    path: 'movie/add',
    component: MovieComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }