import { Component, Input } from '@angular/core';
import Coche from '../../models/coche';

@Component({
  selector: 'app-hijos-coches-component',
  standalone: false,
  styleUrl: './hijos-coches-component.css',
  templateUrl: './hijos-coches-component.html',
})
export class HijosCochesComponent {
  @Input() car!: Coche;

  constructor() {
    //this.car = new Coche("Pontiac", "Firebird", 0, 25);
  }

  acelerarCoche(): void {
    this.car.velocidad += this.car.aceleracion;
  }

  frenarCoche(): void {
    this.car.velocidad -= this.car.aceleracion;
    if (this.car.velocidad < 0) {
      this.car.velocidad = 0;
    }
  }
}
