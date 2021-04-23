import { Injectable } from '@angular/core';
import { combineQueries, QueryEntity } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { MoviesQuery } from '../../movies/state/movies.query';
import { Character } from './character.model';
import { CharactersStore, CharactersState } from './characters.store';

@Injectable({ providedIn: 'root' })
export class CharactersQuery extends QueryEntity<CharactersState> {

  constructor(protected store: CharactersStore) {
    super(store);
  }



}
