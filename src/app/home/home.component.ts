import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public total_listes_tire: any =undefined;
  
  public tirage_effectuer: any =undefined;
  
  public postulants: any =undefined;

  public detaillListe: any = undefined;
  

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {

    this.httpClient.get("http://localhost:8080/liste/totalListeTire")
    .subscribe((data)=>{
      console.log(data)
      this.total_listes_tire=data
    })


    this.httpClient.get("http://localhost:8080/tirages/totaleTirage")
    .subscribe((data)=>{
      console.log(data)
      this.tirage_effectuer=data
    })



    this.httpClient.get("http://localhost:8080/postulants/totaPostulants")
    .subscribe((data)=>{
      console.log(data)
      this.postulants=data
    })

    this.httpClient.get("http://localhost:8080/liste/detailleListe")
    .subscribe((data)=>{
      console.log(data)
      this.detaillListe=data
    })

  }

}
