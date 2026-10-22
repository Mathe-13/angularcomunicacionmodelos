import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deportes-component',
  standalone: false,
  styleUrl: './deportes-component.css',
  templateUrl: './deportes-component.html',
})
export class DeportesComponent {
  @Input() sport!: string;
  public mensaje!: string;

  mostrarFavorito(): void {
    this.mensaje = "Su deporte favorito es " + this.sport;
  }
}
