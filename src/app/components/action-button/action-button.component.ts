import { Binary } from '@angular/compiler';
import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import * as XLSX from "xlsx"

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  constructor() { }

  @Output()
  clickEvent = new EventEmitter();

  @Output()
  importEvent = new EventEmitter();

  @Output()
  supprimerTousEvent = new EventEmitter();

  @Output()
  exportEvent = new EventEmitter();
  
  @Output()
  exportDenierEvent = new EventEmitter()

  ngOnInit(): void {
  }

  @Input()
  isNouveauVisible : boolean = true
  @Input()
  isExporterVisible : boolean = true;
  @Input()
  isImporterVisible : boolean = true;

  @Input()
  isExporterDernierVisible : boolean = false;

  @Input()
  isSupprimerVisible : boolean = true



  nouveauButtonClicked() : void {
    this.clickEvent.emit();
  }

  supprimerTousButton() : void {
    this.supprimerTousEvent.emit();
  }

  data? : [][];
  onFileChange(evt : any){
    const target : DataTransfer = <DataTransfer>(evt.target);
    if(target.files.length !== 1) {alert("vous ne pouvez pas utiliser plus d'un fichier")}

    const reader: FileReader = new FileReader();

    reader.onload = ( e :any ) => {
      const bstr : string = e.target.result;

      const wb : XLSX.WorkBook = XLSX.read(bstr , {type : 'binary' ,cellText: false , cellDates: true})
      
      const wsname : string = wb.SheetNames[0];

      const ws : XLSX.WorkSheet = wb.Sheets[wsname]
      
      this.data = (XLSX.utils.sheet_to_json(ws, {header : 2,raw:false, dateNF:'dd/MM/yyyy'}))
     
      this.importEvent.emit(this.data);

    }
    
    reader.readAsBinaryString(target.files[0]);

  }

  exportData(){
    this.exportEvent.emit()
  }
  exportDataDernier(){
    this.exportDenierEvent.emit()
  }

}
