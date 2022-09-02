import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enfant } from 'src/app/models/enfant';
import { EnfantService } from 'src/app/services/enfant.service';
import { ExportServiceService } from 'src/app/services/export-service.service';

@Component({
  selector: 'app-enfants-page',
  templateUrl: './enfants-page.component.html',
  styleUrls: ['./enfants-page.component.scss']
})
export class EnfantsPageComponent implements OnInit {

  constructor(private exportService : ExportServiceService , private router : Router , private enfantService : EnfantService) { }

  errors : any[] = []

  ngOnInit(): void {
    this.getEnfants();
  }
 

  enfants : Enfant[] = []

  getEnfants() : void {
    this.enfantService.getEnfants().subscribe(
      (response) => this.enfants = response,
      (error) => console.log(error)
    )
  }

  getEnfantsFromExcel(enfs : any){
    if(enfs == null || enfs.length == 0){
      return;
    }
    enfs.map(
      (e : any) => {
        let enfant : Enfant = {
          "collaborateur" : {
            "matricule" : e['matricule']
          },
          "dateNaissance" : e['date naissance'],
          "nom" : e['nom'],
          "prenom" : e['prenom']         
        }
       
        this.enfantService.addEnfant(enfant).subscribe(
          (response) => this.getEnfants(),
          (error) => {
            let  err  =  { httpCode : "" , errorCodes : "" , message: "", errors: [] }

          console.log(error.error)
          err.errorCodes = error.error.errorCodes + ' (' + enfant.nom + ' ' + enfant.prenom  +')' ;
          err.errors = error.error.errors;
          err.httpCode =  error.error.httpCode;
          err.message = error.error.message;
          this.errors.push(err)
        }
          
        )

      }
    )
  }

    supprimerTousLesEnfants(){
    if(confirm('êtes-vous sûr de vouloir supprimer tout les enfants')){
      this.enfantService.supprimerTousLesEnfants().subscribe(
      (res) => { console.log('tous les enfants ont été supprimé') },
      (err) => { console.log(err) }
    )
    }else{
      return;
    }
    
     this.enfants = []
  }

  exporterEnfants(){
    if(this.enfants.length == 0){
      return;
    }
    let exportedEnfants = this.enfants.map(
        (e) => {         
         return  Object.fromEntries(Object.entries(e).filter(([key]) => key == 'matricule' || key == 'nom' || key == 'prenom' || key == "dateNaissance" ))

        }
    )
     this.exportService.exportAsExcelFile(exportedEnfants,'enfants')
  }

   searchText : string = ''


  search(e : string){
      this.searchText = e;
  }

}
