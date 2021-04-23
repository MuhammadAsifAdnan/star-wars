import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailsComponent } from './components/character-detail/character-detail.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CharactersComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CharactersComponent,
    CharacterDetailsComponent
  ]
})
export class CharactersModule { }
