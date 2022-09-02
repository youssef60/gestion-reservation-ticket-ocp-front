import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from '../../interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private router : Router) { }

  menu : Menu[] = [
    {
      id : '1',
    titre : "Reserver Ticket",
    url : 'reservation',
    },
        {
      id : '6',
    titre : "tickets réservés",
    url : 'ticketsReseves',
    },
    {
      id : '2',
    titre : "Collaborateurs",
    url : 'collaborateurs',
    },
    {
      id : '3',
    titre : "Conjoints",
    url : 'conjoints',
    },
    {
      id : '4',
    titre : "Enfants",
    url : 'enfants',
    },
    {
      id : '6',
      titre : "Statistiques",
      url : 'statistiques',
    },
    {
      id : '5',
      titre : "Parametrages",
      url : '',
      menuItem : [
        {
          id : '51',
      titre : "Categories",
      url : 'categories',
        }
      ]
    }
  ]

  private lastSelectedMenu : Menu | undefined;

  navigate(url? : string){
    if(url != ''){
      this.router.navigate([url]);    
    }

  }

  ngOnInit(): void {
  }

}
