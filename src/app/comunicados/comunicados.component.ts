import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComunicadosService } from '../services/comunicados.service';
import { FormsModule } from '@angular/forms'; 
import { Router, RouterLink } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-comunicados',
  standalone: true,
  imports: [CommonModule, FormsModule, MatListModule, HomeComponent, RouterLink],
  templateUrl: './comunicados.component.html',
  styleUrls: ['./comunicados.component.scss']
})
export class ComunicadosComponent implements OnInit {
  comunicados: any[] = [];
  comunicadosFiltrados: any[] = [];
  carreras: string[] = [];
  paralelos: string[] = [];
  selectedCarrera: string = '';
  selectedParalelo: string = '';
  userType: string = ''; 

  constructor(private comunicadosService: ComunicadosService, private router: Router) {}

  ngOnInit(): void {
    this.carreras = this.comunicadosService.getCarreras();
    this.paralelos = this.comunicadosService.getParalelos();
    this.cargarComunicados();
    this.userType = this.comunicadosService.getUserType();
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

  editarComunicado(comunicado: any): void {
    this.comunicadosService.setComunicadoActual(comunicado);
    this.router.navigate(['/redactar']);
  }
}
