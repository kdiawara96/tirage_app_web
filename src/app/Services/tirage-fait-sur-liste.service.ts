import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TirageFaitSurListeService {


  public host:string="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  public getTiragedetail_par_Liste(page:number, size:number, id: number){

    // http://localhost:8080/tirages/detailleTirageParListe/1?page=0&size=1

    return this.httpClient.get(`${this.host}/tirages/detailleTirageParListe/${id}?page=${page}&size=${size}`);
    
  }
}
