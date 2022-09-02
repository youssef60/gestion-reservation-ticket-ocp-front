import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { ReserverInterface } from 'src/app/interfaces/reserver-interface';
import { Collaborateur } from 'src/app/models/collaborateur';
import { Enfant } from 'src/app/models/enfant';
import { Ticket } from 'src/app/models/ticket';
import { TypeTicket } from 'src/app/models/typeTicket';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { PrintService } from 'src/app/services/print.service';
import { TicketService } from 'src/app/services/ticket.service';
import { TypeTicketService } from 'src/app/services/type-ticket.service';
import { disableEnfantInputValidator, getEnfantAge,  validateAdulte, validateAdulteDino, validateEnfantDino } from 'src/app/validators/validators';

@Component({
  selector: 'app-reservation-detail',
  templateUrl: './reservation-detail.component.html',
  styleUrls: ['./reservation-detail.component.scss']
})
export class ReservationDetailComponent implements OnInit {


  getNombreEnfant( collaborateur : Collaborateur ){
    let nombreEnfantMineur = 0;

    collaborateur.enfants?.map(
      (e) => { 
        if(getEnfantAge(e) >= 2 && getEnfantAge(e) < 12){
          nombreEnfantMineur++;
        }
      }
    )
    nombreEnfantMineur =   nombreEnfantMineur * 2;
    if(collaborateur.prisTicket){
      collaborateur.tickets?.map(
        (el) => { nombreEnfantMineur = nombreEnfantMineur - el.nbrTicketEnfant! }
      )
      // console.log(nombreEnfantMineur)
      return nombreEnfantMineur;
    }

      // console.log(nombreEnfantMineur)
      return nombreEnfantMineur;


  }

  getNombreAdulte(collaborateur : Collaborateur) {
    let nombreEnfantAdulte = 1;

    collaborateur.conjoints?.forEach(
      (e) => { nombreEnfantAdulte++; }
    )

    collaborateur.enfants?.map(
      (e) => { 
        if(getEnfantAge(e) >= 12 && getEnfantAge(e) < 21){
          nombreEnfantAdulte++;
        }
       }
    )
    nombreEnfantAdulte =   nombreEnfantAdulte * 2 

    if(collaborateur.prisTicket){
      collaborateur.tickets?.map(
        (el) => { nombreEnfantAdulte = nombreEnfantAdulte - el.nbrTicketAdulte! }
      )
      return nombreEnfantAdulte;
    }

      return nombreEnfantAdulte;

  }

  // VARIABLES 
  typeTicketAqua : TypeTicket = {};
  typeTicketDino : TypeTicket = {};
  totalDino : number = 0;
  totalAqua : number = 0;

  onChangeTotalAquaAd(e : number){
         this.totalAqua = (e * this.typeTicketAqua.montantAdulte!) + (this.aquaParcEnfant?.value * this.typeTicketAqua.montantEnfant!);

  }

  onChangeTotalAquaEn(e : number){
         this.totalAqua = (this.aquaParcAdulte?.value * this.typeTicketAqua.montantAdulte!) + (e * this.typeTicketAqua.montantEnfant!);
  }
  onChangeTotalDinoAd(e : number){
        this.totalDino = ( e * this.typeTicketDino.montantAdulte!) + (this.dinoEnfant?.value * this.typeTicketDino.montantEnfant!);
  }
   onChangeTotalDinoEn(e : number){
        this.totalDino = (this.dinoAdulte?.value * this.typeTicketDino.montantAdulte!) + (e * this.typeTicketDino.montantEnfant!);
  }




  constructor(private printService : PrintService ,  private router : Router, private collaborateurService : CollaborateurService ,private typeTicketService : TypeTicketService , private fb : FormBuilder , private ticketService : TicketService ) { }

