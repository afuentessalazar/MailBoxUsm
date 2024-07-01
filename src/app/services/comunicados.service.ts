import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {
  private comunicados: any[] = []; // Array para almacenar los comunicados
  private carreras: string[] = ['Ingeniería', 'Medicina', 'Derecho'];
  private paralelos: string[] = ['A', 'B', 'C'];

  constructor() {}

  // Devuelve todos los comunicados
  getComunicados(): any[] {
    return this.comunicados;
  }

  // Añade un comunicado al array
  addComunicado(comunicado: any) {
    this.comunicados.push(comunicado);
  }

  // Elimina un comunicado del array según su índice
  deleteComunicado(index: number) {
    this.comunicados.splice(index, 1);
  }

  // Devuelve las carreras disponibles
  getCarreras(): string[] {
    return this.carreras;
  }

  // Devuelve los paralelos disponibles
  getParalelos(): string[] {
    return this.paralelos;
  }
}
