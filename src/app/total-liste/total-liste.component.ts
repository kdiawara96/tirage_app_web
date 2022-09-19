import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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



  constructor(
    private afficherListe:TotalListeService
    ) {}

  ngOnInit(): void {
   
this.getListe();

  }


  public getListe(){
    this.afficherListe.affichage_detail_liste(this.currentPage,this.size)
    .subscribe((data=>{
     console.log(data),
     this.listes=data
      
    }))

  }

  onPageDeatillListe(i){
    this.currentPage=i;
    this.ngOnInit();
  }
}
