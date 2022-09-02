import { Component, Input, OnInit } from '@angular/core';
import { Collaborateur } from 'src/app/models/collaborateur';

@Component({
  selector: 'app-collaborateur-detail',
  templateUrl: './collaborateur-detail.component.html',
  styleUrls: ['./collaborateur-detail.component.scss']
})
export class CollaborateurDetailComponent implements OnInit {

  constructor() { }

  @Input()
  collaborateur? : Collaborateur ;

  


  ngOnInit(): void {
  }

}
