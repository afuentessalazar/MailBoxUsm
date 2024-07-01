import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RedactarComponent } from '../redactar/redactar.component';
import { MatCardModule } from '@angular/material/card';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RedactarComponent, MatCardModule, PerfilComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] // Corregido a styleUrls y hecho arreglo
})
export class HomeComponent {

}
