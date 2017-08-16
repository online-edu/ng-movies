import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { MovieService } from "../movies/movie.service";
import { Movie } from "../movies/movie";

@Component({
  selector: 'movie-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  topMovies: Movie[];
  latestMovies: Movie[];
  error: any;

  constructor(
    private router: Router,
    private movieService: MovieService) {
  }

  ngOnInit() {
    this.getTopMovies()
  }


  getTopMovies() {
    this.movieService
      .getMovies()
      .subscribe(movies => {
        this.topMovies = movies.slice(5, 10);
        this.latestMovies = movies.slice(1, 5);
      }, error => this.error = error)
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }


}
