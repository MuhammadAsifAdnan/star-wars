import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { environment } from '../environments/environment';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './modules/core/core.module';
import { MoviesModule } from './modules/feature/movies/movies.module';
import { CharactersModule } from './modules/feature/characters/characters.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AkitaNgRouterStoreModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    CoreModule,
    MoviesModule,
    CharactersModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
