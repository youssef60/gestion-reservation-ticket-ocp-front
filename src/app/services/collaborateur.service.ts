import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Collaborateur } from '../models/collaborateur';

@Injectable({
  providedIn: 'root'
})
export class CollaborateurService {

  constructor( private http : HttpClient ) { }
  baseUrl = environment.apiBaseUrl;
  public getCollaborateurs() : Observable<Collaborateur[]> {
    return this.http.get<Collaborateur[]>(`${this.baseUrl}/collaborateurs`);
  }

  public addCollaborateur(collaborateur : Collaborateur) : Observable<Collaborateur>{
    return this.http.post<Collaborateur>(`${this.baseUrl}/collaborateurs`,collaborateur);
  }

  public findCollaborateurByMatricule( matricule : string ) : Observable<Collaborateur> {
    return this.http.get<Collaborateur>(`${this.baseUrl}/collaborateurs/${matricule}`);
  }

  public supprimerTousLesCollaborauteurs() : Observable<any>{
      return this.http.delete<Collaborateur []>(`${this.baseUrl}/collaborateurs`)
  }

  public updateCollaborateur(collaborateur : Collaborateur) : Observable<Collaborateur>{
    return this.http.put<Collaborateur>(`${this.baseUrl}/collaborateurs`,collaborateur);
  }

}
