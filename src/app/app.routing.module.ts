import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './modules/feature/movies/components/movie-detail/movie-detail.component';
import { MoviesComponent } from './modules/feature/movies/components/movies/movies.component';

import { CharacterDetailsComponent } from './modules/feature/characters/components/character-detail/character-detail.component';
import { CharactersComponent } from './modules/feature/characters/components/characters/characters.component';

import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MovieDetailComponent,
  },
  {
    path: 'characters',
    component: CharactersComponent
  },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'movies',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
