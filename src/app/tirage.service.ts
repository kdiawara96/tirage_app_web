import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tirage } from './tirage';
@Injectable({
  providedIn: 'root'
})
export class TirageService {


  private baseUrl = "http:localhost:8080/tirages/totaleTirage";
  private baseUrlT = "http://localhost:8080/tirages/inserTirage/"; 
  private baseUrlIm ="http://localhost:8080/postulants/add";  
  constructor(private http: HttpClient) { }

  getTirages(): Observable<Tirage[]>{
    return this.http.get<Tirage[]>(`${this.baseUrl}`);
  }

  postTirages(tirage: Tirage,libelleliste: string): Observable<Object>{
    return this.http.post(`${this.baseUrlT}/${libelleliste}`,tirage);
  }
  addListe(libelle:string,file:any):Observable<void>{

    let data =new FormData();
    data.append("file",file)
    return this.http.post<void>(`${this.baseUrlIm}/${libelle}`,data)
  }
}