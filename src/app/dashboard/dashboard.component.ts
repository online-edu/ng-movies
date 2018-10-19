import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { MovieService } from "../movies/movie.service";
import { Movie } from "../movies/movie";
/**
 * Dashboard Component
 */
@Component({
  selector: "movie-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  topMovies: Movie[];
  latestMovies: Movie[];
  error: any;
  /**
   * @constructor
   * @param {Router} router to navigate to diffrent views.
   * @param {MovieService} movieService to perform movie operations.
   */
  constructor(private router: Router, private movieService: MovieService) {}
  /**
   * Component's lifecycle hook, called when component is loaded.
   */
  ngOnInit() {
    this.getMovies();
  }
  /**
   * Fetches all movies from `MovieService`
   */
  getMovies() {
    this.movieService.getMovies().subscribe(
      movies => {
        this.topMovies = movies.slice(5, 10);
        this.latestMovies = movies.slice(1, 5);
      },
      error => (this.error = error)
    );
  }
}
