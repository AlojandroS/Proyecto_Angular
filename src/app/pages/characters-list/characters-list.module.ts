import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { UppercaseDirective } from './directives/uppercase.directive';
import { CharacterListRoutingModule } from './character-list-routing.module';



@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterComponent,
    UppercaseDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    CharacterListRoutingModule
  ]
  
})
export class CharactersListModule { }
