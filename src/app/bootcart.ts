import { Injectable } from '@angular/core';
import { Boot } from './boots-list/boot';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Bootcart {

  private _cartList: Boot[] = [];
  
  cartList: BehaviorSubject <Boot[]> = new BehaviorSubject(this._cartList);
  
  addToCart(boot: Boot): void {
    const item = this._cartList.find(v1 => v1.nombre === boot.nombre);
  
    if (!item) {
      this._cartList.push({ ...boot });
    } else {
      item.quantity += boot.quantity;
    }
  
    this.cartList.next([...this._cartList]);
  }
  
}
