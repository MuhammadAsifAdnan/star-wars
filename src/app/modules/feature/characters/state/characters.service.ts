import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
// import { ApiResponseModel } from '../../../core/models/api.response.model';
import { AppConfigService } from '../../../core/services/app.config.service';
import { Character, createCharacter } from './character.model';
import { CharactersStore } from './characters.store';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  charactersPath = AppConfigService.appConfig.apiBasePath + AppConfigService.appConfig.charactersEndPoint;

  constructor(private charactersStore: CharactersStore, private http: HttpClient) {
  }

  getCharacter(id: string) {
    return this.http.get<Character>(this.charactersPath + '/' + id).pipe(
      tap((character: Character) => this.charactersStore.add([createCharacter(character)]))
    ).subscribe();
  }

}
