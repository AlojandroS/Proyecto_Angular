import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharacterI} from '../models/character.interface';

const API_URL = 'https://rickandmortyapi.com/api'


@Injectable({
  providedIn: 'root'
})
export class ApiCharacterService {

  constructor(
    private http: HttpClient
  ) { }


 
  public getApiCharacters(): Observable<CharacterI[]> {
    return this.http.get<any>(`${API_URL}/character/`).pipe(
      map(response => response.results)
    );
  }

  public getApiCharacterById(id:string): Observable<CharacterI> {
    return this.http.get<CharacterI>(`${API_URL}/character/${id}`)
  }

  public createApiCharacter (body: CharacterI): Observable<CharacterI> {
    return this.http.post<CharacterI>(`${API_URL}/character`, body)
  }

  public editApiCharacter (body: CharacterI, id:string): Observable<CharacterI>{
    return this.http.put<CharacterI>(`${API_URL}/character/${id}`, body)
  }

  public deleteApicharacter(id:string): Observable<CharacterI>{
    return this.http.delete<CharacterI>(`${API_URL}/character/${id}`)
  }
  
}

  
