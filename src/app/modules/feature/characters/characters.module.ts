import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailsComponent } from './components/character-detail/character-detail.component';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CharactersComponent,
    CharacterDetailsComponent
  ]
})
export class CharactersModule { }
