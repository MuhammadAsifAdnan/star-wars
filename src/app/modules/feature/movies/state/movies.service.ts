import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../../../core/services/app.config.service';
import { from } from 'rxjs';
import { distinct, map, mergeMap, tap } from 'rxjs/operators';
import { ApiResponseModel } from '../../../core/models/api.response.model';
import { Character, createCharacter } from '../../characters/state/character.model';
import { createMovie, Movie } from './movie.model';
import { MoviesStore } from './movies.store';
import { CharactersStore } from '../../characters/state/characters.store';

@Injectable({ providedIn: 'root' })
export class MoviesService {
  moviesPath = AppConfigService.appConfig.apiBasePath + AppConfigService.appConfig.moviesEndPoint;

  constructor(private http: HttpClient, protected moviesStore: MoviesStore, private charactersStore: CharactersStore) {
  }

  getAllMovies() { // TODO find better way to get movies and characters!
    return this.http.get<ApiResponseModel<Movie>>(this.moviesPath)
      .pipe(
        mergeMap((response: ApiResponseModel<Movie>) => {
          this.moviesStore.set(response.results.map((movie: Movie) => createMovie(movie)));
          return from(response.results)
        }),
        mergeMap((movie: Movie) => from(movie.characters)),
        distinct(), // filter out duplicate characters
        mergeMap((characterUrl: string) => this.http.get<Character>(characterUrl)),
        map((character: Character) => {
          const modifiedCharacter = createCharacter(character);
          this.charactersStore.add([modifiedCharacter]);
          return modifiedCharacter;
        })
      ).subscribe();
  }

  getMovie(id: string) {
    return this.http.get<Movie>(this.moviesPath + '/' + id).pipe(
      tap((movie: Movie) => this.moviesStore.add([createMovie(movie)]))
      // TODO handle fetching characters
    ).subscribe();
  }


}
