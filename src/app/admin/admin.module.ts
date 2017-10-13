import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { MovieComponent } from './movie/movie.component';
import { AuthGuard } from "../guards/auth-guard.service";
import { DeactivateGuard } from "../guards/deactivate-guard.service";

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
  ],
  declarations: [AdminComponent, MovieComponent],
  providers: [AuthGuard, DeactivateGuard]
})
export class AdminModule { }
