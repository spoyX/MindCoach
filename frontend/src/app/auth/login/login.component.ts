import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login.service';
import { user } from '../../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = { username: '', password: '' ,id:''};
  errorMessage: string | null = null; // Added errorMessage property

  constructor(private loginService: LoginService, private router: Router) {}

  login() {
    this.loginService.login(this.user).subscribe(
      (response) => {
        console.log('Login success:', response);

        // Save user data in the service
        this.loginService.saveUserData(response);

        // Navigate based on user role
        if (response.role === 'USER') {
          this.router.navigate([`client-profile/${response.id}`]);
        } else if (response.role === 'COACH') {
          this.router.navigate(['/dashboard']);
        } else {
          this.router.navigate(['/dashboard']);
        }

        // Clear any previous error message
        this.errorMessage = null;
      },
      (error) => {
        console.error('Login error:', error);
        // Set the error message to be displayed in the template
        this.errorMessage = 'Invalid username or password. Please try again.';
      }
    );
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> bbbc4229db4945ac115dfb548c27421261d75111
