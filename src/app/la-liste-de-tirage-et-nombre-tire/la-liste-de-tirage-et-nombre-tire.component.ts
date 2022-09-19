import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LIsteTirageNombreTireService } from '../Services/liste-tirage-nombre-tire.service';

@Component({
  selector: 'app-la-liste-de-tirage-et-nombre-tire',
  templateUrl: './la-liste-de-tirage-et-nombre-tire.component.html',
  styleUrls: ['./la-liste-de-tirage-et-nombre-tire.component.css']
})
export class LaListeDeTirageEtNombreTireComponent implements OnInit {

  public detaillListe: any= [];
  public size:number=5;
  public currentPage:number=0; 
  public totalPages:number;
  public url="/tirage_fait_sur_liste";
  public pages: Array<number>
  public nbr:any;

  constructor(private detailService:LIsteTirageNombreTireService) { }

  ngOnInit(): void {

  this.detailService.getdetailListe(this.currentPage,this.size)
  .subscribe((data)=>{
    console.log(data)
 
    this.totalPages=data["totalPages"];
    this.pages=new Array<number>(this.totalPages)
    this.detaillListe=data;
    
  }, err=>{
    console.log(err);
  });
      
  // this.detailService.getNombre()
  // .subscribe((data)=>{
  //   console.log(data)
  //   this.nbr=data

  // })

  }

  onPageDeatillListe(i){
    this.currentPage=i;
    this.ngOnInit();
  }




}
