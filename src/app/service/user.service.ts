import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiURL: string = 'http://localhost:8081/user';
  apiURLCat: string = 'http://localhost:8081/user/cat';

  constructor(private http : HttpClient) { }
    

  AllUser(){
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
}
