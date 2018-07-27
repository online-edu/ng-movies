import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";

import { Movie } from "./movie";
import { MovieService } from "./movie.service";

@Injectable()
export class MovieResolver implements Resolve<Movie[]> {
  constructor(private movieService: MovieService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {
    //Subscribe and check movies are exist or not, accrodingly change route
    return this.movieService.getMovies();
  }
}
