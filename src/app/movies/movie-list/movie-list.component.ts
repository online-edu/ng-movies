import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { MovieService } from "../movie.service";
import { Movie } from "../movie";

@Component({
  selector: 'movie-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  error: any;

  constructor(
    private router: Router,
    private movieService: MovieService) { }

  getMovies() {
    this.movieService
      .getMovies('movies.json')
      .subscribe(
      movies => this.movies = movies,
      error => this.error = error
      )
  }

  goToDetails(id: number) {
    this.router.navigate(['movies/details', id]);
  }

  ngOnInit() {
    this.getMovies();
  }

}
