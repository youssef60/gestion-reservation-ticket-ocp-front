import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Conjoint } from 'src/app/models/conjoint';
import { ConjointService } from 'src/app/services/conjoint.service';
import { ExportServiceService } from 'src/app/services/export-service.service';

@Component({
  selector: 'app-conjoints-page',
  templateUrl: './conjoints-page.component.html',
  styleUrls: ['./conjoints-page.component.scss']
})
export class ConjointsPageComponent implements OnInit {

  constructor( private exportService : ExportServiceService , private router : Router , private conjointService : ConjointService) { }

  ngOnInit(): void {
    this.getConjoints()
  }
  errors : any[] = []
  conjoints : Conjoint[] = [];

  getConjoints(){
    return  this.conjointService.getConjoints().subscribe(
      (response) => this.conjoints = response,
      (error) => console.log(error)
    )
  }

  getConjointsFromExcel(conjs : any){
    if(conjs == null || conjs.length == 0){
      return;
    }
    conjs.map( (e: any) =>
    {
      let conjoint : Conjoint = { 
        "nom" : e['nom'],
        "prenom" : e['prenom'],
        "collaborateur" : {
          "matricule" : e['matricule']
        }
       } 

      this.conjointService.addConjoint(conjoint).subscribe(
        (response) => { this.getConjoints()},
        (error) => {
          let  err  =  { httpCode : "" , errorCodes : "" , message: "", errors: [] }

          console.log(error.error)
          err.errorCodes = error.error.errorCodes + ' (' + conjoint.nom + ' ' + conjoint.prenom  +')' ;
          err.errors = error.error.errors;
          err.httpCode =  error.error.httpCode;
          err.message = error.error.message;
          this.errors.push(err)
        }
      )

    } )
  }

  supprimerTousLesCojoints(){
    if(confirm('êtes-vous sûr de vouloir supprimer tout les conjoints')){
      this.conjointService.supprimerTousLesConjoints().subscribe(
      (res) => { console.log('tous les conjointes ont ete supprimé') },
      (err) => { console.log(err) }
    )
    }else{
      return;
    }
    
     this.conjoints = []
  }

   exporterConjoints(){
    if(this.conjoints.length == 0){
      return;
    }
    let exportedConjoints = this.conjoints.map(
        (e) => {
          
         return  Object.fromEntries(Object.entries(e).filter(([key]) => key == 'matricule' || key == 'nom' || key == 'prenom'  ))

        }
    )
     this.exportService.exportAsExcelFile(exportedConjoints,'conjoints')
  }

  // IMPELEMENTING SEARCH 

  searchText : string = ''


  search(e : string){
      this.searchText = e;
  }

}
