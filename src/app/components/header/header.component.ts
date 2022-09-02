import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  searchText : string = ''

  @Output()
  searchEvent : EventEmitter<string> = new EventEmitter<string>()

  onChangeSearch(){
    this.searchEvent.emit(this.searchText)
  }

  ngOnInit(): void {
  }

}
