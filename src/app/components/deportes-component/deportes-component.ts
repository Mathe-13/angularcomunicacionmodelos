import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-deportes-component',
  standalone: false,
  styleUrl: './deportes-component.css',
  templateUrl: './deportes-component.html',
})
export class DeportesComponent {
  @Input() sport!: string;
  @Output() seleccionarFavoritoPadre: EventEmitter<any> = new EventEmitter();
  public mensaje!: string;
  mostrarFavorito(): void {
    this.seleccionarFavoritoPadre.emit(this.sport);
  }
}
