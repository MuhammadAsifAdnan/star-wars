import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesQuery } from '../../../movies/state/movies.query';
import { CharactersQuery } from '../../state/characters.query';
import { CharactersService } from '../../state/characters.service';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  people$ = this.charactersQuery.selectAll();

  constructor(private charactersQuery: CharactersQuery, private moviesQuery: MoviesQuery, private router: Router) { }

  ngOnInit(): void {
    !this.moviesQuery.getHasCache() && this.router.navigateByUrl('/movies');
  }

}
