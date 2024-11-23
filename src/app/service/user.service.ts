import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { Observable } from 'rxjs';
import { Categorie } from '../model/Categorie.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiURL: string = 'http://localhost:8081/user';
  
  constructor(private http: HttpClient) { }

  AllUser(): Observable<user[]> {
    return this.http.get<user[]>(this.apiURL);
  }
  
  getbyId(): Observable<user[]> {
    return this.http.get<user[]>(this.apiURL);
  }
  AddUser( u: user) {
      return this.http.post<user>(this.apiURL,u);
      }

  DeleteUser(id:number){
        return this.http.delete(this.apiURL+"/"+id);
      }

  UpdateUser(u:user){
      return this.http.put<user>(this.apiURL,u);
      }      
  // AllCategories():Observable<Categorie[]>{
  //           return this.http.get<Categorie[]>(this.apiURL+"/cat");
  //   }
  viewuser(id: number) {
      const url = `${this.apiURL}/${id}`;
      return this.http.get<user>(url);
      }
      
  AllCategories(){
      return this.http.get<Categorie[]>(this.apiURL+"/cat");
        }
}
