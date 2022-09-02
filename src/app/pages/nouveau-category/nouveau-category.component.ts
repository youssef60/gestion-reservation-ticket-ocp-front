import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTicket } from 'src/app/models/typeTicket';
import { TypeTicketService } from 'src/app/services/type-ticket.service';

@Component({
  selector: 'app-nouveau-category',
  templateUrl: './nouveau-category.component.html',
  styleUrls: ['./nouveau-category.component.scss']
})
export class NouveauCategoryComponent implements OnInit {

  constructor(
    private typTicketService : TypeTicketService ,
    private router : Router,
    private activatedRoute : ActivatedRoute
    ) { }

  typeTicket : TypeTicket = {};

  ngOnInit(): void {
      const  idTypeTicket = this.activatedRoute.snapshot.params['idTypeTicket'];
      

      if(idTypeTicket){
        this.typTicketService.findById(idTypeTicket).subscribe(
        (response) => { this.typeTicket = response },
        (error) => {console.log(error)}
      )
      }
      
  }

 
  saveTypeTicket(){
    this.typTicketService.addTypeTicket(this.typeTicket).subscribe(
      (response) => { this.router.navigate(['categories']) },
      (error) => {console.log(error)}
    )
  }



}
