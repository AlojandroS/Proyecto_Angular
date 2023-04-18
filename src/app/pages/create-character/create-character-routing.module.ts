import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCharacterComponent } from './create-character.component';

const routes: Routes = [
  { 
   path:'',
  pathMatch:'full',
  component: CreateCharacterComponent
 
 }
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCharacterRoutingModule { }
