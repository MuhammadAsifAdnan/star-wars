import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Movie } from '../../state/movie.model';

@Component({
  selector: 'app-movie-summary',
  templateUrl: './movie-summary.component.html',
  styleUrls: ['./movie-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieSummaryComponent implements OnInit {
  @Input() movie: Movie | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
