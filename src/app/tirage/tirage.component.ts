import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fichier } from '../fichier';
import { Tirage } from '../tirage';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-tirage',
  templateUrl: './tirage.component.html', 
  styleUrls: ['./tirage.component.css']
})
export class TirageComponent implements OnInit {
  

  formmodule!:FormGroup;
      file:any;
      fichier! : Fichier;

  private tirages: Tirage[];
  constructor(private tirageService: TirageService,private httpClient: HttpClient,private formB:FormBuilder) { }


  tirageObjet: Tirage = {
    id: 0,
    datetirage: '',
    libelletirage: '',
    nbr: '',
    liste_id: 0
  }

  id: number;
    datetirage: string;
    libelletirage: string;
    nbr: string;
    liste_id: number;
    libelleliste: string;
    detaillListe: any;

  ngOnInit(): void {

    this.tirageService.getTirages()
    .subscribe((data: Tirage[]) =>{
      console.log(data);
      this.tirages = data;
    })


    this.httpClient.get("http://localhost:8080/liste/listeComplet")
    .subscribe((data)=>{
      console.log(data)
      this.detaillListe=data
      
    })
    
    this.formmodule=this.formB.group({
      libelle:["",Validators.required],
      file:["",Validators.required],
    })

  }

  fileChange(e:any){
    this.file=e.target["files"][0]
  
  }
  
  importerliste(){
    this.fichier=this.formmodule.value
    this.tirageService.addListe(this.fichier.libelle,this.file).subscribe(data=>{
      this.formmodule.reset()
    })
  
  }
  
   postTirage(){

     this.tirageObjet.libelletirage = this.libelletirage;
     this.tirageObjet.nbr = this.nbr;
     console.log(this.tirageObjet)
     this.tirageService.postTirages(this.tirageObjet,this.libelleliste)
     .subscribe()
  }
  // postTirage(){
  //   this.tirageObjet.libelletirage = this.libelletirage;
  //   this.tirageObjet.nbr = this.nbr;
  //   console.log(this.tirageObjet)
  //   this.httpClient.post(`http://localhost:8080/ajouter/${this.libelleliste}`,this.tirageObjet)
  // }

}