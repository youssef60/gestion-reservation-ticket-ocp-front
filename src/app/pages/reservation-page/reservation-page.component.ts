import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Collaborateur } from 'src/app/models/collaborateur';
import { TypeTicket } from 'src/app/models/typeTicket';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { TypeTicketService } from 'src/app/services/type-ticket.service';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.scss']
})
export class ReservationPageComponent implements OnInit {

  constructor( private collaborateurService : CollaborateurService  , private typeTicketService : TypeTicketService) { }

  ngOnInit(): void {
    this.getCollaborateurs();
    this.getTypeTickets()
  }

  typeTickets : TypeTicket[] = []
  collaborateurs : Collaborateur[] = [];
  getCollaborateurs(){
    this.collaborateurService.getCollaborateurs().subscribe(

      (response : Collaborateur[]) => {this.collaborateurs = response , console.log(response) },
      (error : HttpErrorResponse) => { console.log(error.message) }  
    )
  }

  getTypeTickets(){
    this.typeTicketService.getTypeTickets().subscribe(
      (response) => { this.typeTickets = response },
      (errors) => {console.log(errors)}
    )
  }


  // IMPELEMENTING SEARCH 

  searchText : string = ''


  search(e : string){
      this.searchText = e;
  }

}
