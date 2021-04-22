import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SharedModule } from '../../shared/shared.module';
import { MovieSummaryComponent } from './components/movie-summary/movie-summary.component';
import { OpeningCrawlTrimEllipsisPipe } from './pipes/opening-crawl-trim.pipe';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent,
    MovieSummaryComponent,
    OpeningCrawlTrimEllipsisPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    MoviesComponent,
    MovieDetailComponent
  ]
})
export class MoviesModule { }
