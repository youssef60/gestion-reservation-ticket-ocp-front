import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TypeTicket } from '../models/typeTicket';

@Injectable({
  providedIn: 'root'
})
export class TypeTicketService {

  baseUrlApi = environment.apiBaseUrl;

  constructor(private http : HttpClient) { }

   getTypeTickets() : Observable<TypeTicket[]> {
    return this.http.get<TypeTicket[]>(`${this.baseUrlApi}/typeTickets`);
  }

  addTypeTicket(typeTicket : TypeTicket) : Observable<TypeTicket>{
    return this.http.post<TypeTicket>(`${this.baseUrlApi}/typeTicket` , typeTicket);
  }

  findById(id : number): Observable<TypeTicket>{
    return this.http.get<TypeTicket>(`${this.baseUrlApi}/typeTickets/${id}`);
  }

  deleteById(id : number): Observable<any>{
    return this.http.delete<TypeTicket>(`${this.baseUrlApi}/typeTicket/${id}`)
  }

  findByType( type : string ) : Observable<TypeTicket> {
    return this.http.get<TypeTicket>(`${this.baseUrlApi}/typeTicket/type/${type}`)
  }

}
