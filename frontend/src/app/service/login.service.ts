import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private baseUrl = 'http://localhost:8081/user'; // Backend API URL

  constructor(private http: HttpClient) {}

  // Login method to send user credentials to the backend
  login(user: { username: string; password: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, user);
  }

  // Method to store user data locally after login
  saveUserData(userData: any): void {
    localStorage.setItem('username', userData.username);
    localStorage.setItem('role', userData.role);
  }

  // Method to clear user data on logout
  clearUserData(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('role');
  }

  // Getters for role and username (optional)
  getRole(): string | null {
    return localStorage.getItem('role');
  }

  getUsername(): string | null {
    return localStorage.getItem('username');
  }
}
