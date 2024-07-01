import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicadosService {
  private carreras: string[] = ['Ingeniería', 'Medicina', 'Derecho'];
  private paralelos: string[] = ['A', 'B', 'C'];

  constructor() {}

  getComunicados(): any[] {
    // Asumo que aquí tienes algún código existente para manejar los comunicados
    return [];
  }

  addComunicado(comunicado: any) {
    // Asumo que aquí tienes algún código existente para añadir un comunicado
  }

  deleteComunicado(index: number) {
    // Asumo que aquí tienes algún código existente para eliminar un comunicado
  }

  getCarreras(): string[] {
    return this.carreras;
  }

  getParalelos(): string[] {
    return this.paralelos;
  }
}