import { Component } from '@angular/core';
import { UserDTO } from '../../model/user-dto.model'; // Adjust the import path as necessary
import { UserService } from '../../service/user.service';

import { Router } from '@angular/router'; // Import Router for navigation

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  user: UserDTO = { username: '', password: '' }; // Initialize user with UserDTO
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    this.userService.login(this.user).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Handle successful login
        // For example, you might want to store the user's information or token and navigate to a different page
        this.router.navigate(['/dashboard']); // Redirect to the dashboard or home page
      },
      error: (error) => {
        console.error('Login failed', error);
        this.errorMessage = 'Invalid username or password'; // Display error message
      }
    });
  }
}