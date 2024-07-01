import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ComunicadosService } from '../services/comunicados.service'; // Asegúrate de crear este servicio
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-redactar',
  standalone:true,
  imports: [RouterOutlet, RouterLink, HomeComponent, FormsModule,CommonModule],
  templateUrl: './redactar.component.html',
  styleUrls: ['./redactar.component.scss']
})

export class RedactarComponent {
  tituloComunicado: string = '';
  selectedCarrera: string = '';
  selectedParalelo: string = '';

  constructor(private comunicadosService: ComunicadosService, private router: Router) {}

  enviarComunicado(titulo: string) {
    if (titulo) {
      this.comunicadosService.addComunicado({
        titulo,
        carrera: this.selectedCarrera,
        paralelo: this.selectedParalelo
      });
      this.router.navigate(['/home']);
    }
  }

  get carreras(): string[] {
    return this.comunicadosService.getCarreras();
  }

  get paralelos(): string[] {
    return this.comunicadosService.getParalelos();
  }
}