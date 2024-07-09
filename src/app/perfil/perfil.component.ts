import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-perfil',
  imports:[FormsModule,RouterLink,HomeComponent],
  standalone: true,
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  nombreUsuario: string = '';
  apellidoUsuario: string = '';
  carreraUsuario: string = '';
  materiasUsuario: string = '';
  
  constructor(private router: Router) {}

  // Métodos para manejar la lógica del componente, como guardar los datos, pueden ser añadidos aquí.
}
