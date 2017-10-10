import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from "./admin-routing.module";
import { MovieComponent } from './movie/movie.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CommonModule,
  ],
  declarations: [MovieComponent]
})
export class AdminModule { }
