import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from '../login.service'; // Adjust the path based on your project structure

@Injectable({
  providedIn: 'root',
})



export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean {
    const UserLogin = this.loginService.getUsername() !== null;

    if (!UserLogin) {


      this.router.navigate(['/login']);
      return false;
    }


    const requiredRole = route.data['role'] as string; // Get the required role from route data
    if (requiredRole && this.loginService.getRole() !== requiredRole) {


      return false;
    }

    return true;
  }
}
