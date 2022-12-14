import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalListeComponent } from './total-liste/total-liste.component';
import { LaListeDeTirageComponent } from './Total_tirage/la-liste-de-tirage.component';
import { LaListeDeTirageEtNombreTireComponent } from './la-liste-de-tirage-et-nombre-tire/la-liste-de-tirage-et-nombre-tire.component';
import { TirageComponent } from './tirage/tirage.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SideComponent } from './side/side.component';
import {  MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule, MatNavList } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { TirageFaitSurListeComponent } from './tirage-fait-sur-liste/tirage-fait-sur-liste.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonneTirerComponent } from './personne-tirer/personne-tirer.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalListeComponent,
    LaListeDeTirageComponent,
    LaListeDeTirageEtNombreTireComponent,
    TirageComponent,
    NavBarComponent,
    HomeComponent,
    SideComponent,
    SideComponent,
    TirageFaitSurListeComponent,
    PersonCardComponent,
    PersonneTirerComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
