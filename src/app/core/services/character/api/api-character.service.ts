import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CharacterI} from '../models/character.interface';

const API_URL = 'https://proyecto-rick-y-morty-default-rtdb.firebaseio.com/results.json'


@Injectable({
  providedIn: 'root'
})
export class ApiCharacterService {

  constructor(
    private http: HttpClient
  ) { }


 
  public getApiCharacters(): Observable<CharacterI[]> {
    return this.http.get<CharacterI[]>('https://proyecto-rick-y-morty-default-rtdb.firebaseio.com/results.json')
    }

  public getApiCharacterById(id:number): Observable<CharacterI> {
    return this.http.get<CharacterI>(`${API_URL}/character/${id}`)
  }

  public createApiCharacter (body: CharacterI): Observable<CharacterI> {
    return this.http.post<CharacterI>(`${API_URL}/character`, body)
  }

  public editApiCharacter (body: CharacterI, id:number): Observable<CharacterI>{
    return this.http.put<CharacterI>(`${API_URL}/character/${id}`, body)
  }


public deleteApiCharacter(id: number): Observable<CharacterI> {
  return this.http.delete<any>(`${API_URL}/character/${id}`).pipe(
    map(response => response))
  }

}
