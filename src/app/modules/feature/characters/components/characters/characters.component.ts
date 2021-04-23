import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { AppConfigService } from 'src/app/modules/core/services/app.config.service';
import { MoviesQuery } from '../../../movies/state/movies.query';
import { CharactersQuery } from '../../state/characters.query';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  people$ = this.charactersQuery.selectAll();

  peopleSearchControl$ = new FormControl();

  constructor(private charactersQuery: CharactersQuery, private moviesQuery: MoviesQuery, private router: Router) { }

  ngOnInit(): void {
    !this.moviesQuery.getHasCache() && this.router.navigateByUrl('/movies');

    // TODO implement api search instead of client side search
    this.peopleSearchControl$.valueChanges.pipe(debounceTime(AppConfigService.appConfig.characterSearchDebounceInMS)).subscribe((searchTerm: string) => {
      this.people$ = this.charactersQuery.selectAll({
        filterBy: [
          ({ name }) => name?.toLocaleLowerCase().includes(searchTerm?.trim()?.toLocaleLowerCase())
        ]
      })
    })
  }

}
