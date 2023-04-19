import { Injectable } from '@angular/core';
import { ApiCharacterService } from './api/api-character.service';
import { Observable, filter, tap } from 'rxjs';
import { CharacterI } from './models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(
    private apiCharactersService: ApiCharacterService
  ) { }

  public getCharacters(): Observable<CharacterI[]> {
    return this.apiCharactersService.getApiCharacters().pipe(
      filter((characters: CharacterI[]) => {
        return characters.length > 0;
      }),
      tap((characters: CharacterI[]) => {
        console.log(characters);
      })
    );
  }

  public getCharacterById(id:string): Observable<CharacterI> {
    return this.apiCharactersService.getApiCharacterById(id);
  }

  public createCharacter(body: CharacterI): Observable<CharacterI> {
    return this.apiCharactersService.createApiCharacter(body);
  }

  public editCharacter(body: CharacterI, id:string): Observable<CharacterI> {
    return this.apiCharactersService.editApiCharacter(body, id);
  }

  public deleteCharacter(id:string): Observable<CharacterI> {
    return this.apiCharactersService.deleteApicharacter(id);
  }
}














