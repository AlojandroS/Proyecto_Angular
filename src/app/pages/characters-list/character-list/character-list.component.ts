import { Component, OnInit } from '@angular/core';

import { CharacterService } from 'src/app/core/services/character/character.service';
import { CharacterI } from 'src/app/core/services/character/models/character.interface';



@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  public characters?: CharacterI[];

  public originalCharacters?: CharacterI[];

  public inputValue: string = "";

  constructor(
    private charactersService: CharacterService,
  
  ) {}

  public ngOnInit(): void {
   this.getCharacters()
  }
  

  public removeCharacter(id: string) {
    this.charactersService.deleteCharacter(id).subscribe(() => this.getCharacters());
  }
       

  public filterCharacters(){
    this.characters = this.originalCharacters?.filter(character => {
      return character.name.toLowerCase().includes(this.inputValue.toLocaleLowerCase())
  });
}

private getCharacters() {
  this.charactersService.getCharacters().subscribe((characters: CharacterI[]) => {
    this.characters = characters;
  });
}

}