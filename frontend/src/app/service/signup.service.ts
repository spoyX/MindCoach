import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categorie } from '../model/Categorie.model';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}

  
  AllCategories(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiUrl}/categories`);
  }

  AddUser(user: user): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
