import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonInfoService {

  public host:string="http://localhost:8080";

  constructor(private httpClient: HttpClient) {}

  public PostulantTirerParListe(page:number, size:number, id: number){
    return this.httpClient.get(`${this.host}/postulantTirer/postulantsTirer/${id}?page=${page}&size=${size}`);
  }


  
  public PostulantsTirer(page:number, size:number, id: number){
    return this.httpClient.get(`${this.host}/postulantTirer/postulantsTirer/${id}?page=${page}&size=${size}`);
  }
  
}
