import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonInfoService } from '../Services/person-info.service';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.css']
})
export class PersonCardComponent implements OnInit {

  public postulantsDetail: any= [];
  public size:number=16;
  public currentPage:number=0; 
  public totalPages:number;
  public pages: Array<number>
  public id:number;


  constructor(private postulants: PersonInfoService,private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.id =this.route.snapshot.params['id'];

    this.postulants.PostulantTirerParListe(this.currentPage,this.size, this.id)
    .subscribe(data=>{
      console.log(data);
      this.totalPages = data["totalPages"];
      this.pages=new Array<number>(this.totalPages);
      this.postulantsDetail=data
      console.log(data)
    });
  }

  onPageDeatillListe(i){
    this.currentPage=i;
    this.ngOnInit();
  }


}
