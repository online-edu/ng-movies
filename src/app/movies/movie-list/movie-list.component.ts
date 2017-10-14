import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { Movie } from "../movie";

@Component({
  selector: 'movie-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies: Movie[];

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  goToDetails(id: number) {
    this.router.navigate(['movies/details', id]);
  }

  ngOnInit() {
    this.movies = this.route.snapshot.data['movies'];
    
  }

}
