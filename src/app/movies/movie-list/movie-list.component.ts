import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { Movie } from "../movie";
/**
 * Movie List Component
 */
@Component({
  selector: "movie-movie-list",
  templateUrl: "./movie-list.component.html",
  styleUrls: ["./movie-list.component.scss"]
})
export class MovieListComponent implements OnInit {
  movies: Movie[];
  /**
   * @constructor
   * @param {Router} router to navigate to diffrent views.
   * @param {ActivatedRoute} route to get data from route.
   */
  constructor(private router: Router, private route: ActivatedRoute) {}
  /**
   * Component's lifecycle hook, called when component is loaded.
   */
  ngOnInit() {
    this.movies = this.route.snapshot.data["movies"];
  }
  /**
   * Redirects to the movie detail view.
   * @param {number} id movie id.
   */
  goToDetails(id: number): void {
    this.router.navigate(["movies/details", id]);
  }
}
