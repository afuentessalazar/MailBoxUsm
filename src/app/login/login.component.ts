import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ComunicadosService } from '../services/comunicados.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  constructor(private router: Router, private authService: ComunicadosService) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  login(): void {
    if (this.username === 'docente' && this.password === 'docente123') {
      this.authService.setUserType('docente');
      this.router.navigate(['/home']);
    } else if (this.username === 'estudiante' && this.password === 'estudiante123') {
      this.authService.setUserType('estudiante');
      this.router.navigate(['/comunicados']);
    } else {
      alert('Credenciales incorrectas');
    }
  }
}
