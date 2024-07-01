import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HomeComponent } from '../home/home.component';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HomeComponent,RouterOutlet, RouterLink], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor() {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
