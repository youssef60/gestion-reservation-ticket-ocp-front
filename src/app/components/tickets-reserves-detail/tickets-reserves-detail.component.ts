import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Collaborateur } from 'src/app/models/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { TicketService } from 'src/app/services/ticket.service';


@Component({
  selector: 'app-tickets-reserves-detail',
  templateUrl: './tickets-reserves-detail.component.html',
  styleUrls: ['./tickets-reserves-detail.component.scss']
})
export class TicketsReservesDetailComponent implements OnInit {

  constructor( private collaborateurService : CollaborateurService , private ticketService : TicketService) { }

  @Input()
  collaborateur? : Collaborateur = {}


  @Output()
  clickEvent = new EventEmitter()


  refrechData(){
    this.clickEvent.emit();
  }

  ngOnInit(): void {
   
  }

  removeTicket(id : number){
    confirm('êtes-vous sûr de vouloir supprimer ce ticket?')
    this.ticketService.deleteTicket(id).subscribe(
      (response) => {
         this.collaborateurService.findCollaborateurByMatricule(this.collaborateur?.matricule!).subscribe(
          (response) => { 
            response.prisMaxTicket = false;
            if( response.tickets?.length == 0 ) {
                 response.prisTicket = false; 
              } 
            this.collaborateurService.updateCollaborateur(response).subscribe(
              (response) => { console.log(response.prisTicket) },
              (err) => { console.log(err) }
            )  
          
          }
        )
          this.collaborateur?.tickets?.filter( e => e.id != id )
      }
    )
  }

}
