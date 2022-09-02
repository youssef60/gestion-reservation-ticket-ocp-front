import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TypeTicket } from 'src/app/models/typeTicket';
import { TypeTicketService } from 'src/app/services/type-ticket.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  constructor(private router : Router , private typeTicketService : TypeTicketService) { }

  @Output()
  clickEvent = new EventEmitter()

  @Input()
  typeTicket : TypeTicket = {};
  ngOnInit(): void {
  }
  
  refrechData(){
    this.clickEvent.emit();
  }

  removeTypeTicket(id : number ){

    console.log(id);
  }

  editTypeTicket(){
    this.router.navigate(['nouveauArticle' , this.typeTicket?.id])
  }

  supprimerTypeTicket(){
    this.typeTicketService.deleteById(this.typeTicket.id!).subscribe(
      (response) => { this.router.navigate(['categories']) }
    )
  }

}
