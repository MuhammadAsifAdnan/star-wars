import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MoviesQuery } from '../../state/movies.query';
import { MoviesService } from '../../state/movies.service';

@Component({
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviesComponent implements OnInit {
  movies$ = this.moviesQuery.selectAll();
  isLoading$ = this.moviesQuery.selectLoading();

  constructor(private moviesQuery: MoviesQuery, private moviesService: MoviesService) { }

  ngOnInit(): void {
    !this.moviesQuery.getHasCache() && this.moviesService.getAllMovies();
  }

}
