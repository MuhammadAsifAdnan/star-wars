import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { AppConfigService } from '../../../core/services/app.config.service';
import { Character } from './character.model';

export interface CharactersState extends EntityState<Character>, ActiveState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'characters', cache: {
    ttl: AppConfigService.appConfig.apiCacheTimeout
  },
})
export class CharactersStore extends EntityStore<CharactersState> {
  constructor() {
    super();
  }

}
