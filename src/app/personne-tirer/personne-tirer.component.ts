import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonneTirerService } from '../Services/personne-tirer.service';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-personne-tirer',
  templateUrl: './personne-tirer.component.html',
  styleUrls: ['./personne-tirer.component.css']
})
export class PersonneTirerComponent implements OnInit {

  libelleTirage!: string
  personneTire: any =[];

  // public listes: any =[];
  public size:number=20;
  public currentPage:number=0; 
  public totalPages:number;
  // public url="/tirage_fait_sur_liste";
  public pages: Array<number>

  constructor(private route: ActivatedRoute, private tirageService: PersonneTirerService ) { }

  ngOnInit(): void {

    this.libelleTirage = this.route.snapshot.params['libelle']
    
    this.tirageService.afficher_les_personnes_tirer(this.currentPage,this.size, this.libelleTirage)
    .subscribe(data=>{
      this.personneTire = data
      console.log(data)
    })

  }


  
  onPageDeatillListe(i){
    this.currentPage=i;
    this.ngOnInit();
  }

}
