import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalListeService {

  public host:string="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }




  public affichage_detail_liste(page:number, size:number):Observable<any>{
    return this.httpClient.get(`${this.host}/liste/Afficher_detailListe_et_nombrePostulant_de_la_liste/?page=${page}&size=${size}`);
  }

  
  // public affichage(page:number, size:number){
  //   this.httpClient.get(`${this.host}/liste/liste_nbr_postulant/?page=${page}&size=${size}`);
  // }

//   public getNombre():Observable<Object>{
//     return this.httpClient.get(this.host+"/liste/nbr_postulant_sur_list");
// }


}
