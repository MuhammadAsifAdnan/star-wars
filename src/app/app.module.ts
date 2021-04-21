import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from 'src/app/services/app.config.service';
import { AppConfigInitializer } from 'src/app/services/app.initializer.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HttpRequestInterceptor } from './interceptors/http.request.interceptor';
import { MoviesComponent } from './components/movies/movies.component';
import { CharactersComponent } from './components/characters/characters.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CharacterDetailsComponent } from './components/character-detail/character-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MoviesComponent,
    CharactersComponent,
    PageNotFoundComponent,
    MovieDetailComponent,
    CharacterDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
  ],
  providers: [
    AppConfigService,
    {
      provide: APP_INITIALIZER,
      useFactory: AppConfigInitializer,
      deps: [AppConfigService],
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
    { provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
