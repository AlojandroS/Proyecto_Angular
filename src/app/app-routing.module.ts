import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CharacterListComponent } from './pages/characters-list/character-list.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
    },
   {
    path: 'character-list',
    loadChildren: () => import('./pages/characters-list/characters-list.module').then(m=> m.CharactersListModule)
    },
    
    {
      path: 'character-detail/:id',
    loadChildren: () => import('./pages/character-detail/character-detail.module').then(m=> m.CharacterDetailModule)
     },

  {
    path: 'home',
    pathMatch: "full",
    loadChildren: () => import('./pages/home/home.module').then(m=> m.HomeModule)
   
   },
   {
   path: 'about',
   pathMatch: "full",
   loadChildren: () => import('./pages/about/about.module').then(m=> m.AboutModule)
  
  },
   {
   path: 'create-character',
   pathMatch: "full",
   loadChildren: () => import('./pages/create-character/create-character.module').then(m=> m.CreateCharacterModule)
  
  },

  {
    path: 'edit-character/:id',
  loadChildren: () => import('./pages/edit-character/edit-character.module').then(m=> m.EditCharacterModule)
   },

   {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then(m=> m.NotFoundModule)
    }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
