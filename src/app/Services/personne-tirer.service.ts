import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonneTirerService {

  public host:string="http://localhost:8080";

  constructor(private httpClient: HttpClient){}

   public afficher_les_personnes_tirer(page:number, size:number, libelle:string):Observable<any>{
    return this.httpClient.get(`${this.host}/postulantsTirerParLibelle/?page=${page}&size=${size}`);
  }
}
