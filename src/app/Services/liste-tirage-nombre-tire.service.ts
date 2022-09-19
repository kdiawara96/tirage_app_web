import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LIsteTirageNombreTireService {


  public host:string="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }
  



  public getdetailListe(page:number, size:number){  
    return this.httpClient.get(`${this.host}/liste/liste_detail_et_nbr_Tirage_Fait_Sur_La_Liste?page=${page}&size=${size}`);
  }

//   public getNombre():Observable<Object>{
//     return this.httpClient.get(this.host+"/liste/nombreTirageuriste");
// }

}