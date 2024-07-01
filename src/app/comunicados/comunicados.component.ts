import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicadosService } from '../services/comunicados.service';
import { RedactarComponent } from '../redactar/redactar.component';
import { FormsModule } from '@angular/forms'; // Importar FormsModule

@Component({
  selector: 'app-comunicados',
  standalone: true,
  imports: [CommonModule, RedactarComponent,FormsModule],
  templateUrl: './comunicados.component.html',
  styleUrl: './comunicados.component.scss'
})
export class ComunicadosComponent implements OnInit {
  comunicados: any[] = [];
  comunicadosFiltrados: any[] = [];
  carreras: string[] = [];
  paralelos: string[] = [];
  selectedCarrera: string = '';
  selectedParalelo: string = '';

  constructor(private comunicadosService: ComunicadosService) {}

  ngOnInit(): void {
    this.carreras = this.comunicadosService.getCarreras();
    this.paralelos = this.comunicadosService.getParalelos();
    this.cargarComunicados();
  }

  cargarComunicados() {
    this.comunicados = this.comunicadosService.getComunicados();
    this.filtrarComunicados();
  }

  filtrarComunicados() {
    this.comunicadosFiltrados = this.comunicados.filter(comunicado =>
      (this.selectedCarrera ? comunicado.carrera === this.selectedCarrera : true) &&
      (this.selectedParalelo ? comunicado.paralelo === this.selectedParalelo : true)
    );
  }

  eliminarComunicado(index: number) {
    this.comunicadosService.deleteComunicado(index);
    this.cargarComunicados();
  }
}