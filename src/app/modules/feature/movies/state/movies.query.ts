import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MoviesStore, MoviesState } from './movies.store';
import { combineQueries } from '@datorama/akita';
import { CharactersQuery } from '../../characters/state/characters.query';
import { map } from 'rxjs/operators';
import { Movie } from './movie.model';

@Injectable({ providedIn: 'root' })
export class MoviesQuery extends QueryEntity<MoviesState> {

  constructor(protected store: MoviesStore, private characterQuery: CharactersQuery) {
    super(store);
  }

  selectActiveMovieWithCharactersSummary() {
    return combineQueries([this.selectActive(), this.characterQuery.selectAll({ asObject: true })])
      .pipe(
        map(([movie, characters]) => {
          return {
            ...movie, characterSummary: movie?.characterIds
              ?.map(characterId => ({ name: characters[characterId]?.name, id: characters[characterId]?.id }))
          } as Movie;
        })
      );
  }

}
