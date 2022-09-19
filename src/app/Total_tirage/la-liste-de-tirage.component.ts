import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TotalTirageService } from '../Services/total-tirage.service';

@Component({
  selector: 'app-la-liste-de-tirage',
  templateUrl: './la-liste-de-tirage.component.html',
  styleUrls: ['./la-liste-de-tirage.component.css']
})
export class LaListeDeTirageComponent implements OnInit {

  public listes: any= [];
  public size:number = 20;
  public currentPage:number=0; 
  public totalPages:number;
  public pages: Array<number>
  public id:number;
  
  public url="/liste_postulants_tirage";

  constructor(private totalListe:TotalTirageService, private httpClient:HttpClient,private route: ActivatedRoute) {}

  ngOnInit(): void {

    this.id =this.route.snapshot.params['id']
 

    this.totalListe.affichage_detail_liste(this.currentPage,this.size)

    .subscribe(data=>{

      
      this.totalPages=data["totalPages"];
      this.pages=new Array<number>(this.totalPages)
      this.listes=data
      console.log(this.listes)
    
    },err=>{
      console.log(err);
    });

  }


  
  
  onPageDeatillListe(i){
    this.currentPage=i;
    this.ngOnInit();
  }

}
