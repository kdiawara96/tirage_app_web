import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StatistiqueCardComponent } from './statistique-card/statistique-card.component';
//import { TirageComponent } from './tirage/tirage.component';

const routes: Routes = [
    //{path: '', component: HomeComponent }
    {path: '', component: StatistiqueCardComponent }
  //{path: '', component: TirageComponent }
  //{path: '', component: StatistiqueCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
