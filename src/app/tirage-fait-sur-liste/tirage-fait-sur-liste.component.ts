import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TirageFaitSurListeService } from '../Services/tirage-fait-sur-liste.service';

@Component({
  selector: 'app-tirage-fait-sur-liste',
  templateUrl: './tirage-fait-sur-liste.component.html',
  styleUrls: ['./tirage-fait-sur-liste.component.css']
})
export class TirageFaitSurListeComponent implements OnInit {


  public detaillListe: any= [];
  public size:number=5;
  public currentPage:number=0; 
  public totalPages:number;
  public pages: Array<number>
  public id:number;
  // public listes: any =undefined;
 

  constructor(private liste_tirage_sur_liste:TirageFaitSurListeService,private route: ActivatedRoute) { }


  ngOnInit(): void {

     this.id =this.route.snapshot.params['id']

    this.liste_tirage_sur_liste.getTiragedetail_par_Liste(this.currentPage,this.size, this.id)
    .subscribe(data=>{
      console.log(data);

      this.totalPages=data["totalPages"];
      this.pages=new Array<number>(this.totalPages);
      this.detaillListe=data

    },err=>{
      console.log(err);
    });

  }

  onPageDeatillListe(i){
    this.currentPage=i;
    this.ngOnInit();
  }


}
