import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  public deportes: Array<string>;
  public mensaje!: string;
  //Un metodo para enviar al hijo
  sleccionarFavoritoPadre(event: string): void {
    console.log("Leyendo padre")
    this.mensaje = "Su deporte favorito es: " + event;
  }

  constructor() {
    this.deportes = ["Curling", "Dardos", "Canicas", "Beisbol"]
  }
}
