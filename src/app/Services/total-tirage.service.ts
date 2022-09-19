import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalTirageService {
  public host:string="http://localhost:8080";

  constructor(private httpClient: HttpClient) { }
  
  
  
  
  public affichage_detail_liste(page:number, size:number):Observable<any>{
    return this.httpClient.get(`${this.host}/tirages/AfficherTirage?page=${page}&size=${size}`);
  }
}


