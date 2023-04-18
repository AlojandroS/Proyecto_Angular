import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { charactersData } from 'src/app/core/character.data';
import { CharacterI } from 'src/app/core/services/character/models/character.interface';

@Component({
  selector: 'app-edit-character',
  templateUrl: './edit-character.component.html',
  styleUrls: ['./edit-character.component.scss']
})
export class EditCharacterComponent {
  
  public character?: CharacterI

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      const characterId = params['id'];
      this.character = charactersData.find((character) => character.id === characterId)
    })
  }
}
