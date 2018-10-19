import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Movie } from "./movie";
import { environment as env } from "../../environments/environment";
/**
 * `MovieService` is available as an injectable class, with methods related to movies.
 */
@Injectable()
export class MovieService {
  /**
   * @constructor
   * @param {HttpClient} http an http client for network requests.
   */
  constructor(private http: HttpClient) {}
  /**
   * Fetches all the movies.
   * @param {string} url Optional, endpoint to fetch movies.
   * @return {Observable} an observable of Movie as an 'Array of Object' if no error otherwise throws an error.
   */
  getMovies(url: string = "movies.json"): Observable<Array<Movie>> {
    return this.http
      .get<Movie[]>(`${env.api}${url}`)
      .pipe(catchError(this.handleError));
  }
  /**
   * Fetch a movie by id.
   * @param {number} id movie id.
   * @return {Observable} an observable of Movie if no error otherwise throws an error.
   */
  getMovie(id: number): Observable<Movie> {
    return this.getMovies().pipe(
      map(
        movies => movies.find(movie => movie.id == id),
        catchError(this.handleError)
      )
    );
  }

  handleError(error: Response | any) {
    let err = error.message || error;
    console.error("An error occured", err);
    return of(err);
  }
}
