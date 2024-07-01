import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicadosService } from '../services/comunicados.service';
import { RedactarComponent } from '../redactar/redactar.component';
import { HomeComponent } from '../home/home.component';
import { FormsModule } from '@angular/forms'; 
import { RouterOutlet, RouterLink } from '@angular/router';


@Component({
  selector: 'app-comunicados',
  standalone: true,
  imports: [HomeComponent ,CommonModule, RedactarComponent,FormsModule,RouterOutlet, RouterLink],
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