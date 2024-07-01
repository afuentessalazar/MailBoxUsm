import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicadosService } from '../services/comunicados.service';
import { RedactarComponent } from '../redactar/redactar.component';

@Component({
  selector: 'app-comunicados',
  standalone: true,
  imports: [CommonModule, RedactarComponent],
  templateUrl: './comunicados.component.html',
  styleUrl: './comunicados.component.scss'
})
export class ComunicadosComponent implements OnInit {
  comunicados: any[] = [];
  carreras: string[] = [];
  paralelos: string[] = [];

  constructor(private comunicadosService: ComunicadosService) {}

  ngOnInit(): void {
    this.cargarComunicados();
    this.carreras = this.comunicadosService.getCarreras();
    this.paralelos = this.comunicadosService.getParalelos();
  }

  cargarComunicados() {
    this.comunicados = this.comunicadosService.getComunicados();
  }

  eliminarComunicado(index: number) {
    this.comunicadosService.deleteComunicado(index);
    this.cargarComunicados();
  }
}