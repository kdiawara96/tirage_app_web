import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaListeDeTirageEtNombreTireComponent } from './la-liste-de-tirage-et-nombre-tire/la-liste-de-tirage-et-nombre-tire.component';
import { LaListeDeTirageComponent } from './la-liste-de-tirage/la-liste-de-tirage.component';
import { TirageComponent } from './tirage/tirage.component';
import { TotalListeComponent } from './total-liste/total-liste.component';

const routes: Routes = [
 // {path:"",component:TotalListeComponent}
 // {path:"",component:LaListeDeTirageComponent},
  //{path:"",component:LaListeDeTirageEtNombreTireComponent},
  {path:"",component:TirageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
