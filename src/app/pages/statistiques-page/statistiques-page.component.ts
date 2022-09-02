import { Component, OnInit, ViewChild } from '@angular/core';
import {  ChartConfiguration, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { BaseChartDirective, Color, Label, SingleDataSet, SingleOrMultiDataSet } from 'ng2-charts';
import { CollaborateurService } from 'src/app/services/collaborateur.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-statistiques-page',
  templateUrl: './statistiques-page.component.html',
  styleUrls: ['./statistiques-page.component.scss']
})
export class StatistiquesPageComponent implements OnInit {

  constructor(private ticketService : TicketService , private collaborateurService : CollaborateurService) { }

  nbrTotalCollaborateurs = 0;
  nbrTotalConjoints = 0;
  nbrTotalEnfants = 0;
  nbrTotalDino =0 ;
  nbrTotalAqua = 0;
   
  ngOnInit(): void {
    this.displayTotalTickets()
    this.displayTotalWorkers()
  }

    // PIE CHART
    public pieChartLabels = ['nbr Ticket Dino Enfant', 'nbr Ticket Dino Adulte', 'nbr Ticket Aqua Enfant', 'nbr Ticket Aqua Adulte'];
    public pieChartData : number[] = [];
    public pieChartType : ChartType = 'pie';
    public pieChartColors: Array < any > = [{
        backgroundColor: ['rgb(166, 108, 255)', 'rgb(177, 225, 255)', 'rgb(255, 134, 158)','rgb(255, 196, 196)'],
        borderColor: ['rgb(156, 158, 254)', 'rgb(177, 225, 255)', 'rgb(255, 134, 158)','rgb(255, 196, 196)']
          }];
  

    displayTotalTickets(){
      let nbrTicketAdulteDino = 0;
      let nbrTicketEnfantDino = 0;
      let nbrTicketAdulteAqua = 0;
      let nbrTicketEnfantAqua = 0;
      this.ticketService.getTickets().subscribe(
        (response) => {
            response.map(
              (e) => {
                if(e.typeTicket!.type! == "Dino"){
                  nbrTicketAdulteDino += e.nbrTicketAdulte!; 
                  nbrTicketEnfantDino += e.nbrTicketEnfant!; 
                  console.log('test ' + nbrTicketEnfantDino)
                }
                if(e.typeTicket!.type! == "AquaParc"){
                  nbrTicketAdulteAqua += e.nbrTicketAdulte!; 
                  nbrTicketEnfantAqua += e.nbrTicketEnfant!; 
                }
              }
            )
            this.nbrTotalAqua = nbrTicketAdulteAqua + nbrTicketEnfantAqua;
            this.nbrTotalDino = nbrTicketAdulteDino + nbrTicketEnfantDino;
            this.pieChartData.push(nbrTicketEnfantDino)
            this.pieChartData.push(nbrTicketAdulteDino)
            this.pieChartData.push(nbrTicketEnfantAqua)
            this.pieChartData.push(nbrTicketAdulteAqua)

        }
      )
    }

    displayTotalWorkers(){
        let totalCols = 0;
        let totalConjs = 0;
        let totalEnfs = 0;


        this.collaborateurService.getCollaborateurs().subscribe(
          (response) => {
            totalCols = response.length;
            let nbrBen = 0;
            let nbrNonBen = 0;
            response.map(
              (e) => {
                  totalConjs += e.conjoints?.length!;
                  totalEnfs += e.enfants?.length!;
                  if(e.prisTicket){
                    nbrBen++;
                  }else{
                    nbrNonBen++;
                  }
              }
            )
            this.nbrTotalCollaborateurs = totalCols;
            this.nbrTotalConjoints = totalConjs;
            this.nbrTotalEnfants = totalEnfs;
            console.log(nbrBen)
            console.log(nbrNonBen)
            this.barChartData[0].data = [nbrBen, nbrNonBen,0] 
            this.chart?.update()
          }
        )
    }


    // BAR CHART
    nbrColBen = 0;
    nbrColNobBen = 0;
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  // barChartLabels: Label[] = ['nombre des collaborateurs beneficié', 'a'];
  // barChartType: ChartType = 'bar';
  // barChartLegend = true;
  // barChartPlugins = [];
  // barChartData: ChartDataSets[] = [
  //   { data: [3,4] , label: 'Nombre des collaborateurs beneficié / Non beneficié' }
  // ];
@ViewChild('BaseChartDirective')  chart: BaseChartDirective  | undefined;;

  barChartLabels: Label[] = ['nombre des collaborateurs beneficié', 'nombre des collaborateurs Non beneficié'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [this.nbrColBen, this.nbrColNobBen,0] , label : "nombre des collaborateurs  beneficié / Non beneficié "}
  ];

  

  }
