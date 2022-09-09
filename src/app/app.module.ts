import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TotalListeComponent } from './total-liste/total-liste.component';
import { LaListeDeTirageComponent } from './la-liste-de-tirage/la-liste-de-tirage.component';
import { LaListeDeTirageEtNombreTireComponent } from './la-liste-de-tirage-et-nombre-tire/la-liste-de-tirage-et-nombre-tire.component';
import { TirageComponent } from './tirage/tirage.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalListeComponent,
    LaListeDeTirageComponent,
    LaListeDeTirageEtNombreTireComponent,
    TirageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
