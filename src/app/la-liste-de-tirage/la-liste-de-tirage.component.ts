import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-la-liste-de-tirage',
  templateUrl: './la-liste-de-tirage.component.html',
  styleUrls: ['./la-liste-de-tirage.component.css']
})
export class LaListeDeTirageComponent implements OnInit {

  public listes: any =undefined;

  constructor(private httpClient:HttpClient) { 

  }

  ngOnInit(): void {
    this.httpClient.get("http://localhost:8080/tirages/AfficherTirage")
    .subscribe(data=>{
      console.log(data)
      this.listes=data
    })

  }

}
