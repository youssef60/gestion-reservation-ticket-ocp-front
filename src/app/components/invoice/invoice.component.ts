import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collaborateur } from 'src/app/models/collaborateur';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { PrintService } from 'src/app/services/print.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

   colMat: string;
   collaborateur? : Collaborateur;


  constructor(route : ActivatedRoute ,private collaborateurService : CollaborateurService ,private printService : PrintService) { 
     this.colMat = route.snapshot.params['colMat'];
   
   
  }
  

  ngOnInit(): void {
      this.collaborateurService.findCollaborateurByMatricule(this.colMat).subscribe(
      (response) => { this.collaborateur = response ; this.printService.onDataReady() }
     )
  }


  //DATE 

  today = this.formatDate(new Date);
  todayDate = new Date();

  afterTomorrow = this.formatDate(new Date(this.todayDate.setDate(this.todayDate.getDate() + 2)))
//   afterTomorrow1 = new Date()
//   afterTomorrow2 = this.formatDate(this.afterTomorrow1)

  

   padTo2Digits(num : number) {
  return num.toString().padStart(2, '0');
  }

 formatDate(date : any) {
  return [
    this.padTo2Digits(date.getDate()),
    this.padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}


 

}
