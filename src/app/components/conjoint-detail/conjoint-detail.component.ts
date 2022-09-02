import { Component, Input, OnInit } from '@angular/core';
import { Conjoint } from 'src/app/models/conjoint';

@Component({
  selector: 'app-conjoint-detail',
  templateUrl: './conjoint-detail.component.html',
  styleUrls: ['./conjoint-detail.component.scss']
})
export class ConjointDetailComponent implements OnInit {

  constructor() { }

  @Input() 
  conjoint? : Conjoint;

  ngOnInit(): void {
  }

}
