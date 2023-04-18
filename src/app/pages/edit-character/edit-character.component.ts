import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterI } from 'src/app/core/services/character/models/character.interface';
import { CharacterService } from 'src/app/core/services/character/character.service';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent {
  
  public character?: CharacterI

  constructor(
    private activatedRoute: ActivatedRoute,
    private characterService: CharacterService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const characterId = params['id'];
      this.characterService.getCharacterById(characterId).subscribe((character) => {
        this.character = character;
      });
    });
  }
}