import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LaListeDeTirageEtNombreTireComponent } from './la-liste-de-tirage-et-nombre-tire/la-liste-de-tirage-et-nombre-tire.component';
import { LaListeDeTirageComponent } from './la-liste-de-tirage/la-liste-de-tirage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TirageComponent } from './tirage/tirage.component';
import { TotalListeComponent } from './total-liste/total-liste.component';


const routes: Routes = [

  {path:"total_liste",component:TotalListeComponent},
  {path:"liste_tirage",component:LaListeDeTirageComponent},
  {path:"liste_tirage_nombre_tirer",component:LaListeDeTirageEtNombreTireComponent},
  {path:"tirage",component:TirageComponent},
  {path:"home", component: HomeComponent},
  {path:"", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
