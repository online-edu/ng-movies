import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, map } from "rxjs/operators";

import { Movie } from "./movie";

import { environment as env } from "../../environments/environment";

@Injectable()
export class MovieService {
  constructor(private http: HttpClient) {}

  getMovies(url: string = "movies.json"): Observable<Array<Movie>> {
    return this.http
      .get<Movie[]>(`${env.api}${url}`)
      .pipe(catchError(this.handleError));
  }

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
    return Observable.throw(err);
  }
}
