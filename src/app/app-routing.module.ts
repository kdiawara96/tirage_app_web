import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LaListeDeTirageEtNombreTireComponent } from './la-liste-de-tirage-et-nombre-tire/la-liste-de-tirage-et-nombre-tire.component';

import { LaListeDeTirageComponent } from './Total_tirage/la-liste-de-tirage.component';

import { PersonCardComponent } from './person-card/person-card.component';
import { TirageComponent } from './tirage/tirage.component';
import { TotalListeComponent } from './total-liste/total-liste.component';
import { TirageFaitSurListeComponent } from './tirage-fait-sur-liste/tirage-fait-sur-liste.component';


const routes: Routes = [
  {path:"liste_postulants_tirage/:id", component: PersonCardComponent},
  {path:"tirage_fait_sur_liste/:id", component: TirageFaitSurListeComponent},
  {path:"total_liste",component:TotalListeComponent},
  {path:"liste_tirage",component:LaListeDeTirageComponent},
  {path:"liste_tirage_nombre_tirer",component:LaListeDeTirageEtNombreTireComponent},
  {path:"tirage",component:TirageComponent},
  {path:"home", component: HomeComponent},
  {path:"person", component: PersonCardComponent},
  {path:"", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
