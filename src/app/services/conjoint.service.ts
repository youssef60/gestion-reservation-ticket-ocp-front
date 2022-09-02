import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Conjoint } from '../models/conjoint';

@Injectable({
  providedIn: 'root'
})
export class ConjointService {

  constructor( private http : HttpClient) { }
  apiBaseUrl = environment.apiBaseUrl;

  public getConjoints() : Observable<Conjoint[]> {
    return this.http.get<Conjoint[]>(`${this.apiBaseUrl}/conjoints`);
  }
  public addConjoint( conjoint : Conjoint) : Observable<Conjoint> {
    return this.http.post<Conjoint>(`${this.apiBaseUrl}/conjoints`, conjoint);
  }

   public supprimerTousLesConjoints() : Observable<any>{
      return this.http.delete<Conjoint []>(`${this.apiBaseUrl}/conjoints`)
  }
}
