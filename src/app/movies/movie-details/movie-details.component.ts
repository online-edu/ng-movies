import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

import { MovieService } from "../movie.service";
import { Movie } from "../movie";

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  error: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { console.log("inner") }

  getMovie(id: number) {
    if (id !== undefined) {
      this.movieService
        .getMovie(id)
        .subscribe(movie => this.movie = movie, error => this.error = error)
    }
    else {
      this.movie = new Movie();
    }
  }

  ngOnInit() {
    this.route.params
      .forEach((param: Params) =>
        this.getMovie(param['id']));
  }
}
