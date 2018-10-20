import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve } from "@angular/router";
import { Observable } from "rxjs";

import { Movie } from "./movie";
import { MovieService } from "./movie.service";
/**
 * `MovieResolver` is available as an injectable class to ensure that movies are
 * loaded before navigation.
 */
@Injectable()
export class MovieResolver implements Resolve<Movie[]> {
  /**
   * @constructor
   * @param {MovieService} movieService a movie service to make rest call.
   */
  constructor(private movieService: MovieService) {}
  /**
   * Resolves movies
   * @param {ActivatedRouteSnapshot} route To fetch route params or route related activities.
   * @return {Observable} an observable of Movie as an array of object.
   */
  resolve(route: ActivatedRouteSnapshot): Observable<Movie[]> {
    return this.movieService.getMovies();
  }
}
