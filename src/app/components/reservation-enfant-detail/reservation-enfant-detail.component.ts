import { Component, Input, OnInit } from '@angular/core';
import { Enfant } from 'src/app/models/enfant';
import { TypeTicket } from 'src/app/models/typeTicket';
import { TypeTicketService } from 'src/app/services/type-ticket.service';

@Component({
  selector: 'app-reservation-enfant-detail',
  templateUrl: './reservation-enfant-detail.component.html',
  styleUrls: ['./reservation-enfant-detail.component.scss']
})
export class ReservationEnfantDetailComponent implements OnInit {

  constructor(private typeTicketService : TypeTicketService) { }

  @Input()
  enfant? : Enfant;

  age : number = 0;
  getAge(){


    const arr = this.enfant?.dateNaissance.split('/');

    const day = arr![0];
    const month = arr![1] ;
    const year  = arr![2] ;


    const date : any= new Date(+year, +month - 1, +day);

    const timeDiff : number = Date.now() - date;

    this.age =  Math.floor((timeDiff / (1000 * 3600 * 24))/365);

  }
   typeTickets : TypeTicket[] = [];

  getAllTypetickets(){
    this.typeTicketService.getTypeTickets().subscribe(
      (response) => { this.typeTickets = response },
      (error) => { console.log(error) }
    )
  }
  ngOnInit(): void {
    this.getAge()
    this.getAllTypetickets()
  }

}
