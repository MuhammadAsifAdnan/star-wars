import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from 'src/app/modules/core/services/app.config.service';
import { createMovie, Movie } from './movie.model';
import { MoviesStore, } from './movies.store';
import { map } from 'rxjs/operators';
import { ApiResponseModel } from 'src/app/modules/core/models/api.response.model';

@Injectable({ providedIn: 'root' })
export class MoviesService {

  moviesPath = AppConfigService.appConfig.apiBasePath + AppConfigService.appConfig.moviesEndPoint
  constructor(protected moviesStore: MoviesStore, private http: HttpClient) {

  }

  getMovies() {
    return this.http.get<ApiResponseModel<Movie>>(this.moviesPath)
      .pipe(
        map((response: ApiResponseModel<Movie>) => response.results),
      ).subscribe((movies: Movie[]) => {
        this.moviesStore.set(movies.map((movie: Movie) => createMovie(movie)));
      });
  }

}
