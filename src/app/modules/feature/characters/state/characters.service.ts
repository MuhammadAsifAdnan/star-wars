import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { ApiResponseModel } from 'src/app/modules/core/models/api.response.model';
import { AppConfigService } from 'src/app/modules/core/services/app.config.service';
import { Character, createCharacter } from './character.model';
import { CharactersStore } from './characters.store';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  charactersPath = AppConfigService.appConfig.apiBasePath + AppConfigService.appConfig.charactersEndPoint;
  constructor(private charactersStore: CharactersStore, private http: HttpClient) {
  }


  // getAllCharacters() {
  //   // TODO: handle next link
  //   return this.http.get<ApiResponseModel<Character>>(this.charactersPath)
  //     .pipe(
  //       map((response: ApiResponseModel<Character>) => response.results),
  //       tap((characters: Character[]) => {
  //         this.charactersStore.set(characters.map((character: Character) => createCharacter(character)));
  //       }),
  //     ).subscribe();
  // }

  getCharacter(id: string) {
    return this.http.get<Character>(this.charactersPath + '/' + id).pipe(
      tap((character: Character) => this.charactersStore.add([createCharacter(character)]))
    ).subscribe();
  }

}
