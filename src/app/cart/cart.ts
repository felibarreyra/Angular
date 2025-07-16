import { Component } from '@angular/core';
import { Boot } from '../boots-list/boot';
import { Bootcart } from '../bootcart';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {
  cartList$: Observable <Boot[]>;

  constructor(private cart: Bootcart) {
    this.cartList$ = this.cart.cartList.asObservable();
  }  
  
  getTotal(cartList: Boot[]): number {
    return cartList.reduce((sum, c) => sum + c.precio * c.quantity, 0);
  }
  
}
