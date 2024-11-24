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
  private coachSign='http://localhost:8081/api/coaches/'


  constructor(private http: HttpClient) { }

  AllUser(): Observable<user[]> {
    return this.http.get<user[]>(this.apiURL);
  }
  allCoach(){
    return this.http.get(this.coachSign +'all')
  }
  allPending(){
    return this.http.get(this.coachSign +'pending')
  }
  pendingId(id:any){
    return this.http.get(this.coachSign + id)
    
  }
  decision(id: any, decision: string) {
    return this.http.post(this.coachSign + `decision/${id}`, { decision });
  }
  

  coachID(id:any){
    return this.http.get(this.coachSign + id) 
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
      
          AllCategories():Observable<Categorie[]>{
            return this.http.get<Categorie[]>(this.apiURL+"/cat");
            }

  


}
