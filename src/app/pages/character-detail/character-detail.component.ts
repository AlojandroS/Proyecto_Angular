import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { charactersData } from 'src/app/core/character.data';
import { CharacterService } from 'src/app/core/services/character/character.service';
import { CharacterI } from 'src/app/core/services/character/models/character.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent {
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
