import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineQueries } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MoviesQuery } from '../../../movies/state/movies.query';
import { Character } from '../../state/character.model';
import { CharactersQuery } from '../../state/characters.query';
import { CharactersStore } from '../../state/characters.store';

@Component({
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailsComponent implements OnInit {

  selectedCharacter$: Observable<Character | undefined> = this.selectActiveCharacterWithMoviesSummary();
  constructor(private charactersQuery: CharactersQuery, private router: Router, private activatedRoute: ActivatedRoute, private charactersStore: CharactersStore, private moviesQuery: MoviesQuery) { }

  ngOnInit(): void {
    !this.moviesQuery.getHasCache() && this.router.navigateByUrl('/movies');
    this.checkAndSetActiveCharacter();
  }

  checkAndSetActiveCharacter() {
    // checks if the movieId exists in movieStore and sets it as active, else redirect to movies list
    this.charactersQuery.hasEntity(this.characterId) ? this.charactersStore.setActive(this.characterId) : this.router.navigateByUrl('characters');
  }
  get characterId() {
    return this.activatedRoute.snapshot.params.id;
  }

  selectActiveCharacterWithMoviesSummary() {
    return combineQueries([this.charactersQuery.selectActive(), this.moviesQuery.selectAll({ asObject: true })])
      .pipe(
        map(([character, movies]) => {
          return {
            ...character, filmsSummary: character?.filmIds
              ?.map((filmId: string) => ({ title: movies[filmId]?.title, id: movies[filmId]?.id }))
          } as Character;
        })
      );
  }

}
