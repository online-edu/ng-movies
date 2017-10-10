import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MoviesComponent } from "./movies.component";
import { MovieListComponent } from "./movie-list/movie-list.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const movieRoute: Routes = [
    {
        path: 'movies',
        component: MoviesComponent,
        children: [
            { path: '', component: MovieListComponent },
            { path: 'details/:id', component: MovieDetailsComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(movieRoute)],
    exports: [RouterModule]
})
export class MovieRoutingModule { }