  typeTickets : TypeTicket[] = []
  ngOnInit(): void {
    this.getAllTypeTickets();

    let c = this.collaborateur;

  this.reservationForm = this.fb.group({
      aquaParcEnfant : [null,[validateAdulte(this.getNombreEnfant(c)) , disableEnfantInputValidator(this.getNombreEnfant(c))]],
      aquaParcAdulte : [null,[validateAdulte(this.getNombreAdulte(c))]],
      dinoEnfant :  [null,[validateAdulte(this.getNombreEnfant(c)) , disableEnfantInputValidator(this.getNombreEnfant(c)) ]],
      dinoAdulte : [null,[validateAdulte(this.getNombreAdulte(c))]]
    } , { validator : [validateAdulteDino(this.getNombreAdulte(c)) , validateEnfantDino(this.getNombreEnfant(c)) ] })

    this.typeTicketService.findByType('AquaParc').subscribe(
        (response) => {  this.typeTicketAqua = response  },
        (error) => { console.log( 'error find by typeTicket aqua' + error) }
    )

    this.typeTicketService.findByType('Dino').subscribe(
        (response) => {  this.typeTicketDino = response  },
        (error) => { console.log( 'error find by typeTicket Dino' + error) }
    )
  }

  get aquaParcEnfant() { return this.reservationForm.get('aquaParcEnfant') }
  get aquaParcAdulte() { return this.reservationForm.get('aquaParcAdulte') }
  get dinoEnfant() { return this.reservationForm.get('dinoEnfant') }
  get dinoAdulte() { return this.reservationForm.get('dinoAdulte') }

  enfantInputsDisable = false;


  onSubmit(){

    
    if(this.reservationForm.controls['dinoAdulte'].errors || this.reservationForm.errors?.['errorMaxAdulte'] || this.reservationForm.controls['dinoEnfant'].errors?.['errorMaxAdulte']){
      alert('error')
      return;
    }
    
    let succesTicketAqua = false;
    let succesTicketDino = false;
    if((this.aquaParcAdulte?.value &&  this.aquaParcAdulte?.value != 0 ) ||(  this.aquaParcEnfant?.value &&  this.aquaParcEnfant?.value != 0 )){
     
         // console.log(typeTicketAqua)
      let ticketAqua : Ticket = { 
        nbrTicketAdulte  : this.aquaParcAdulte?.value,
        nbrTicketEnfant : this.aquaParcEnfant?.value,
        typeTicket : this.typeTicketAqua,
        collaborateur : { matricule : this.collaborateur.matricule },
        total : this.totalAqua
       } 

       this.ticketService.addTicket(ticketAqua).subscribe(
          (response) => {  },
           (error) => { console.log('error save ticket aqua' + error) ;  }
       );
       succesTicketAqua = true;
     
    }
    if((this.dinoAdulte?.value &&  this.dinoAdulte?.value != 0 ) ||(  this.dinoEnfant?.value &&  this.dinoEnfant?.value != 0 )){
  
      let ticketDino : Ticket = { 
        nbrTicketAdulte  : this.dinoAdulte?.value,
        nbrTicketEnfant : this.dinoEnfant?.value,
        collaborateur : { matricule : this.collaborateur.matricule },
        typeTicket : this.typeTicketDino,
        total : this.totalDino
       } 

       this.ticketService.addTicket(ticketDino).subscribe(
        (response) => {  },
        (error) => { console.log('error save ticket dino' + error) ;  }
       );

       succesTicketDino = true;
       
    }

      if(succesTicketDino || succesTicketAqua){

        if(this.getNombreAdulte(this.collaborateur) == (this.aquaParcAdulte?.value  + this.dinoAdulte?.value) && ( this.getNombreEnfant(this.collaborateur) == ( this.aquaParcEnfant?.value + this.dinoEnfant?.value )  ) ){
            this.collaborateur.prisMaxTicket = true
            console.log(true)
            
        }
          this.collaborateur.prisTicket = true
        
      this.collaborateurService.updateCollaborateur(this.collaborateur).subscribe(
        (response) => {   
        this.printService.printDocument('invoice',response.matricule!)
         },
        (error) => { console.log(error) }
      )

      }

  }





  






























   @Input()
  collaborateur : Collaborateur = {};

 
  reservationForm! : FormGroup;


  getAllTypeTickets(){
    this.typeTicketService.getTypeTickets().subscribe(
      (response) => { 
        this.typeTickets = response;
       },
      (errors) => { console.log(errors)}
    )
  }
}


