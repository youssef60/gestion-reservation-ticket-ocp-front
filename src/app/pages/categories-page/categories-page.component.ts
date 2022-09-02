import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTicket } from 'src/app/models/typeTicket';
import { TypeTicketService } from 'src/app/services/type-ticket.service';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit {

  constructor( private router : Router ,private typeTicketService : TypeTicketService ) { }

  typeTickets : TypeTicket[] = []
  ngOnInit(): void {
    this.getAllTypeTickets()
  }
  getAllTypeTickets(){
    this.typeTicketService.getTypeTickets().subscribe(
      (response) => { this.typeTickets = response  },
      (errors) => {console.log(errors)}
    )
  }

  nouveauCategory(){
    this.router.navigate(['nouveauCategory'])
  }

  refrechData(){
    window.location.reload()

  }
}
