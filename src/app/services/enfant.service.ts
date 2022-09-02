import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Enfant } from '../models/enfant';

@Injectable({
  providedIn: 'root'
})
export class EnfantService {

  baseUrlApi = environment.apiBaseUrl;
  constructor(private http : HttpClient) { }

  getEnfants() : Observable<Enfant[]> {
    return this.http.get<Enfant[]>(`${this.baseUrlApi}/enfants`);
  }

  addEnfant(enfant : Enfant) : Observable<Enfant>{
    return this.http.post<Enfant>(`${this.baseUrlApi}/enfants` , enfant);
  }

  public supprimerTousLesEnfants() : Observable<any>{
      return this.http.delete<Enfant []>(`${this.baseUrlApi}/enfants`)
  }
}
