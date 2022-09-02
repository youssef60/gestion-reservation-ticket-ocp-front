import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  

   baseUrlApi = environment.apiBaseUrl;
  constructor(private http : HttpClient) { }

  getTickets() : Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${this.baseUrlApi}/tickets`);
  }

  addTicket(ticket : Ticket) : Observable<Ticket>{
    return this.http.post<Ticket>(`${this.baseUrlApi}/tickets` , ticket);
  }

  deleteTicket( id : number ) : Observable<any> {
   return  this.http.delete<Ticket>(`${this.baseUrlApi}/tickets/${id}`)
  }

  public supprimerTousLesTickets() : Observable<any>{
      return this.http.delete<Ticket []>(`${this.baseUrlApi}/tickets`)
  }
}
