import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { RedactarComponent } from '../redactar/redactar.component';
import { MatCardModule } from '@angular/material/card';
import { PerfilComponent } from '../perfil/perfil.component';
import { ComunicadosComponent } from '../comunicados/comunicados.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RedactarComponent, MatCardModule, PerfilComponent, ComunicadosComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'] 
})
export class HomeComponent {

}
