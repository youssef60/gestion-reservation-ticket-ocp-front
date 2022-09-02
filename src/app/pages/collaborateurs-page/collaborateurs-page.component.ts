import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { Collaborateur } from 'src/app/models/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { ConjointService } from 'src/app/services/conjoint.service';
import { EnfantService } from 'src/app/services/enfant.service';
import { TicketService } from 'src/app/services/ticket.service';
import * as FileSaver from 'file-saver'
import * as XLSX from 'xlsx';
import { ExportServiceService } from 'src/app/services/export-service.service';

@Component({
  selector: 'app-collaborateurs-page',
  templateUrl: './collaborateurs-page.component.html',
  styleUrls: ['./collaborateurs-page.component.scss']
})
export class CollaborateursPageComponent implements OnInit {

  constructor( private exportService : ExportServiceService , private  ticketService : TicketService , private router : Router ,private collaborateurService : CollaborateurService , private conjointService : ConjointService,private enfantService : EnfantService) { }
public collaborateurs : Collaborateur[] = [];
  ngOnInit(): void {
    this.getCollaborateurs();
  }
  nouveauCollaborateur(){
    this.router.navigate(['nouveauCollaborateur'])
  }

  errors : any []  = [] 

  getCollaborateursFromExcel(collabs : Collaborateur[]){
    if(collabs == null || collabs.length == 0){
      alert('les données sont vides')
      return;
    }
    collabs.map(
      (c) => {
        
        this.collaborateurService.addCollaborateur(c).subscribe(
      (response) => { console.log(response); this.getCollaborateurs()},
      (error) => { 
       let  err  =  { httpCode : "" , errorCodes : "" , message: "", errors: [] }

        console.log(error.error)
         err.errorCodes = error.error.errorCodes + ' (' + c.nom + ' ' + c.prenom  +')' ;
         err.errors = error.error.errors;
         err.httpCode =  error.error.httpCode;
         err.message = error.error.message;
         this.errors.push(err)
        }
    )
      }
    )
          
  }
  
 
  supprimerTousLesCollaborateurs(){
    if(confirm('la suppression des collaborateurs cause la suppression de tous les conjoints, les enfants et les tickets. Êtes-vous sûr de cette suppression?')){
        this.conjointService.supprimerTousLesConjoints().subscribe(
          (res) => { 
            console.log('conjoints supprimé ')
            this.enfantService.supprimerTousLesEnfants().subscribe(
              (res) => { 
                console.log('enfants supprimé ')
                this.ticketService.supprimerTousLesTickets().subscribe(
                  (res) => {  
                      console.log('tickets  supprimé ')
                      this.collaborateurService.supprimerTousLesCollaborauteurs().subscribe(
                        (res) => { 
                          console.log('collaborateurs supprimé')
                          this.getCollaborateurs();
                          this.errors = []
                        },
                        (err) => { console.log(err) }
                      )
                    },
                  (err) => { console.log(err) }
                )
              },
              (err) => { console.log(err) } 
            )
          },
          (err) => {console.log(err)}
        )
    }
    
  }



  getCollaborateurs() : void {
    this.collaborateurService.getCollaborateurs().subscribe(
       (response : Collaborateur[] ) => {this.collaborateurs = response},
       (error : HttpErrorResponse) => { console.log(error.message) }      
    );
  }

  
   EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
   EXCEL_EXTENSION = '.xlsx';






  exporterCollaborateurs(){

    if(this.collaborateurs.length == 0){
      return;
    }

    let exportedCollaborateurs = this.collaborateurs.map(
        (e) => {
          
         return  Object.fromEntries(Object.entries(e).filter(([key]) => key == 'matricule' || key == 'nom' || key == 'prenom' || key == 'cin'  ))

        }
    )
   
 
     this.exportService.exportAsExcelFile(exportedCollaborateurs,'collaborateurs')
  }

   // IMPELEMENTING SEARCH 

  searchText : string = ''


  search(e : string){
      this.searchText = e;
  }

}
