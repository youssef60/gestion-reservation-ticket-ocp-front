import { Component, Input, OnInit } from '@angular/core';
import { ReserverInterface } from 'src/app/interfaces/reserver-interface';

@Component({
  selector: 'app-reservation-reserver-detail',
  templateUrl: './reservation-reserver-detail.component.html',
  styleUrls: ['./reservation-reserver-detail.component.scss']
})
export class ReservationReserverDetailComponent implements OnInit {

  constructor() { }

  @Input()
  reserverInputs? : ReserverInterface;

  ngOnInit(): void {
  }

}
