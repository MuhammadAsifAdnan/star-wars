import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../../state/movie.model';
import { MoviesQuery } from '../../state/movies.query';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  selectedMovie$: Observable<Movie | undefined>;
  constructor(private moviesQuery: MoviesQuery, private router: Router, private activatedRoute: ActivatedRoute,) {
    !this.moviesQuery.hasEntity(this.movieId) && this.router.navigateByUrl('movies'); // if movie entity not found in store, redirect to movies list page
    this.selectedMovie$ = this.moviesQuery.selectEntity(this.movieId);
  }

  ngOnInit(): void {
  }

  get movieId() {
    return this.activatedRoute.snapshot.params.id;
  }

}
