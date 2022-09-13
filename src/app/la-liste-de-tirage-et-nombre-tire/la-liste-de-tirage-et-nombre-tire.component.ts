import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-liste-de-tirage-et-nombre-tire',
  templateUrl: './la-liste-de-tirage-et-nombre-tire.component.html',
  styleUrls: ['./la-liste-de-tirage-et-nombre-tire.component.css']
})
export class LaListeDeTirageEtNombreTireComponent implements OnInit {

  public detaillListe: any= [];

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get("http://localhost:8080/liste/detailleListe")
    .subscribe((data)=>{
      console.log(data)
      this.detaillListe=data
      
    })

  }

}
