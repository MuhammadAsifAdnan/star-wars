import { Injectable } from '@angular/core';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { AppConfigService } from '../../../core/services/app.config.service';
import { Movie } from './movie.model';

export interface MoviesState extends EntityState<Movie>, ActiveState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'movies', cache: {
    ttl: AppConfigService.appConfig.apiCacheTimeout
  },
})
export class MoviesStore extends EntityStore<MoviesState> {
  constructor() {
    super();
  }

}
