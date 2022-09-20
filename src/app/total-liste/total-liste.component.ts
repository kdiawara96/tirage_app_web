import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TotalListeService } from '../Services/total-liste.service';

@Component({
  selector: 'app-total-liste',
  templateUrl: './total-liste.component.html',
  styleUrls: ['./total-liste.component.css']
})
export class TotalListeComponent implements OnInit {

  public listes: any =[];



  public size:number=20;
  public currentPage:number=0; 
  public totalPages:number;
  // public url="/tirage_fait_sur_liste";
  public pages: Array<number>
  public id:number;

  public url="/liste_postulants_tirage";


  constructor(
    private afficherListe:TotalListeService,
    private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
   
    this.id =this.route.snapshot.params['id']
 
this.getListe();

  }


  public getListe(){
    this.afficherListe.affichage_detail_liste(this.currentPage,this.size)
    .subscribe((data=>{
     
     this.totalPages=data["totalPages"];
     this.pages=new Array<number>(this.totalPages)
     this.listes=data
     
      
    }))

  }

  onPageDeatillListe(i){
    this.currentPage=i;
    this.ngOnInit();
  }
}
