import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { LoginComponent } from './login/login.component'; // Asegurarse de que el import es correcto

@Component({
  selector: 'app-root', // Cambiar el selector a 'app-root'
  standalone: true,
  imports: [LoginComponent, RouterOutlet, RouterLink], // Importar LoginComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mailbox';
}
