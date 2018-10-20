import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { MovieAddComponent } from "./movie-add/movie-add.component";
import { DeactivateGuard } from "../guards/deactivate-guard.service";
/**
 * Admin Module
 */
@NgModule({
  imports: [AdminRoutingModule, CommonModule],
  declarations: [AdminComponent, MovieAddComponent],
  providers: [DeactivateGuard]
})
export class AdminModule {}
