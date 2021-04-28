import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EntityActions } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Movie } from '../../state/movie.model';
import { MoviesQuery } from '../../state/movies.query';
import { MoviesService } from '../../state/movies.service';
import { MoviesStore } from '../../state/movies.store';

@Component({
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieDetailComponent implements OnInit {
  selectedMovie$: Observable<Movie | undefined> = this.moviesQuery.selectActiveMovieWithCharactersSummary();
  isLoading$ = this.moviesQuery.selectLoading();
  constructor(private moviesQuery: MoviesQuery, private router: Router, private activatedRoute: ActivatedRoute, private moviesService: MoviesService, private moviesStore: MoviesStore) {
  }

  ngOnInit(): void {
    if (this.moviesQuery.getHasCache()) {
      this.checkAndSetActiveMovie();
    } else {
      this.moviesService.getAllMovies();
      this.moviesQuery.selectEntityAction(EntityActions.Set).subscribe(() => {
        this.checkAndSetActiveMovie();
      })
    }
  }

  checkAndSetActiveMovie() {
    // checks if the movieId exists in movieStore and sets it as active, else redirect to movies list
    this.moviesQuery.hasEntity(this.movieId) ? this.moviesStore.setActive(this.movieId) : this.router.navigateByUrl('movies');
  }

  get movieId() {
    return this.activatedRoute.snapshot.params.id;
  }

}
