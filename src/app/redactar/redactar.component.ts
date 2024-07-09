import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { ComunicadosService } from '../services/comunicados.service'; 
import { FormsModule, } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Si aún no está importado
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-redactar',
  standalone:true,
  imports: [RouterOutlet, RouterLink, HomeComponent, FormsModule,CommonModule,],
  templateUrl: './redactar.component.html',
  styleUrls: ['./redactar.component.scss']
})

export class RedactarComponent {
  tituloComunicado: string = '';
  selectedCarrera: string = '';
  selectedParalelo: string = '';

  constructor(private comunicadosService: ComunicadosService, private router: Router) {}

  ngOnInit(): void {
    const comunicado = this.comunicadosService.getComunicadoActual();
    if (comunicado) {
      this.tituloComunicado = comunicado.titulo;
      this.selectedCarrera = comunicado.carrera;
      this.selectedParalelo = comunicado.paralelo;
    }
  }

  enviarComunicado() {
    if (this.formularioValido()) {
      this.comunicadosService.addComunicado({
        titulo: this.tituloComunicado,
        carrera: this.selectedCarrera,
        paralelo: this.selectedParalelo
      });
      this.router.navigate(['/home']); 
    } else {
      alert("Por favor, complete todos los campos requeridos antes de enviar.");
    }
  }

  formularioValido(): boolean {
    return !!this.tituloComunicado && !!this.selectedCarrera && !!this.selectedParalelo;
  }

  get carreras(): string[] {
    return this.comunicadosService.getCarreras();
  }

  get paralelos(): string[] {
    return this.comunicadosService.getParalelos();
  }
}