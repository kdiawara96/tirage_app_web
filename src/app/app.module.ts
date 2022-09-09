import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TotalListeComponent } from './total-liste/total-liste.component';
import { PersonCardComponent } from './person-card/person-card.component';
import { StatistiqueCardComponent } from './statistique-card/statistique-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SideComponent } from './side/side.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
=======
import { TotalListeComponent } from './total-liste/total-liste.component';
import { LaListeDeTirageComponent } from './la-liste-de-tirage/la-liste-de-tirage.component';
import { LaListeDeTirageEtNombreTireComponent } from './la-liste-de-tirage-et-nombre-tire/la-liste-de-tirage-et-nombre-tire.component';
import { TirageComponent } from './tirage/tirage.component';
>>>>>>> a7a8750 (create a compenent la liste de tirage, ...)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    HomeComponent,
    NavBarComponent,
    TotalListeComponent,
    PersonCardComponent,
    StatistiqueCardComponent,
    SideComponent
=======
    TotalListeComponent,
    LaListeDeTirageComponent,
    LaListeDeTirageEtNombreTireComponent,
    TirageComponent
>>>>>>> a7a8750 (create a compenent la liste de tirage, ...)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
