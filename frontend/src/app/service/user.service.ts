import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../model/user';
import { catchError, Observable, throwError } from 'rxjs';
import { Categorie } from '../model/Categorie.model';
import { UserDTO } from '../model/user-dto.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  apiURL: string = 'http://localhost:8081/user';
  loginURL: string = 'http://localhost:8081/user/login';


  constructor(private http: HttpClient) { }

  AllUser(): Observable<user[]> {
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

          AllCategories():Observable<Categorie[]>{
            return this.http.get<Categorie[]>(this.apiURL+"/cat");
            }

            getUserProfile(userId: number): Observable<user> {
              return this.http.get<user>(`${this.apiURL}/${userId}`);
            }

            updateUserProfile(userId: number, user: user): Observable<user> {
              return this.http.put<user>(`${this.apiURL}/${userId}`, user);
            }

            deleteUserProfile(id: number): Observable<any> {
              return this.http.delete(`${this.apiURL}/${id}`);
            }

            // New login method
  login(userDTO: UserDTO): Observable<any> {
    return this.http.post<any>(this.loginURL, userDTO).pipe(
      catchError((error) => {
        console.error('Login error', error);
        return throwError(error);
      })
    );
  }
}

            
          
