import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Boot } from '../boots-list/boot';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrls: ['./input-integer.scss']  
})
export class InputInteger {
  @Input()
  quantity!: number;
  @Input()
  max!: number;
  @Input()
  boot!: Boot; 

  @Output() quantityChange = new EventEmitter<number>();
  @Output() maxReached = new EventEmitter<string>();

  constructor() {}

  changeQuantity(event: { target: { value: number | undefined; }; }): void {
    this.quantityChange.emit(event.target.value);
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit("Se ha alcanzado el máximo permitido");
    }
  }
}
