import { Component, Input, OnInit } from '@angular/core';
import { Enfant } from 'src/app/models/enfant';

@Component({
  selector: 'app-enfant-detail',
  templateUrl: './enfant-detail.component.html',
  styleUrls: ['./enfant-detail.component.scss']
})
export class EnfantDetailComponent implements OnInit {

  constructor() { }

  @Input()
  enfant? : Enfant;

  ngOnInit(): void {
  }

}
