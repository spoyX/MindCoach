import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' };

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.login(this.user).subscribe(
      (response) => {
        console.log('Login success:', response);

        // Save user data in the service
        this.loginService.saveUserData(response);

        if (response.role === 'USER') {
          this.router.navigate(['/dashboard']);
        } else if (response.role === 'COACH') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}

