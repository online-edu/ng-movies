import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

import { MovieService } from "../movie.service";
import { Movie } from "../movie";
/**
 * Movie Details Component
 */
@Component({
  selector: "movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.scss"]
})
export class MovieDetailsComponent implements OnInit {
  movie: Movie;
  error: any;
  /**
   * @constructor
   * @param {ActivatedRoute} route to get data from route.
   * @param {MovieService} movieService to perform movie operations.
   */
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  /**
   * Fetches a movied by id.
   * @param {number} id movie id.
   */
  getMovie(id: number) {
    if (id !== undefined) {
      this.movieService
        .getMovie(id)
        .subscribe(
          movie => (this.movie = movie),
          error => (this.error = error)
        );
    } else {
      this.movie = new Movie();
    }
  }
  /**
   * Component's lifecycle hook, called when component is loaded.
   */
  ngOnInit() {
    this.route.params.forEach((param: Params) => this.getMovie(param["id"]));
  }
}
