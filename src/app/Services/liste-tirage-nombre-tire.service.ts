import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LIsteTirageNombreTireService {


  public host:string="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }


  public getdetailListe(page:number, size:number){
    return this.httpClient.get(this.host+"/liste/detailleListe?page="+page+"&size="+size);
  }
}
