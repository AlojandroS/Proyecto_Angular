import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterI } from 'src/app/core/services/character/models/character.interface';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

constructor(
  private router: Router
) {}


@Input() public characterToShow?: CharacterI


 @Output() public onRemoveCharacter = new EventEmitter<void>();


 
 public removeCharacter(){
  this.onRemoveCharacter.emit();  
   }

public navigateToDetail(id:string): void {
  this.router.navigate(['character-detail', id]);
}

public navigateToEditCharacter(id:string): void {
  this.router.navigate(['edit-character', id]);
}
}