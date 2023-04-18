import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditCharacterRoutingModule } from './edit-character-routing.module';
import { EditCharacterComponent } from './edit-character.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterI } from 'src/app/core/services/character/models/character.interface';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from 'src/app/core/services/character/character.service';



@NgModule({
  declarations: [
    EditCharacterComponent
  ],
  imports: [
    CommonModule,
    EditCharacterRoutingModule,
    SharedModule
  ]
})
export class EditCharacterModule {

  public character?: CharacterI;

  constructor(
    private activatedRoute: ActivatedRoute,
    private charactersService: CharacterService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const characterId = params['id'];
      this.charactersService
        .getCharacterById(characterId)
        .subscribe((character) => {
          this.character = character;
        });
    });
  }
}

