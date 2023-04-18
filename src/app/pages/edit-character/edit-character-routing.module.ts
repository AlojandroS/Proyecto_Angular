import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditCharacterComponent } from './edit-character.component';

const routes: Routes = [
  { 
    path:'',
   pathMatch:'full',
   component: EditCharacterComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditCharacterRoutingModule { }
