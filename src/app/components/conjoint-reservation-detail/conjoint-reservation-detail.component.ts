import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Conjoint } from 'src/app/models/conjoint';
import { TypeTicket } from 'src/app/models/typeTicket';
import { TypeTicketService } from 'src/app/services/type-ticket.service';

@Component({
  selector: 'app-conjoint-reservation-detail',
  templateUrl: './conjoint-reservation-detail.component.html',
  styleUrls: ['./conjoint-reservation-detail.component.scss']
})
export class ConjointReservationDetailComponent implements OnInit {

  constructor( private typeTicketService : TypeTicketService  ) { }

 

  @Input()
  conjoint? : Conjoint;

  typeTickets : TypeTicket[] = [];

  getAllTypetickets(){
    this.typeTicketService.getTypeTickets().subscribe(
      (response) => { this.typeTickets = response },
      (error) => { console.log(error) }
    )
  }

  ngOnInit(): void {
    this.getAllTypetickets();
    
  }

}
