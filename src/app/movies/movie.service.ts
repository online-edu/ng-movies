import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';
import { Observable } from "rxjs/Rx";

import { Movie } from "./movie";

import { environment as env } from "../../environments/environment";
var OPTIONS: any = { 'Content-Type': 'application/json' };

@Injectable()
export class MovieService {
  constructor(private http: Http) { }

  getMovies(url: string = "movies.json"): Observable<Array<Movie>> {
    return this.http.get(`${env.api}${url}`)
      .map(res => res.json() as Movie || {})
      .catch(this.handleError);
  }

  getMovie(id: number): Observable<Movie> {
    return this.getMovies()
      .map(movies => movies.find(movie => movie.id == id));
  }

  handleError(error: Response | any) {
    let err = error.message || error;
    console.error('An error occured', err);
    return Observable.throw(err);
  }
}
