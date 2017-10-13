import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MovieRoutingModule } from "./movie-routing.module";
import { MoviesComponent } from "./movies.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from "./movie.service";
import { MovieResolver } from "./movie-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        MovieRoutingModule
    ],
    declarations: [
        MoviesComponent,
        MovieDetailsComponent,
        MovieListComponent
    ],
    providers: [MovieService, MovieResolver]

})
export class MovieModule { }

