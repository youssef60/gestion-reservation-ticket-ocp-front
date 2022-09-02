import { Component, OnInit } from '@angular/core';
import { Collaborateur } from 'src/app/models/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { ExportServiceService } from 'src/app/services/export-service.service';

@Component({
  selector: 'app-tickets-resevee',
  templateUrl: './tickets-resevee.component.html',
  styleUrls: ['./tickets-resevee.component.scss']
})
export class TicketsReseveeComponent implements OnInit {

  constructor(private exportService : ExportServiceService ,private collaborateurService : CollaborateurService ) { }

  ngOnInit(): void {
    this.getAllCollaborateur()
  }

  collaborateurs : Collaborateur [] = []

  getAllCollaborateur(){
    this.collaborateurService.getCollaborateurs().subscribe(
      (res) => { this.collaborateurs = res;  
},
      (err) => { console.log(err) }
    )
  }

  refechData(){
      this.getAllCollaborateur()
      this.refrechData1()
      // location.reload()

  }
  refrechData1(){
    this.getAllCollaborateur()
  }


  exporterTickets(){
    let exportedTickets : any = [] ;
     this.collaborateurs.map(
        (e) => {   
          if(e.prisTicket){
             e.tickets?.map(
              (t) => {
                exportedTickets.push({ matricule : e.matricule , nom : e.nom , prenom : e.prenom , categorie : t.typeTicket?.type  , NbrAdulte :  t.nbrTicketAdulte,  NbrEnfant :  t.nbrTicketEnfant,  total :  t.total })
              }
             )          
          }              
        }
    )
       this.exportService.exportAsExcelFile(exportedTickets,'tickets')
       
  }

  exportAujourdhuiTicket(){
     let exportedTickets : any = [] ;

     let today = new Date()
     today.setHours(0,0,0,0)
     let tomorrow = new Date();
     tomorrow.setHours(0,0,0,0)
     tomorrow.setDate(today.getDate() + 1)

     this.collaborateurs.map(
        (e) => {   
          if(e.prisTicket){

             e.tickets?.map(
              (t) => {
                let ticketDate = new Date(t.createdTime!)
                if( ticketDate > today  && ticketDate < tomorrow ){
                  exportedTickets.push({ matricule : e.matricule , nom : e.nom , prenom : e.prenom , categorie : t.typeTicket?.type  , NbrAdulte :  t.nbrTicketAdulte,  NbrEnfant :  t.nbrTicketEnfant,  total :  t.total })
                }

              }
             )
             
          }      
         
        }
    )
       this.exportService.exportAsExcelFile(exportedTickets,'tickets_aujourdhui')
  }


// IMPELEMENTING SEARCH 

  searchText : string = ''


  search(e : string){
      this.searchText = e;
  }






}

  class ExportedTicket   { matricule? : string | undefined ; nom? : string | undefined ; prenom? : string | undefined ; categorie? : string | undefined ; NbrAdulte? : number | undefined  ; NbrEnfant? : number | undefined ; total? : number | undefined  }
